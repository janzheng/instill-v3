/* 

  Loads the About Instill space
  
*/

import { loadSpaceSlug } from '$instill-helpers/instill-server'

// export const load = loadSpaceSlug;
export const load = ({ params, url }) => {
  return loadSpaceSlug({ params, url }, 'instill-meta')
};








