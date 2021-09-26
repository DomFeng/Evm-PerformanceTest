var Tx     = require('ethereumjs-tx').Transaction
const HDWalletProvider = require('@truffle/hdwallet-provider');

const Web3 = require('web3')

// 定义钱包地址
const account1 = '0x292F65000a1F09cC0f2dcdE656674E7De1fBeEa7'
const account2 = '0xe13b619A342bD2Ae9405Efb9b64A0B125705D2ec'
// 定义钱包私钥
const pk1 = 'c6815044c5da5572b44560245083cd8349dde4da2591e78d743b506df841e8a1'
const pk2 = '3cbde0efe5853d70d4b9f45b956ce0d74b9c6fbd016f9312968c476306b60812'

const provider = new HDWalletProvider(
    pk1,
    'https://dev-evm.dev.findora.org:8545',
  );
const web3 = new Web3(provider);

async function start(){
  try {
    var txCount = await web3.eth.getTransactionCount(account1)
    console.log(txCount)
    const result = await web3.eth.sendTransaction({
        from: account1,
        to: account2,
        value: web3.utils.toWei('100'),
        gas: web3.utils.toHex(8000000),
        nonce :web3.utils.toHex(txCount),
      });
      console.log(result)
  } catch (error) {
      console.log(error)
  }
}
  
start();