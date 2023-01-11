
<svelte:head>
  <title>{data.spaceName || data.space} {_space?.description ? ' | ' + _space?.description : '' }</title>
</svelte:head>

<!-- <div class="_content-narrow"> -->
  <!-- <a class="mb-8 inline-block" href="{baseUrl}">instill home</a> -->
  <SpaceView {baseConfig} {_space} spaceName={_space?.spaceName||spaceName} {subpaths} {comments} {profiles} />
<!-- </div>   -->











<script>

  // import { baseConfig, orgSpaces } from '$instill/instill-config'
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

  
  
  import { filterFind } from '$plasmid/utils/filterby'
  import SpaceView from '$instill-helpers/components/SpaceView.svelte';

  export let data;
  export let spaceName, comments, profiles, subpaths;
  let _space;

  import { browser } from '$app/environment';

  $: if(data) {
    // console.log('>>>> ', spaceName, data)
    spaceName = data.spaceName || data.space
    comments = data.comments
    subpaths = data.subpaths
    profiles = data.profiles
    _space = filterFind(orgSpaces.spaces, 'name', spaceName); 
  }

  // $: if(browser) console.log(`$$$ [space] -> new data:`, data, _space)
  $: if(browser) console.log(`$$$ [space] -> new data:`, data, _space)

</script>






