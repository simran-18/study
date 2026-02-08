function promiseAll(tasks) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed=0;
        if (tasks.length === 0) {
            resolve(results);
            return;
        }

        tasks.forEach((task, index) => {
            const promise = task();
            try {
                Promise.resolve(promise)
                    .then((result) => {
                        results[index] = result; // preserve order
                        completed++;
                        if (completed === tasks.length) {
                            resolve(results);
                        }
                    }).catch((err) => {
                        reject(err)
                    })
            } catch (err) {
                reject(err)
            }
        })
    })
}

const taskList = [
    () => Promise.resolve("Promise 1 resolved"),
    () => Promise.reject("Promise 3 rejected"),
    () => Promise.resolve("Promise 2 resolved"),
];

promiseAll(taskList).then((result) => {
    console.log("result :: ", result)
}).catch((err) => {
    console.log("result :: ", err)
});

