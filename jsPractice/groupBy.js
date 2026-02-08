function groupBy(arr, key) {
    return arr.reduce((acc, curr) => {
        const groupKey =
            typeof key === "function" ? key(curr) : curr[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [curr]
        } else {
            acc[groupKey].push(curr)
        }
        return acc;
    }, {});
};

console.log(groupBy([4.2, 6.3, 6.2], Math.floor))
console.log(groupBy(["one", "two", "three","thrid","four"], "length"));
console.log(groupBy([1, 2, 3, 4, 5, 6], num => num % 2 === 0));
