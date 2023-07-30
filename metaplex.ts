import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import {Metaplex, keypairIdentity,bundlrStorage} from '@metaplex-foundation/js';
import base58 from 'bs58';

const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))// connection
const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');//decoder of private key
const signer = Web3.Keypair.fromSecretKey(base58DecodedPK); //payer ng gas fee? ata

export const createMetaplexInstance = () => {
    const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(signer))
    .use(bundlrStorage({
        address: 'https://devnet.bundlr.network',
        providerUrl: Web3.clusterApiUrl('devnet'),
        timeout: 60000
    }))
    return metaplex

}


