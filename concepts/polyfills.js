//1.reduce
Array.prototype.myreduce = function (func, result) {
  this.forEach((elem) => (result = func(result, elem)));
  return result;
};

const sumUsingReduce = [1, 2, 3, 4].reduce((acc, elem) => acc + elem, 0);
const sumUsingMyReduce = [1, 2, 3, 4].myreduce((acc, elem) => acc + elem, 0);

console.log("sumUsingReduce", sumUsingReduce);
console.log("sumUsingMyReduce", sumUsingMyReduce);

//2. bind

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

//3. debounce
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
}
const processChange = debounce(() => console.log("hello"));

//4. throttling
function throttle(func, timeout = 300) {
  let wait = false;
  return (...args) => {
    if (wait) return;
    wait = true;
    setTimeout(() => {
      wait = false;
      func.apply(this, args);
    }, timeout);
  };
}
const resizeObserver = throttle(() => console.log("hello"));
