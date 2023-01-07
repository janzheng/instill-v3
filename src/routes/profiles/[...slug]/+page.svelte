
{#if loud}
  <div class="_content">
    <div class="Card-light p-2">
      [Profile] Page {slug}
      <br>Data path: {data?.path}
    </div>
  </div>
{/if}

<ProfileView {baseConfig} {orgSpaces} outsideClasses={''} {profile} {topics} {slug} {subpaths} />
  


<script>

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

  
  import ProfileView from '$instill-helpers/components/ProfileView.svelte';

  export let data, loading = true
  let {profile, topics, slug, subpaths} = data
  let loud = false

  $: if(data) {
    loud = baseConfig?.settings?.loud || false 
    loading = false
  }
  
</script>











<style lang="postcss" global>
  .Profile {
    h3 {
      padding-top: 0;
    }
  }

  .Profile-cover {
    width: 100%;
    img {
      max-height: 200px;
      object-fit: cover;
      width: 100%;
    }
  }

</style>