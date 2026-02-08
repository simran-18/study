function SDK(maxRetries = 1) {
    let logs = [];
    let isProcessing = false;
    let count = 1;
    function wait() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("API attempt:", count);
                if (count % 3 === 0) reject("API failed");
                else resolve("API success");
                count++;
            }, 1000);
        });
    }
    return {
        log(data) {
            logs.push(data)
        },
        sendAnalyticsEvent: async () => {
            if (isProcessing) return;
            isProcessing = true;
            while (logs.length > 0) {
                const current = logs[0];
                let attempt = 1;
                while (attempt < maxRetries) {
                    try {
                        await wait();
                        console.log("Logged :: ", current);
                        logs.shift();
                        break;
                    } catch (err) {
                        console.log(`Retrying event: ${current} (Attempt ${attempt})`);
                        attempt++
                    }
                }
                while (attempt > maxRetries) {
                    console.log(`Event failed after ${maxRetries} attempts: ${current}`);
                    logs.shift();
                }
            }
        }
    }
}
const sdk = SDK(2);
sdk.log("page_view")
sdk.log("card_click")
sdk.sendAnalyticsEvent()