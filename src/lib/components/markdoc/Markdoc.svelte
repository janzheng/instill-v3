<script>
  export let doc = "";
  export let config = {};
  export let components = new Map;

  import Markdoc from "@markdoc/markdoc";
  import Tags from "./subcomponents/Tags.svelte";
  import { add_frontmatter } from "./frontmatter.js";

  // console.log('---> mdoc config', config)
  export const ast = Markdoc.parse(doc);
  const config_with_frontmatter = add_frontmatter(ast, config);
  export const content = Markdoc.transform(ast, config_with_frontmatter);
</script>

<Tags children={content.children} {components}></Tags>
