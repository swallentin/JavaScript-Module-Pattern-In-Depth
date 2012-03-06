// Most of the advanced patterns can be combined with each other to create more useful patterns. If I had to advocate a route to take in designing a complex application, I'd combine loose augmentation, private state, and sub-modules.

// I haven't touched on performance here at all, but I'd like to put in one quick note: The module pattern is good for performance. It minifies really well, which makes downloading the code faster. Using loose augmentation allows easy non-blocking parallel downloads, which also speeds up download speeds. Initialization time is probably a bit slower than other methods, but worth the trade-off. Run-time performance should suffer no penalties so long as globals are imported correctly, and will probably gain speed in sub-modules by shortening the reference chain with local variables.

var UTIL = (function(parent, $){
  var my = parent.ajax = parent.ajax || {};
  my.get = function(url, params, callback) {
    return $.getJSON(url, params, call);
  };
  return parent;
}(UTIL || {}, jQuery));