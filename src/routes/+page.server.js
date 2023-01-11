/* 

  Loads the main Instill space
  - this is the space that is loaded when the user visits the root of the site
  - "Science Twitter / PD Main community"

*/
import { loadSpaceSlug } from '$instill-helpers/instill-server'

// export const load = loadSpaceSlug;
export const load = ({ params, url }) => {
  return loadSpaceSlug({ params, url }, 'instill-science')
};








