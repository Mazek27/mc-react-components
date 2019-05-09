export function debounce(fn :any, delay: any) {
  let timerId: any;
  //@ts-ignore
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
}
