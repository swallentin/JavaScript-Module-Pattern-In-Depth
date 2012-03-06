// One severe limitation of splitting a module across multiple files is that each file maintains its own private state, and does not get access to the private state of the other files. This can be fixed. Here is an example of a loosely augmented module that will maintain private state across all augmentations:

var MODULE = (function(my){
  var _private = my._private = my._private || {},
      _seal = my._seal = my._seal || function {} {
        delete my._private;
        delete my._seal;
        delete my._unseal;
      },
      _unseal = my._unseal = my._unseal || function() {
        my._private = _private;
        my._seal = _seal;
        my._unseal = _unseal;a
      };
  return my;
}(MODULE || {}));

// Any file can set properties on their local variable _private, and it will be immediately available to the others. Once this module has loaded completely, the application should call MODULE._seal(), which will prevent external access to the internal _private. If this module were to be augmented again, further in the application's lifetime, one of the internal methods, in any file, can call _unseal() before loading the new file, and call _seal() again after it has been executed.

