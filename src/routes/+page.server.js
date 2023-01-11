
/* 

  Loads the main Instill space
  - this is the space that is loaded when the user visits the root of the site
  - "Science Twitter / PD Main community"

*/
import { loadNotionPages } from '$plasmid/utils/notion'
import { loadSpaceSlug } from '$instill-helpers/instill-server'

// export const load = loadSpaceSlug;
export const load = async ({ params, url }) => {
  let data = loadSpaceSlug({ params, url }, 'instill-science')

  let notionPageIds = [
    'f91a56ecf579421e85b6496bb4354a39',
    '92765b51ab104440b2e44600342305e1',
  ]

  let notionData = await loadNotionPages(notionPageIds)

  return { space: data, notionData }
};








