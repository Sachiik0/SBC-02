import {createMetaplexInstance} from './metaplex'
import {toMetaplexFile} from '@metaplex-foundation/js'
import fs from 'fs'

const buffer = fs.readFileSync(__dirname+ "/assets/kap nino in beach.jpg")
const file = toMetaplexFile(buffer,"kap nino in beach.jpg")
const metaplex = createMetaplexInstance();

async function main(){
    const imageUrl = await metaplex.storage().upload(file)
    console.log('imageUrl', imageUrl);
    //imageUrl https://arweave.net/X14jHdYOeGCmKVzS67ZqxV8WLtH1X29nU7VlZibShT4
}
main()
