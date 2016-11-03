/**
 * Created by Chris on 3/11/2016.
 */

   export let currentScriptName = ():string  => { return new Error().stack.split('\n')[0]};


