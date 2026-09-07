/*
Built-in types:

JavaScript defines 8 built-in types:

Type	Explanation
Number	a double-precision IEEE 754 floating point.
String	an immutable UTF-16 string.
BigInt	integers in the arbitrary precision format.
Boolean	true and false.
Symbol	a unique value usually used as a key.
Null	equivalent to the unit type.
Undefined	also equivalent to the unit type.
Object	similar to records.
See the MDN page for more detail.

TypeScript has corresponding primitive types for the built-in types:

number
string
bigint
boolean
symbol
null
undefined
object
Other important TypeScript types
Type	Explanation
unknown	the top type.
never	the bottom type.
object literal	e.g. { property: Type }
void	for functions with no documented return value
T[]	mutable arrays, also written Array<T>
[T, T]	tuples, which are fixed-length but mutable
(t: T) => U	functions
*/

/*Notes:

1. Function syntax includes parameter names.
*/
let fst: (a: any, b: any) => any = (a, b) => a;
// or more precisely:
//let fst: <T, U>(a: T, b: U) => T = (a, b) => a;

//2. Object literal type syntax closely mirrors object literal value syntax:
let o: { n: number; xs: object[] } = { n: 1, xs: [] };
console.log("Object literal: o = ", o);
//3. [T, T] is a subtype of T[].


//Boxed types
(1).toExponential();
// equivalent to
Number.prototype.toExponential.call(1);


//Gradual typing. With "noImplicitAny": false in tsconfig.json, anys: any[]
const anys = [];
anys.push(1);
anys.push("oh no");
anys.push({ anything: "goes" });
console.log("\nanys = ", anys)
