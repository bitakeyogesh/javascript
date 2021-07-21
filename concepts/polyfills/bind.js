Function.prototype.mybind = function (...args) {
  let obj = args[0];
  let params = args.slice(1);
  return () => this.call(obj, ...params);
};

function getName() {
  return this.name;
}
let obj = { name: "Yogesh" };
let bindMethod = getName.bind(obj);
let myBindMethod = getName.mybind(obj);

console.log("Native bind:", "Name=" + bindMethod());
console.log("My bind:", "Name=" + myBindMethod());
