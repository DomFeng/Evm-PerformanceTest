var Tx     = require('ethereumjs-tx').Transaction
const HDWalletProvider = require('@truffle/hdwallet-provider');



// // 创建web3连接
// const Web3 = require('web3')
// const web3 = new Web3('https://dev-evm.dev.findora.org:8545') // RPC URL
// const address = '0x8B8494cDAF423fAEB446F1a31697663eCA30690e' // 账户地址
// // 读取address中的余额，余额单位是wei
// web3.eth.getBalance(address, (err, wei) => {
//     // 余额单位从wei转换为ether
//     balance = web3.utils.fromWei(wei, 'ether')
//     console.log("balance: " + balance)
// })

// // 定义钱包地址
// const account1 = '0x292F65000a1F09cC0f2dcdE656674E7De1fBeEa7'
// const account2 = '0xe13b619A342bD2Ae9405Efb9b64A0B125705D2ec'
// // 定义钱包私钥
// const pk1 = 'c6815044c5da5572b44560245083cd8349dde4da2591e78d743b506df841e8a1'
// const pk2 = '3cbde0efe5853d70d4b9f45b956ce0d74b9c6fbd016f9312968c476306b60812'

// const privateKey1 = Buffer.from(pk1, 'hex')
// const privateKey2 = Buffer.from(pk2, 'hex')

// // 构建交易对象
// // 现在为nonce变量赋值，可以使用web3.eth.getTransactionCount()函数获取交易nonce。将构建交易对象的代码封装在一个回调函数中
// web3.eth.getTransactionCount(account1, (err, txCount) => {
//     const txObject = {
//       nonce:    web3.utils.toHex(txCount),
//       to:       account2,
//       value:    web3.utils.toHex(web3.utils.toWei('100', 'ether')),
//       gasLimit: web3.utils.toHex(21000),
//       gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
//     }
//     // 签署交易
//     // 这里使用etheremjs-tx库来创建一个新的Tx对象，然后使用这个库与privateKey1签署交易。接着，序列化交易并转换为十六进制字符串，以便将其传递给Web3。
//     const tx = new Tx(txObject)
//     tx.sign(privateKey1)

//     const serializedTx = tx.serialize()
//     const raw = '0x' + serializedTx.toString('hex')

//     // 广播交易
//     // 最后广播交易，可以使用web3.eth.sendSignedTransaction()函数将这个已签名的序列化交易发送到测试网络
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//         console.log('txHash:', txHash)
//         // 可以去ropsten.etherscan.io查看交易详情
//     })
//   })

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