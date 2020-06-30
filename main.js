var foo = 'a';
// use the autofix for prefer-template on the following lines
var baz = 'bar' + foo;
var quz = foo + 'bar'; // they are on the side that the variable is on
var quuz = 'bar'  +  foo; // now there are 4 spaces in the placeholder!
