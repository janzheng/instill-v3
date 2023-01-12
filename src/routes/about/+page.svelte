
<div class="about-notion">
  <div class="">
    <!-- legacy PhageCafe content -->
    <!-- <Notion loadingMsg={'Loading...'} classes={''} id={"a02a3acc48764fdb9b6cb374732ddbf2"} api={env.PUBLIC_NOTION_API}/> -->
    <Notion loadingMsg={'Loading...'} classes={''} blocks={data.notionData["a02a3acc48764fdb9b6cb374732ddbf2"]} api={env.PUBLIC_NOTION_API}/>
  </div>
</div>  

<div class="my-12">
  <SpaceView {baseConfig} {_space} {spaceName} {subpaths} {comments} {profiles} />
</div>





<!-- this needs to be afer SpaceView since it alters the head -->


{#key $ConfigHead}
  <Head />
{/key}

<svelte:head>
  <title>{ 'About Instill'}</title>
</svelte:head>


<footer class="about-notion-footer | ">
  <div class="my-4">
    <!-- legacy PhageCafe content -->
    <!-- <Notion loadingMsg={'Loading...'} classes={'pt-4'} id={"92765b51ab104440b2e44600342305e1"} api={env.PUBLIC_NOTION_API}/> -->
    <Notion loadingMsg={'Loading...'} classes={'pt-4'} blocks={data.notionData["92765b51ab104440b2e44600342305e1"]} api={env.PUBLIC_NOTION_API}/>
  </div>
</footer>





<script>
  import Head from '$lib/components/shared/Head.svelte'
  import { Head as ConfigHead } from '$lib/config.js'

  import { env } from '$env/dynamic/public';
  import Notion from '@yawnxyz/sveltekit-notion'
	// import { page } from '$app/stores';

  export const logo = '/icon.png';



  import * as config from '$instill/instill-config'
  import { filterFind } from '$plasmid/utils/filterby'
  import SpaceView from '$instill-helpers/components/SpaceView.svelte';
  export let baseConfig = config.baseConfig;
  export let orgSpaces = config.orgSpaces;

  export let data;
  export let spaceName, comments, profiles, subpaths;
  let _space;
  
  $: if(data) {
    spaceName = data.space.spaceName || data.space;
    // console.log('>>>> about: ', spaceName, data, 'org spaces:', orgSpaces)
    comments = data.space.comments;
    subpaths = data.space.subpaths;
    profiles = data.space.profiles;
    _space = filterFind(orgSpaces.spaces, 'name', spaceName); 
  }

</script>



<style lang="scss" global>
  .about-notion {
    .notion-page-icon {
      @apply text-3xl;
    }
    .notion-callout-icon {
      @apply self-start;
    }
  }

  .about-notion .notion-callout-icon {
    @apply self-start;
  }

</style>