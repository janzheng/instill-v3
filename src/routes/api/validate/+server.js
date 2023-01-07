
/* 

  Use this to test the password validator; comment out when done

*/

import { validateEndpoints } from '$instill-helpers/instill-server';






// FOR TESTING ONLY not safe; for testing - spits out hashed version on password
export const GET = validateEndpoints.GET;
export const POST = validateEndpoints.POST;