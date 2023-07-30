import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import base58 from 'bs58';

async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))// connection
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');//decoder of private key
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK); //payer ng gas fee? ata

    const tokenMint = await token.createMint(
        connection, //connection   
        signer, //payer
        new Web3.PublicKey('uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm'), //mintAuthority
        new Web3.PublicKey('uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm'), //freezeAuthority
        9, //decimals
    );
    console.log('tokenMint ', tokenMint.toBase58())
    //token mint account: 7GTrJBScwCd19etjHi57mi89rVdHsXEwW7w9nML3V9xb
}

main()
