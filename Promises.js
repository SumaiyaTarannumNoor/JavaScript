let p = new Promise((resolve, reject) => {
    let a = 56 + 78 
    if (a == 134){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})