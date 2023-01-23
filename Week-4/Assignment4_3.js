class Fibonacci {
    constructor() {
      this.a = 0;
      this.b = 1;
    }
  
    [Symbol.iterator]() {
      return {
        next: () => {
          let current = this.a;
          this.a = this.b;
          this.b = current + this.a;
          return { value: current, done: false };
        }
      };
    }
  }
  
  let fib = new Fibonacci();
  let fib_series = [...fib];
  console.log(fib_series); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]
  