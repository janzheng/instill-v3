
<script>

  import { env } from '$env/dynamic/public';
	import { page } from '$app/stores';
	// import logo from './svelte-logo.svg';

  export const logo = '/icon.png';
</script>


<footer class="footer | mt-8">

  <div class="_content-narrow ">
    <div class="md:flex-row md:flex _items-center gap-4">
      <div class="footer-links 
        ---
        flex-1
        relative md:flex items-center flex-row gap-8  
      ">
        <section class="footer-links-section ">

          [@phage.directory](https://twitter.com/phagedirectory)
        </section>
        <section class="footer-links-section ">

          [hello@phage.directory](mailto:hello@phage.directory)
        </section>
        <section class="footer-links-section">

          [github](https://github.com/janzheng/instill-v3)
        </section>
        
      </div>    


      <div class="footer-title">

        [Phage Directory](https://phage.directory), { new Date().getFullYear() }
      </div>
    </div>

    <div class="text-center">

      All parts of this site is licensed CC BY 4.0 unless otherwise noted. 

      <!-- <div>
        <a href="/privacy">Privacy</a><span class="pr-4"></span><a href="/terms">Terms of Service</a>
      </div> -->

      <div class="text-center my-2">
        <img class="mx-auto" alt="instill logo" src="/instill_icon.png" width="48px">
      </div>
    </div>  
  </div>

</footer>

