// This pattern is perhaps the least flexible option. It does allow some neat compositions, but that comes at the expense of flexibility. As I've written it, properties which are objects or functions will not be duplicated, they will exist as one object with two references. Changing one will change the other. This could be fixed for objects with a recursive cloning process, but probably cannot be fixed for functions, except perhaps with eval. Nevertheless, I've included it for completeness.

var MODULE_TWO = (function(old){
  var my = {},
      key;
      
  for(key in old) {
    if(old.hasOwnProperty(key)) {
      my[key] = old[key];
    }
  }
  var super_moduleMethod = old.moduleMethod;
  my.moduleMethod = function(){
    //override method on the clone, access to super through super_moduleMethod
  };
  return my;
}(MODULE));
