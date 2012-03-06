// While loose augmentation is great, it does place some limitations on your module. Most importantly, you cannot override module properties safely. You also cannot use module properties from other files during initialization (but you can at run-time after intialization). Tight augmentation implies a set loading order, but allows overrides. Here is a simple example (augmenting our original MODULE):


var MODULE = (function(my){
  var old_moduleMethod = my.moduleMethod;
  
  my.moduleMethod = function(){
    // method override, has acces to old through old_moduleMethod.
  };
  
  return my;
}(MODULE));

// Here we've overridden MODULE.moduleMethod, but maintain a reference to the original method, if needed.

