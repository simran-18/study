function apiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 10);
            if (number >= 7) {
                resolve("OK - Geolocation library loaded");
            }else{
                reject("ERROR");
            }
        }, 500);
    })
}
function retryApi(callback, retries, count = 1) {
    return callback().then((result) => {
        console.log(result);
        return result;
    }).catch((err) => {
        if (count < retries) {
            console.log(`Retry count - ${count + 1}`);
            return retryApi(callback, retries, count + 1);
        }
        console.log("Retry exhausted");
        throw err;
    })
}

retryApi(apiCall, 3)
    .then(res => console.log("Success:", res))
    .catch(err => console.log("Final Error:", err));