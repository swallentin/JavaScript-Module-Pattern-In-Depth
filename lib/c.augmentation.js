// We use the var keyword again for consistency, even though it's not necessary. After this code has run, our module will have gained a new public method named MODULE.anotherMethod. This augmentation file will also maintain its own private internal state and imports.

var MODULE = (function(my){
  my.anotherMethod = function(){
    console.log('my.anotherMethod');
  };
  return my;
}(MODULE));


