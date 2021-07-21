Array.prototype.mymap = function (func) {
  let arr = this;
  let res = [];
  arr.forEach((element) => {
    let mappedElement = func(element);
    res.push(mappedElement);
  });
  return res;
};

let arr = [1, 2, 3];
console.log(arr.mymap((e) => e * 2));
