function half(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(number / 2);
        } else {
            reject("Error!");
        }
    });
}
half(4).then(console.log);
half(3).catch(ex => console.log(ex));

const PromiseSuccess = Promise.resolve(1);
const PromiseRejected = Promise.reject();
PromiseSuccess.then(console.log);
PromiseRejected.catch(()=> console.log("This is an error"));