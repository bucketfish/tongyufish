<script lang="ts">
  // import { env } from '$lib/env'

  let { mouse } = $props();
  import { T } from '@threlte/core'
  import { useGltf } from '@threlte/extras'
  import * as THREE from 'three'
</script>


<T.PerspectiveCamera
  makeDefault
  position={[7.5, 1, 15]}
/>

<T.AmbientLight color={0xffffff} intensity={0.1} />
<T.DirectionalLight
position={[7, -10, 12]} intensity={3}
/>
<T.DirectionalLight
  position={[6, 1, 20]}
  intensity={1.2}
/>


{#await useGltf(`${import.meta.env.BASE_URL}shark.glb`) then gltf}
  <T
    is={gltf.scene}
    scale={3.2}
    rotation.x={mouse.y - 0.7}
    rotation.y={mouse.x - 1.2}
  />
{/await}
