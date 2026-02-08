Array.prototype.myFilter = function (callback) {

    if (typeof callback !== 'function') {
        throw new Error("Callback is not a function");
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result;
};

Array.prototype.myMap=function(callback)
{
    if (typeof callback !== 'function') {
        throw new Error("Callback is not a function");
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this))
    }
    return result;
};

const arr = [2, 3, 5, 8, 6, 10]
const result = arr.myFilter((x) => x % 2 === 0)
console.log(result);
const result1=arr.myMap((x)=>x*2)
console.log(result1)