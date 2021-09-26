var Tx     = require('ethereumjs-tx').Transaction
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3')
var querystring= require('querystring');

// 定义钱包地址
const account1 = '0x292F65000a1F09cC0f2dcdE656674E7De1fBeEa7'

// 定义钱包私钥
const pk1 = 'c6815044c5da5572b44560245083cd8349dde4da2591e78d743b506df841e8a1'

const provider = new HDWalletProvider(
    pk1,
    'https://dev-evm.dev.findora.org:8545',
  );
const web3 = new Web3(provider);

const fs = require("fs")
// index = 0
// while(index<2000){
//     const wallet =  web3.eth.accounts.create()
//     fs.appendFileSync("Walletinfo", querystring.stringify(wallet))
//     fs.appendFileSync("Walletinfo", '\n')
//     index++
//     console.log(wallet)
// }

try {
    // read contents of the file
    const data = fs.readFileSync('Walletinfo', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
        // 写入wallet address
        const walletaddress = line.substr(8,42)  
        fs.appendFileSync("address", walletaddress)
        fs.appendFileSync("address", '\n')
        // 写入wallet privatekey
        const walletpk = line.substr(64,64)
        fs.appendFileSync("privatekey", walletpk)
        fs.appendFileSync("privatekey", '\n')
    });
} catch (err) {
    console.error(err);
}
console.log("钱包数据已完成！")
process.exit()