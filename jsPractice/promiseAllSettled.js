function myPromiseAllSettled(tasks) {
    return new Promise((resolve) => {
        let results = []
        let completed = 0;

        if (tasks.length === 0) {
            resolve(results);
            return;
        }

        for (let i = 0; i < tasks.length; i++) {
            try {
                const promise = tasks[i]();
                Promise.resolve(promise)
                    .then((value) => {
                        results[i] = { status: "fulfilled", value };
                    }).catch((err) => {
                        console.log("block 1")
                        results[i] = { status: "rejected", reason: err };
                    }).finally(() => {
                        completed++;
                        if (completed === tasks.length) {
                            resolve(results)
                        }
                    })
            } catch (err) {
                console.log("block 2")
                results[i] = { status: "rejected", reason: err.message };
                completed++;
                if (completed === tasks.length) {
                    resolve(results)
                }
            }
        }
    })
}

const taskList = [
    () => Promise.resolve("Promise 1 resolved"),
    () => Promise.resolve("Promise 2 resolved"),
    // () => b+1
    () => Promise.reject("Promise 3 rejected")
];

myPromiseAllSettled(taskList).then((result) => {
    console.log("result :: ", result)
}).catch((err) => {
    console.log("result :: ", err)
});