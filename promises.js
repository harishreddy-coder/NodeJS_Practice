const { rejects } = require("assert");
const { resolve } = require("path");

const mypromise = new Promise((resolve, rejects) => {
    const a = 7;
    const b = 7;
setTimeout(() => {
    if (a === b) {
        resolve('The Promise is Resolved.')
    } else {
        rejects('The Promise is Rejected.')
    }
}, 1000);
})

//console.log(mypromise);

 mypromise.then((result) => {

    console.log(result);
 });

 mypromise.catch((rej) => {
  console.log(rej);
 })
