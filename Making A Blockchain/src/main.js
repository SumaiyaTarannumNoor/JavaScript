const {Blockchain, Transaction} = require('./blockchain');


let clickCoin = new Blockchain();

clickCoin.createTransaction(new Transaction('address1', 'address2', 160));
clickCoin.createTransaction(new Transaction('address2', 'address1', 60));

console.log("\n Starting the miner ...");
clickCoin.minePendingTransactions("MIMK-ADDRESS");

console.log("\n Balance of MK is", clickCoin.getBalanceofAddress("MIMK-ADDRESS"));

console.log("\n Starting the miner again...");
clickCoin.minePendingTransactions("MIMK-ADDRESS");

console.log("\n Balance of MK is", clickCoin.getBalanceofAddress("MIMK-ADDRESS"));

console.log("\n Starting the miner again and again...");
clickCoin.minePendingTransactions("MIMK-ADDRESS");

console.log("\n Balance of MK is", clickCoin.getBalanceofAddress("MIMK-ADDRESS"));




// // Part 2
// console.log("Mining Block 1...");
// clickCoin.addBlock(new Block(1, "16/01/2026", { amount: 16 }));

// console.log("Mining Block 2...");
// clickCoin.addBlock(new Block(2, "18/01/2026", { amount: 16 }));


// Part 1
// console.log("Is Blockchain valid? " + clickCoin.isChainValid())

// // Tamper check
// //clickCoin.chain[1].data = { amount: 160 };
// //Another tamper check
// //clickCoin.chain[1].hash = clickCoin.chain[1].calculateHash();

// //console.log("Is Blockchain valid? " + clickCoin.isChainValid())

// // Comment it out to create the Blockchain and then the code above will work.
// //console.log(JSON.stringify(clickCoin, null, 4));

