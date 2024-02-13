
<!-- reusable layout 
  https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-when-to-use-layout-groups
-->

<script>
  import { fade } from 'svelte/transition'
	import { preloadData } from '$app/navigation'
	import { onMount } from 'svelte'
	import { currentPage, isMenuOpen, user } from '$lib/store'
	import { navItems } from '$lib/config'
  import { page } from '$app/stores'

	import '../app.scss'

  import Footer from '$lib/layouts/Footer.md'

  import InstillLayout from '$instill-helpers/components/InstillLayout.svelte';
  export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

  // $: console.log('[layout] page', $page, $page.url.searchParams.get('type'))

</script>

<!-- <div>
<a class="inline-block" href="/instill">instill home</a>
</div> -->


<div class="layout" class:open={$isMenuOpen}>

  {#key $page.url.pathname}
    <main
      id="main"
      tabindex="-1"
      in:fade={transitionIn}
      out:fade={transitionOut}
    >
      <InstillLayout path={$page.url.pathname}>
        <slot />
      </InstillLayout>
    </main>
  {/key}
</div>


<Footer />


