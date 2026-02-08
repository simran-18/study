function cachedApiCall(timeout) {
  const cache = {};

  return async function (url, config = {}) {
    const key = `${url}-${JSON.stringify(config)}`;
    const now = Date.now();
    const entry = cache[key];

    // Return cached data if valid
    if (entry && entry.data && now - entry.timestamp < timeout) {
      console.log("Returning from cache");
      return entry.data;
    }
    try {
      console.log("Fetching from API");
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      cache[key] = {
        data,
        timestamp: Date.now()
      };

      return data;
    } catch (err) {
      delete cache[key]; 
      throw err;
    }
  };
}


const call=cachedApiCall(2500);
call("https://jsonplaceholder.typicode.com/todos/1",{})
.then((a)=>console.log("first api call response:", a));

setTimeout(()=>{call("https://jsonplaceholder.typicode.com/todos/1",{})
.then((a)=>console.log("second api call response:", a));},1000);

setTimeout(()=>{call("https://jsonplaceholder.typicode.com/todos/1",{})
.then((a)=>console.log("second api call response:", a));},3000);
