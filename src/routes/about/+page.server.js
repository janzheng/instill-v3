/* 

  Loads the About Instill space
  
*/

import { loadNotionPages } from '$plasmid/utils/notion'
import { loadSpaceSlug } from '$instill-helpers/instill-server'

// export const load = loadSpaceSlug;
export const load = async ({ params, url }) => {
  let data = loadSpaceSlug({ params, url }, 'instill-meta')

  let notionPageIds = [
    'a02a3acc48764fdb9b6cb374732ddbf2',
    '92765b51ab104440b2e44600342305e1',
  ]

  let notionData = await loadNotionPages(notionPageIds)

  return { space: data, notionData }
};
