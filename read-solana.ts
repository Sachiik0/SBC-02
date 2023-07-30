import * as Web3 from '@solana/web3.js'

const publicKey = new Web3.PublicKey('41ywsxNiW27shHcaHJ5fLc2KbMaoqMoSWkDNnzS9Fgzm');// publickey

async function main(){
    
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet')) //connection

    const balance = await connection.getBalance(publicKey)
    console.log('balance',balance)

    const accountInfo = await connection.getAccountInfo(publicKey)
    console.log('accountInfo',accountInfo)

}

main()
