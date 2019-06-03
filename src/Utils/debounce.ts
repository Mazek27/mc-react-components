export function debounce(fn :any, delay: number) {
  let timerId: number | null;
  return function (...args : any[]) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
}
