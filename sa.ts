import base58 from 'bs58';
import * as Web3 from '@solana/web3.js'
import { lamports } from '@metaplex-foundation/js';
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';



async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(<PRIVATEKEY>);
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);
    const transaction = new Web3.Transaction();
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: new Web3.PublicKey('uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm'),
                isSigner: true,
                isWritable: false,
                
            }
        ],
        data: Buffer.alloc(20),
        programId: new Web3.PublicKey('uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm'),
        
    });
    transaction.add(instruction);
    const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [signer],
        
    )
    console.log('SIGNATURE', signature)
}
main()
.then(() => process.exit(0))
.catch(err => {
    console.error(err)
});
