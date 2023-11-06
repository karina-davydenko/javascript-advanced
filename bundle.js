(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function add(f, s) {
    return f + s
  }

  function sub(f, s) {
    return f - s
  }

  const a$1 = 1;
  console.log(a$1);

  console.log(add(1, 3));

  console.log(sub(1, 3));

  const a = 1;
  console.log(a);

}));
