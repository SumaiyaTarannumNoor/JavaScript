const SHA256 = require('crypto-js/sha256');

class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

class Block {
    constructor(timestamp, transactions, previousHash = ''){
        // this.index = index;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
        }

    calculateHash(){
        return SHA256(this.previousHash + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash(); 
        }

        console.log("Block mined: "+ this.hash)
    }

}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock(){
        return new Block("15/01/2026", "Genesis Block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    // //Old Method
    // addBlock(newBlock){
    //     newBlock.previousHash = this.getLatestBlock().hash;
    //     //newBlock.hash = newBlock.calculateHash();
    //     newBlock.mineBlock(this.difficulty);
    //     this.chain.push(newBlock);
    // }

    minePendingTransactions(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);

        console.log("Block mined successfully!");
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceofAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }

                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }

        return true;
    }
}


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

