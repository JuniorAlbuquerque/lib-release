const sum = (a: number, b: number) => {
  console.log("sum", a + b)
  return a + b
}

const subtraction = (a: number, b: number) => {
  console.log("sub", a - b)
  return a - b
}

const multiply = (a: number, b: number) => {
  return a * b
}

const divide = (a: number, b: number) => {
  return a / b
}

export {
  sum,
  multiply,
  divide,
  subtraction
}