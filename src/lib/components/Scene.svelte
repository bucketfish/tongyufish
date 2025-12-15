<script lang="ts">
  let { mouse } = $props();
  import { T, useTask, useThrelte } from '@threlte/core'
  import { interactivity, useGltf } from '@threlte/extras'
  import { Spring } from 'svelte/motion'
  import * as THREE from 'three'


  const { renderer, scene } = useThrelte()


  let lightMovement = $state(0);

  useTask((delta) => {
    lightMovement = 6 + Math.sin(delta * 0.6) * 0.4;
    // light.position.z = 4 + Math.cos(elapsed * 0.4) * 0.3;
  });



</script>


<T.PerspectiveCamera
  makeDefault
  position={[7.5, 1, 15]}

/>

<T.AmbientLight color={0xffffff} intensity={0.1} />
<T.DirectionalLight
position={[7, -10, 12 + lightMovement]} intensity={3}
/>
<T.DirectionalLight
  position={[6, 1, 20]}
  intensity={1.2}
/>



{#await useGltf('/shark.glb') then gltf}
  <T
    is={gltf.scene}
    scale={3.2}
    rotation.x={mouse.y - 0.7}
    rotation.y={mouse.x - 1.2}
  />
{/await}
