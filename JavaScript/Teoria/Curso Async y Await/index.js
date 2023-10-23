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

let hello = async () => "hello";

// async function run(){
//     let value = await hello();
//     console.log(value);
//     console.log("after");
// }
// run();
console.log("before");

// REFACTOR PROMESA A ASYNC/AWAIT
const createImageFromBlob = blob => {
    let img = new Image();
    img.src = URL.createObjectURL(blob);
    return img;
}

async function imgFetch(){
    const response = await fetch("https://raw.githubusercontent.com/AlbertoF17/Portfolio/develop/AlbertoFernandezGomez_Portfolio/media/img/icono.png");
    const blob = await response.blob();
    const img = createImageFromBlob(blob);
    img.style.width = "60%";
    document.body.appendChild(img);
}

imgFetch().catch(ex => console.error(ex));

const delayValue = (delay, value) => (new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
}))

const p1 = delayValue(1000, 1);
const p2 = delayValue(2000, 2);
const p3 = delayValue(3000, 3);

const run = async() => {
    let values = await Promise.all([p1, p2, p3]);
    console.log(values);
    console.log("after2");
}
run();

console.log("before2");