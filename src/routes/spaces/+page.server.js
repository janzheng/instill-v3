/* 

  [OFFICIAL] — STATIC action route
  - invoke this from all Instill forms
  - eventually move functions to Plasmid; the action itself needs to be tied to page.server, but entire object can be imported


  invoke from elsewhere


*/


import { spaceActions } from '$instill-helpers/instill-server'

export const actions = {
  default: spaceActions.formHandler
}

