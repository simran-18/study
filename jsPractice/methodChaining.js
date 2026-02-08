// class Calculator
// {
//   constructor(value)
//   {
//     this.value=value;
//   }
//   add(num)
//   {
//     this.value+=num;
//     return this;
//   }
//   substract(num)
//   {
//     this.value-=num;
//     return this;
//   }
//   multiply(num)
//   {
//     this.value*=num;
//     return this;
//   }
//   divide(num)
//   {
//     if(num===0)
//     {
//         throw new Error("Illegal Division")
//     }
//     this.value/=num;
//     return this;
//   }
//   getResult()
//   {
//     return this.value;
//   }
// }
// const calc=new Calculator(10).add(5)
//   .multiply(2)
//   .substract(4)
//   .divide(2)
//   .getResult();

// console.log(calc)

function createCalculator(initialValue) {
  let value = initialValue;

  return {
    add(num) {
      value += num;
      return this;
    },
    subtract(num) {
      value -= num;
      return this;
    },
    multiply(num) {
      value *= num;
      return this;
    },
    divide(num) {
      if (num === 0) {
        throw new Error("Illegal Division");
      }
      value /= num;
      return this;
    },
    getResult() {
      return value;
    }
  };
}

// Method chaining
const result = createCalculator(10)
  .add(5)
  .multiply(2)
  .subtract(4)
  .divide(2)
  .getResult();

console.log(result); // 13
