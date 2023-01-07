
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

  import SimpleLayout from '$instill-helpers/components/SimpleLayout.svelte';
  export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

</script>

<!-- <div>
<a class="inline-block" href="/instill">instill home</a>
</div> -->


<div class="layout" class:open={$isMenuOpen}>

  {#key data.path}
    <main
      id="main"
      tabindex="-1"
      in:fade={transitionIn}
      out:fade={transitionOut}
    >
      <SimpleLayout path={data.path}>
        <slot />
      </SimpleLayout>
    </main>
  {/key}
</div>



