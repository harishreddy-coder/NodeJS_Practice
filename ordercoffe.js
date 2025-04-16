
function placeorder(order) {

return new Promise ((resolve, reject) => {
    if(order === 'coffee')
    {
        resolve('Congrats!, Order for coffee is placed.')
    } else{
        reject('Sorry, Other than coffee orders are not accepted.')
    }
})

};

function orderprocessing(order) {
    return new Promise((resolve) => {
        console.log('order is being prepared.')
        resolve(`${order} and served!`)
    })
}


// promise calls
// placeorder('coffee').then((result) => {
//     console.log(result);
//     let orderisprocessed = orderprocessing(result);
//    return orderisprocessed;
// }).then((res) => {
//     setTimeout(() => {
//         console.log(res);
//     }, 2000)
    
// }).catch((msg) =>{
//     console.log(msg)
// })

// Async await

async function orderplaced() {
    try {
        let po = await placeorder('coffee')
        console.log(po);
        let op = await orderprocessing(po)
        console.log(op);

    } catch (error) {
        console.log(error);
    }
};

orderplaced();