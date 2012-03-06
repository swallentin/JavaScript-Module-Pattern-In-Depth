// example of and anonmymous closure.
(function(){
  // ... all vars and functions are in this scope only
  // still mains access to all globals
  console.log('testing');
  
}());


// global import, this allows for implied globals.
// in this case the interpreter will walk the score chain backwards lookinf for a var statemant for the name. 
// this anonymous function passes console as parameter to the anonymous function
(function($){
  $.log('global');
}(console));