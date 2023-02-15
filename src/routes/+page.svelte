
<!-- 

  https://kit.svelte.dev/docs/form-actions

 -->

<div class="hero | my-4">
  <div class="text-lg">
    <!-- legacy PhageCafe content -->
    <Notion loadingMsg='' classes={''} blocks={data.notionData["f91a56ecf579421e85b6496bb4354a39"]} api={env.PUBLIC_NOTION_API}/>
    <div class="mt-2">
      <a href="/join" class="Btn-solid">Join the Community</a>
      <a href="/about" class="Btn-outline">Learn more</a>
    </div>
  </div>
</div>  


<div class="my-12">
  <SpaceView {baseConfig} {_space} {spaceName} {subpaths} {comments} {profiles} />
</div>
 

{#key $ConfigHead}
  <Head />
{/key}


<footer class="about-notion-footer | ">

  <div class="">
    <!-- legacy PhageCafe content -->
    <Notion loadingMsg='' classes={'pt-4'} blocks={data.notionData["92765b51ab104440b2e44600342305e1"]} api={env.PUBLIC_NOTION_API}/>
  </div>

</footer>





<script>
  import Head from '$lib/components/shared/Head.svelte'
  import { Head as ConfigHead } from '$lib/config.js'

  import { env } from '$env/dynamic/public';
  import Notion from '@yawnxyz/sveltekit-notion'

  // import { goto, preloadData } from '$app/navigation';
  // import { getDerivedComments } from '$instill/instill-store'

  // import { base } from '$app/paths'

  import * as config from '$instill/instill-config'
  import { filterFind } from '$plasmid/utils/filterby'
  import SpaceView from '$instill-helpers/components/SpaceView.svelte';
  export let baseConfig = config.baseConfig;
  export let orgSpaces = config.orgSpaces;

  export let data;
  export let spaceName, comments, profiles, subpaths;
  let _space;
  $: if(data) {
    spaceName = data.space.spaceName || data.space
    // console.log('>>>> about: ', spaceName, data, 'org spaces:', orgSpaces)
    comments = data.space.comments
    subpaths = data.space.subpaths
    profiles = data.space.profiles
    _space = filterFind(orgSpaces.spaces, 'name', spaceName); 
  }
</script>


<style lang="scss" global>

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

  .notion-page {
    padding-left: 0;
    padding-right: 0;
  }

  .about-notion-footer .notion-page-icon {
    @apply text-3xl;
  }
  .about-notion-footer .notion-callout-icon {
    @apply self-start;
  }

  // notion-specific selectors
  #_block-4060de92-f57b-436e-8b49-945b32ecaf21 {
    h2 { 
      @apply pt-2;
    }
    p {
      @apply pb-0 font-medium ;
    }
    p ~ p {
      // space out siblings
      @apply pb-0 font-medium first-letter:mr-3;
    }
    .notion-link {
    }
  }
</style>




