import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import base58 from 'bs58';

async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    // const tokenAccount = await token.createAccount(
    //     connection,
    //     signer,
    //     new Web3.PublicKey('7GTrJBScwCd19etjHi57mi89rVdHsXEwW7w9nML3V9xb'), //mint 
    //     new Web3.PublicKey('uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm'), //owner

    // )

    const tokenAccount = await token.getAssociatedTokenAddress(
        new Web3.PublicKey('7GTrJBScwCd19etjHi57mi89rVdHsXEwW7w9nML3V9xb'), //mint 
        new Web3.PublicKey('uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm'), //owner
    )    

    console.log('tokenAccount ', tokenAccount.toBase58())
    //token Account: GQnctU6oGdL3zx5jNuUotmNcXpjWBwMZb5nozSnbiirH

}
main()