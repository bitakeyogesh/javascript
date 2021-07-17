// without memoization
// time complexity O(2^n)
// Space complexity O(n)
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// using memoization
// time complexity O(n)
// Space complexity O(n)
const fibUsingMemoization = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibUsingMemoization(n - 1, memo) + fibUsingMemoization(n - 2, memo);
  return memo[n];
};

console.log(fib(6)); //8
console.log(fibUsingMemoization(6)); //8
// console.log(fib(50)); //12586269025  (took too much time to get the result)
console.log(fibUsingMemoization(50)); //12586269025
