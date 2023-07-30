import {createMetaplexInstance} from './metaplex'

async function main(){
    const metaplex = createMetaplexInstance()
    const metadata = {
        name: 'kap nino in beach',
        symbol: 'KAP',
        image: 'https://arweave.net/X14jHdYOeGCmKVzS67ZqxV8WLtH1X29nU7VlZibShT4',
        attributes:[
            {
                trait_type: 'swimsuit',
                value: '2'
            },
            {
                trait_type: 'shades',
                value: '1'
            },
            {
                trait_type: 'beach',
                value: '3'
            }

        ]
    }
    const result = await metaplex.nfts().uploadMetadata(metadata)
    console.log('result', result);
    console.log('uri', result.uri);
    // metadata uri https://arweave.net/ZP0yhE5wRNUoArO91uhKfrsXPqnZKplxW1rNdsdH9Ek
}
main()