
/* 

  Gets topics from Playground > Comments experiment

*/

import { validateEndpoints } from '$instill-helpers/instill-server';


// no option to get votes; get votes through posts instead

// todo: support anonymous votes?

// handles JSON Post endpoints
/* 

  Data can be:
    empty (triggers an increment)
    ++ (triggers an increment)
    -- (triggers a decrement)
    ## (replaces current value)

*/
export const POST = validateEndpoints.POST;