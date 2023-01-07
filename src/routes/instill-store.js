
import { get, writable, derived } from 'svelte/store'
import * as localStorage from "svelte-local-storage-store";




export const commentPassword = localStorage.writable('instillUser', '')

// used to cache a comment response
export const commentUser = localStorage.writable('commentUser', {}) 
export const isUserLoggedIn = derived(commentUser, $commentUser => {
  // should add a server-verification, or rename this to isUserDetails
  // to avoid confusion; these are NOT VERIFIED credentials
  if ($commentUser && $commentUser.Username && $commentUser.Password) return true
  return false
})

// export const isCredentialed = () => {
//   // "fake" the log in using this stored value
//   // this only shows if user details are entered, not if they're valid
//   // future: do a server-check for validity
//   let user
//   let unsub = commentUser.subscribe(v => {user = v})
//   if (user && user.Username && user.Password) return true
//   return false
// }

// export const commentPassword = localStorage.writable('commentPw', '')



// Move to Context! These stores need to be different per route
// or you'll get conflicts / infinite loops
export const space = writable({})
export const comments = writable([]) // comments are posts, including topic
export const tempComments = writable([]) // for optimistic updating

// combines comments and tempComments from optimistic updating
export const currentComments = derived(
  [comments, tempComments],
  ([$comments, $tempComments]) => {
    let commentsArr
    if (testPage.settings.useOptimistic) {
      commentsArr = [...$tempComments, ...$comments]
    } else {
      commentsArr = $comments
    }
    return commentsArr
  })


// export const currentComments = getDerivedComments($comments, $tempComments)
export const getDerivedComments = (comments, tempComments) => derived(
  [comments, tempComments],
  ([$comments, $tempComments]) => {
    let commentsArr = $comments
    if ($tempComments && Array.isArray($tempComments))
      commentsArr = [...$tempComments, ...$comments]
    // if (testPage.settings.useOptimistic) {

      // commentsArr = [...$tempComments, ...$comments]
    // } else {
    //   commentsArr = $comments
    // }
    return commentsArr
  })






// future: create a derived, polling comments store 


