// Function Annotation
const multiply = (x: number, y: number): number => {
    return x * y;
  }
  
  // Function Inference
  const add = (x: number, y: number) => {
    return x + y
  }

  const divide = (x: number, y: number) => {
    x / y
  }
  
  function sum(x: number, y: number): number {
    return x + y
  }
  

  const subtract = function (x: number, y: number): number {
    return x - y
  }
  
  
  const myFunc = (val: string): void => {
    console.log(val)
  }
  
  const throwError = (val: string): never => {
    throw new Error(val)
  }
  