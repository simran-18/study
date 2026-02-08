function topK(nums, k) {
  const freq = {};
  for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
  }
  return Object.entries(freq)
  .sort((a,b)=>b[1]-a[1]).slice(0,k).map(el=>Number(el[0]))
  
};

console.log(topK([1,1,1,2,2,3], 2)); // [1, 2]
