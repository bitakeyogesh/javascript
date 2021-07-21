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
