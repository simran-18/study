function promiseAny(tasks) {
    return new Promise((resolve, reject) => {
        let errors = [];
        let errorCount = 0;
        tasks.forEach((task, index) => {
            const promise = task();
            try {
                Promise.resolve(promise)
                    .then((result) => {
                        resolve(result)
                    }).catch((err) => {
                        errors[index] = err;
                        errorCount++;
                        if (errorCount === tasks.length) {
                          reject(
                                new AggregateError(
                                    errors,
                                    "All promises were rejected"
                                )
                            );
                        }
                    })
            } catch (err) {
                errors[index] = err;
                errorCount++;
                if (errorCount === tasks.length) {
                    reject(
                                new AggregateError(
                                    errors,
                                    "All promises were rejected"
                                )
                            );
                }
            }
        })
    })
}

const taskList = [
    // () => Promise.resolve("Promise 1 resolved"),
    // () => Promise.reject("Promise 3 rejected"),
    // () => Promise.resolve("Promise 2 resolved"),
    () => Promise.reject("A failed"),
    () => Promise.reject("B failed"),
    () => Promise.reject("C failed")
];

promiseAny(taskList).then((result) => {
    console.log("result :: ", result)
}).catch((err) => {
    console.log("result :: ", err)
});