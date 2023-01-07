
/* 

  Gets topics from Playground > Comments experiment

*/


import { topicsEndpoints } from '$instill-helpers/instill-server';

/* 

  gets all comments
  - http://localhost:3051/comments/api/comments

  gets comments/replies for a specific topic:
  - http://localhost:3051/comments/api/comments?topicId=article-test-2.197.banana
  
*/
export const GET = topicsEndpoints.GET;

// handles JSON Post endpoints
export const POST = topicsEndpoints.POST;