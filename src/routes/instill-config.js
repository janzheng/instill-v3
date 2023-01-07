

import { base } from '$app/paths'
import { sharedSpaces } from '$instill-helpers/instill-config-shared'

// deployment-specific — base config for all spaces
export const baseConfig = {
  description: 'prod',
  // apikey: '' // use default
  pd_base: 'V3_DB_BASE', // used to fetch pd user account data
  base_url: "/", // use sveltekit to denote basepath
  register_url: '/register',
  settings: {
    loud: false,
    connector: 'Airtable',
    savingText: 'Saving to Airtable...',
    getPdProfile: false,
    useTurnstile: false, // TODO: figure out how to make this space-specific, or does that not really matter?
    // passwordCheckRoute: `instill/profiles?/passwordCheck`
    // updateProfileRoute: `instill/profiles?/updateProfile`
  },
  posts: {
    env: 'INSTILL_POSTS_BASE', // _baseId of the profile table
    // baseId: '123abc', // set it here directly; should override env if set
    tableName: "Posts",
    sourceType: "Airtable",
  },
  events: {
    env: 'INSTILL_EVENTS_BASE', // _baseId of the profile table
    // baseId: '123abc', // set it here directly; should override env if set
    tableName: "Events",
    sourceType: "Airtable",
  },
  profiles: {
    env: 'INSTILL_PROFILES_BASE', // _baseId of the profile table
    // baseId: '123abc', // set it here directly; should override env if set
    tableName: "Profiles",
    sourceType: "Airtable",
  },
}


// spaces are loaded into [space] settings
export const orgSpaces = {
  spaces: [
    ...sharedSpaces,
  ]
}





/* 

  Settings are shared by the page server too!

*/

// test settings
export const testPage = {
  name: "test space ",

  // v1 - page support
  // pages: [
  //   {
  //     name: 'comments',
  //     settings: {
  //       useOptimistic: true,
  //       useTurnstile: false,
  //       polling: {
  //         enabled: false,
  //         speed: 1800
  //       }
  //     }
  //   },
  // ],

  // v0 - no page support
  settings: {
    blockType: 'Comments',
    useOptimistic: true,
    useTurnstile: false,
    polling: {
      enabled: false,
      speed: 1800
    }
  }
}
