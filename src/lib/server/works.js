// this scans the folder for the images that go into the portfolio, sorts and tags them etc

import { readdir, readFile, mkdir, stat } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = 'static/w';
const THUMB_DIR = 'static/w/_thumb';
const THUMB_WIDTH = 600;
const MEDIA = /\.(png|jpe?g|gif|webp|avif|svg|webm)$/i;
const VIDEO = /\.webm$/i;

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const url = (...parts) => encodeURI('/' + join('w', ...parts));

async function thumbnail(srcPath, relParts) {
  if (VIDEO.test(srcPath) || /\.(gif|svg)$/i.test(srcPath)) return null;

  const rel = relParts.join('/');
  const thumbPath = join(THUMB_DIR, rel.replace(/\.[^.]+$/, '.webp'));

  try {
    const [srcStat, thumbStat] = await Promise.all([
      stat(srcPath),
      stat(thumbPath).catch(() => null)
    ]);
    if (thumbStat && thumbStat.mtimeMs >= srcStat.mtimeMs) {
      return encodeURI('/' + join('w', '_thumb', rel.replace(/\.[^.]+$/, '.webp')));
    }
  } catch { /* source missing, skip */ }

  try {
    await mkdir(dirname(thumbPath), { recursive: true });
    execFileSync('magick', [srcPath, '-resize', `${THUMB_WIDTH}x>`, '-quality', '75', thumbPath]);
    return encodeURI('/' + join('w', '_thumb', rel.replace(/\.[^.]+$/, '.webp')));
  } catch {
    return null;
  }
}


// PARSING FUNCTIONS
// format: {YYYY-MM} title [tags !modifiers] (credit) <link>
function parseName(name, { stripExt = true } = {}) {
  const base = stripExt ? name.replace(/\.[^.]+$/, '') : name;

  const m = base.match(
    /^(?:(\d{4}-\d{2})[\s._-]+)?(.*?)(?:\s*\[([^\]]*)\])?(?:\s*\(([^)]*)\))?(?:\s*<([^>]*)>)?$/
  );

  if (!m) return { date: null, title: base, tags: [], modifiers: [], credit: null, link: null };

  const tokens = m[3] ? m[3].trim().split(/\s+/).filter(Boolean) : [];
  return {
    date: m[1] || null,
    title: m[2].trim(),
    tags: tokens.filter(t => !t.startsWith('!')),
    modifiers: tokens.filter(t => t.startsWith('!')).map(t => t.slice(1)),
    credit: m[4]?.trim() || null,
    link: m[5]?.trim().replaceAll(':', '/') || null
  };
}


// parsing folders for collections
function parseFolder(name) {
  const clean = name.replace(/\s*\[[^\]]*\]/g, '').trim();
  return {
    name: clean || name,
    slug: slugify(clean || name)
  };
}

// reads subfolder for things with multiple images
async function readImages(dir, relParts) {

  // list and sort entries in the folder
  const entries = (await readdir(dir, { withFileTypes: true }))
    .filter(e => e.isFile() && MEDIA.test(e.name))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  // parse the sub-folder entries and keep the name as caption (optional)
  return Promise.all(entries.map(async e => {
    const { title } = parseName(e.name);
    const thumb = await thumbnail(join(dir, e.name), [...relParts, e.name]);
    return { src: url(...relParts, e.name), thumb, caption: title || null, video: VIDEO.test(e.name) };
  }));
}

// optional _note.md in a work for additional explanation if we want.
async function readNote(dir) {
  try {
    return (await readFile(join(dir, '_note.md'), 'utf8')).trim();
  } catch {
    return null;
  }
}

// ok now go through everything yay!
export async function scanWorks() {
  const items = [];
  const collections = [];

  const topLevel = await readdir(ROOT, { withFileTypes: true });

  for (const entry of topLevel) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

    if (entry.isDirectory() && /^\d{4}-\d{2}/.test(entry.name)) {
      // top-level folder with YYYY-MM prefix = single loose multi-image item
      const { date, title, tags, modifiers, credit, link } = parseName(entry.name, { stripExt: false });
      const path = join(ROOT, entry.name);
      const images = await readImages(path, [entry.name]);
      const note = await readNote(path);
      if (!images.length) continue;

      items.push({
        id: entry.name,
        slug: slugify(title),
        title,
        tags,
        modifiers,
        credit,
        link,
        date,
        note,
        collection: null,
        collectionName: null,
        images,
        src: images[0].src,
        thumb: images[0].thumb,
        video: images[0].video,
        count: images.length
      });
    } else if (entry.isDirectory()) {
      const coll = parseFolder(entry.name);
      coll.dirName = entry.name;
      collections.push(coll);

      const children = await readdir(join(ROOT, entry.name), { withFileTypes: true });

      for (const child of children) {
        if (child.name.startsWith('_') || child.name.startsWith('.')) continue;

        const isMulti = child.isDirectory();
        if (!isMulti && !MEDIA.test(child.name)) continue;

        const { date, title, tags, modifiers, credit, link } = parseName(child.name, { stripExt: !isMulti });

        let images, note = null;
        if (isMulti) {
          const path = join(ROOT, entry.name, child.name);
          images = await readImages(path, [entry.name, child.name]);
          note = await readNote(path);
          if (!images.length) continue;
        } else {
          images = [{ src: url(entry.name, child.name), caption: null, video: VIDEO.test(child.name) }];
        }

        items.push({
          id: `${entry.name}/${child.name}`,
          slug: slugify(title),
          title,
          tags,
          modifiers,
          credit,
          link,
          date,
          note,
          collection: coll.slug,
          collectionName: coll.name,
          images,
          src: images[0].src,
          thumb: images[0].thumb,
          video: images[0].video,
          count: images.length
        });
      }
    } else if (MEDIA.test(entry.name)) {
      const { date, title, tags, modifiers, credit, link } = parseName(entry.name);
      const thumb = await thumbnail(join(ROOT, entry.name), [entry.name]);

      items.push({
        id: entry.name,
        slug: slugify(title),
        title,
        tags,
        modifiers,
        credit,
        link,
        date,
        note: null,
        collection: null,
        collectionName: null,
        images: [{ src: url(entry.name), thumb, caption: null, video: VIDEO.test(entry.name) }],
        src: url(entry.name),
        thumb,
        video: VIDEO.test(entry.name),
        count: 1
      });
    }
  }

  const starred = (i) => i.modifiers.includes('star') ? 1 : 0;
  items.sort((a, b) =>
    starred(b) - starred(a) ||
    (b.date ?? '').localeCompare(a.date ?? '') ||
    (a.collectionName ?? '').localeCompare(b.collectionName ?? '')
  );

  const tags = [...new Set(items.flatMap(i => i.tags))].sort();

  collections.sort((a, b) => a.name.localeCompare(b.name));

  return { items, collections, tags };
}
