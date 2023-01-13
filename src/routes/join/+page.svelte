

<div class="_content-narrow">
  <ProfileRegister {baseConfig} />
</div>




<script>
  
  import * as config from '$instill/instill-config'
  import * as configPreview from '$instill/instill-config-preview'
  import { dev } from '$app/environment';
  import { env } from '$env/dynamic/public';
  let baseConfig, orgSpaces
  if(dev||env.PUBLIC_PREVIEW==="true") {
    baseConfig = configPreview.baseConfig
    orgSpaces = configPreview.orgSpaces
  } else {
    baseConfig = config.baseConfig
    orgSpaces = config.orgSpaces
  }

  
  import ProfileRegister from '$instill-helpers/components/ProfileRegister.svelte'

  // export let data 
  // export let loading = true
  // let {profile, topics, comments, slug} = data
  let loud = false;

  // $: if(data) {
  //   loud = instill-config?.settings?.loud || true 

  //   // console.log('Profiles Data:', profile, data.slug, topics, $page.url)
  //   loading = false
  // }
  


</script>







