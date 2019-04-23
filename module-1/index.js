const { bar } = require("module-2");

function foo() {
  console.log('Test module 1');
  bar();
}

foo();
