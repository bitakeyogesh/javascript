Array.prototype.myreduce = function (func, result) {
  this.forEach((elem) => (result = func(result, elem)));
  return result;
};

const sumUsingReduce = [1, 2, 3, 4].reduce((acc, elem) => acc + elem, 0);
const sumUsingMyReduce = [1, 2, 3, 4].myreduce((acc, elem) => acc + elem, 0);

console.log("sumUsingReduce", sumUsingReduce);
console.log("sumUsingMyReduce", sumUsingMyReduce);
