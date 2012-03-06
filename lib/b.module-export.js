// Notice that we've declared a global module named MODULE, with two public properties: a method named MODULE.moduleMethod and a variable named MODULE.moduleProperty. In addition, it maintains private internal state using the closure of the anonymous function. Also, we can easily import needed globals, using the pattern we learned above.

var MODULE = (function(){
  var my = {},
          privateVariable = 1;
  function privateMethod() {
    
  }
  my.moduleProperty = 1;
  my.moduleMethod = function() {
    
  };
  return my;
}());