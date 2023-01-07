
/* 

  Gets comments from Playground > Comments experiment

*/


import { commentsEndpoints } from '$instill-helpers/instill-server';

/* 

  gets all comments
  - http://localhost:3051/comments/api/comments

  gets comments/replies for a specific topic:
  - http://localhost:3051/comments/api/comments?rootId=first-topic--rec2tjW4VbNdjFA2I

*/
export const GET = commentsEndpoints.GET;


// handles JSON Post endpoints
export const POST = commentsEndpoints.POST;