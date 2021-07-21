Array.prototype.myfilter = function (func) {
  let arr = this;
  let res = [];

  arr.forEach((element) => {
    if (func(element)) {
      res.push(element);
    }
  });
  return res;
};

let arr = [4, 9, 3];
console.log(arr.myfilter((e) => e < 6));
