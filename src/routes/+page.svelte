
<!-- 

  https://kit.svelte.dev/docs/form-actions

 -->
<svelte:head>
  <title>instill.xyz org spaces</title>
</svelte:head>

<!-- <div class="_content"> -->
  <!-- <a class="mb-8 inline-block" href="/">home</a> -->
  <h1>instill spaces</h1>

  {#each orgSpaces?.spaces as space}
    {@const link = baseUrl + "spaces/" + space.name}
    <div class="relative">
      <div class="Card-solid --light --btn p-4 mb-2">
        <div class="text-xl | z-40 mb-1"><a href="{link}">{space.spaceName || space.name}</a></div>
        <div class="_link-reset | z-40">{space.description}</div>
        <a class="bg-link | " href="{link}">{space.name}</a>
      </div>
    </div>
  {/each}

<!-- </div>   -->






<script>
  // import { goto, preloadData } from '$app/navigation';
  // import { getDerivedComments } from '$instill/instill-store'

  // import { base } from '$app/paths'

  import * as config from '$instill/instill-config'
  import * as configPreview from '$instill/instill-config-preview'
  import { dev } from '$app/environment';
  let baseConfig, orgSpaces
  if(dev) {
    baseConfig = configPreview.baseConfig
    orgSpaces = configPreview.orgSpaces
  } else {
    baseConfig = config.baseConfig
    orgSpaces = config.orgSpaces
  }

  console.log('baseConfig:', baseConfig, `[${baseConfig.base_url}]`)

  let baseUrl = baseConfig.base_url || '/instill';
</script>


<style lang="scss">

  .bg-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    opacity: 0;
    height: 100%;
  }
</style>



