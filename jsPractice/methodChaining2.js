function computeAmount(){
  let total = 0;

  return { 
    lacs(num) {
      total += num * 100000;
      return this;
    },
    crore(num) {
      total += num * 10000000;
      return this;
    },
    thousand(num) {
      total += num * 1000;
      return this;
    },
    value() {
      return total;
    }
  };
}

let total = computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();

console.log(total);
