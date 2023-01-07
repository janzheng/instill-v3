
/* 

  Gets topics by ROOT for Namespacing / Pages / Folders

*/

// import { json } from '@sveltejs/kit';
// import { cachedjson, errorjson } from '$plasmid/utils/sveltekit-helpers'
// import { getTopic, getTopics, getComments, postComment, validateTurnstile, validatePassword } from '../shared'

// /* 

//   gets all comments
//   - http://localhost:3051/comments/api/comments

//   gets comments/replies for a specific topic:
//   - http://localhost:3051/comments/api/comments?rootId=first-topic--rec2tjW4VbNdjFA2I
  
// */
// export const GET = async (req) => {
//   let { rootId, postType, channel, space } = Object.fromEntries(req.url.searchParams)
//   if(rootId) {
//     return json(await getTopic(rootId))
//   }
//   return json(await getTopics(postType, {channel, space}))
// }






// // handles JSON Post endpoints
// export const POST = async ({ params, request }) => {
//   try {
//     let data = await request.json()
//     let { Username, Password, Comment, Topic, Keywords, Channels } = data

//     // require Topic 
//     // drop the Parent if it exists
//     if (!Topic)
//       return json({
//         success: false,
//         error: "Topic required"
//       })


//     if (await validatePassword({ id: Username, plaintextPass: Password }) === false) {
//       return {
//         success: false,
//         error: "Invalid username or password",
//         formJson, // return to re-populate form
//       }
//     }

//     let comment = await postComment({
//       Username, Comment, Topic, Keywords, Channels
//       // drop Parent
//       // Comment acts as body
//     }, data.Space)

//     return json({
//       success: true,
//       comment,
//     })
//   } catch (err) {
//     console.error(err.message || err)
//     return errorjson(500, err.message || err)
//   }
// }