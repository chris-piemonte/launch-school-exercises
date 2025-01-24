// Object.prototype.ancestors = function() {
//   let ancestors = [];
//   let obj = this;

//   while (Object.getPrototypeOf(obj) !== Object.prototype) {
//     ancestors.push(Object.getPrototypeOf(obj).name);
//     obj = Object.getPrototypeOf(obj);
//   }

//   ancestors.push('Object.prototype');

//   return ancestors;
// }

Object.prototype.ancestors = function() {
  const currObj = Object.getPrototypeOf(this);

  if (currObj.hasOwnProperty('name')) {
    return [currObj.name].concat(currObj.ancestors());
  }

  return ['Object.prototype'];
}

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
