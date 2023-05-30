function Supper() {
  this.super = "super";
}
Supper.prototype.supperPrototype = () => {
  console.log("supperPrototype");
};
console.log("借用构造函数继承,缺点,继承不到父级原型原型上的属性和方法");
function Children() {
  Supper.call(this);
}

const node = new Children();
console.log(node.supperPrototype);

console.log("组合继承,能够继承原型,但是也会导致修改相同文件");
function Children2() {
  Supper.call(this);
}
Children2.prototype = new Supper();
const node2 = new Children2();
console.log("", node2);
console.log("super function", node2.supperPrototype);
console.log("super function", node2.__proto__.super);

console.log("寄生继承");
function createAnother(original) {
  const clone = object(original);
  clone.sayHi = function () {
    console.log("say hi");
  };
  return clone;
}
