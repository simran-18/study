function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const { signal } = controller;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  return fetch(url, {
    ...options,
    signal
  })
    .then(response => {
      clearTimeout(timeoutId);
      return response;
    })
    .catch(err => {
      clearTimeout(timeoutId);
      throw err; // ✅ IMPORTANT
    });
}
fetchWithTimeout(
  "https://jsonplaceholder.typicode.com/todos/1",
  {},
  10
)
  .then(res => res.json())
  .then(result => {
    console.log("Result is :::", result);
  })
  .catch(err => {
    console.log("error is:::",err.name);
    if (err.name === "AbortError") {
      console.log(" Request timed out");
    } else {
      console.log(" Fetch error:", err);
    }
  });
