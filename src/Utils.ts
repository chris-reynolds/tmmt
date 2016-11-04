/**
 * Created by Chris on 3/11/2016.
 */
//import Error from 'node.d.ts';

   export let currentScriptName = ():string  => {
    let fakeError:any = new Error('zzz');
     let fakeErrorLines : Array<string> = fakeError.stack.split('\n');
      let fileName = fakeErrorLines[2].match(/Promise \((.*).js/);
    return fileName[1];
   };


