// I added this file as a reference for those who wonder what happens when you use hasOwnProperty method.
// http://www.bennadel.com/blog/1919-Javascript-s-hasOwnProperty-Method-Is-More-Consistent-Than-The-IN-Operator.htm

console.log('Javascript hasOwnProperty() Method And String Objects');



// Create a number of different data types to test.
var stringValue = "";
var objectValue = {};
var arrayValue = [];
var dateValue = new Date();
var numberValue = new Number( 1 );
var boolValue = true;
 
// -------------------------------------------------- //
// -------------------------------------------------- //
 
// Run control group known to work.
console.log( "Object", objectValue.hasOwnProperty( "length" ) );
 
// Run test on array.
console.log( "Array", arrayValue.hasOwnProperty( "length" ) );
 
// Run test on date object.
console.log( "Date", dateValue.hasOwnProperty( "length" ) );
 
// Run test on number object.
console.log( "Number", numberValue.hasOwnProperty( "length" ) );
 
// Run test on boolean object.
console.log( "Boolean", boolValue.hasOwnProperty( "length" ) );
 
// Try to use the IN operator on a String value.
console.log( "String", stringValue.hasOwnProperty( "length" ) );