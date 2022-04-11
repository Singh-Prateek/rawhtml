//micro task
const a = new Promise((resolve)=>{
    console.log('A');
    resolve('B');
});

//macro task
setTimeout(() => {
    console.log('C');
}, 0);

a.then((b) => console.log(b));

(new Promise())

const d = () => console.log('D');

d();