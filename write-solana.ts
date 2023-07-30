import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import base58 from 'bs58';

async function main(){
    
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    
    const transaction = new Web3.Transaction();

    const sendSolInstruction = SystemProgram.transfer({
        fromPubkey: new Web3.PublicKey('41ywsxNiW27shHcaHJ5fLc2KbMaoqMoSWkDNnzS9Fgzm'), //sender
        toPubkey: new Web3.PublicKey('uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm'), //receiver
        lamports: 1 * Web3.LAMPORTS_PER_SOL //how much are you sending 

    });
    transaction.add(sendSolInstruction)

    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || ''); // to decode to StringArray
    const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK); // to sign the transaction

    const txHash = await sendAndConfirmTransaction(connection,transaction,[keyPairFromSecret]); //this sends your transaction to the network
    console.log('txHash',txHash)

}

main()

