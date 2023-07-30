import {createMetaplexInstance} from './metaplex'

async function main(){
    const metaplex = createMetaplexInstance()
    const {nft} = await metaplex.nfts().create({
        uri:  'https://arweave.net/ZP0yhE5wRNUoArO91uhKfrsXPqnZKplxW1rNdsdH9Ek', //metadata
        name: 'kap nino in beach',
        sellerFeeBasisPoints: 5000
    },{commitment: 'finalized'});
    console.log('nft', nft);
}
main()


// nft {
//   model: 'nft',
//   updateAuthorityAddress: PublicKey [PublicKey(uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm)] {
//     _bn: <BN: d924d73aeb149b49821e828a90d22c7e4554dc134d2449d2491ab11a40238f4>
//   },
//   json: {
//     name: 'kap nino in beach',
//     symbol: 'KAP',
//     image: 'https://arweave.net/X14jHdYOeGCmKVzS67ZqxV8WLtH1X29nU7VlZibShT4',
//     attributes: [ [Object], [Object], [Object] ]
//   },
//   jsonLoaded: true,
//   name: 'kap nino in beach',
//   symbol: '',
//   uri: 'https://arweave.net/VIFbhLBdKfkguefZc6-rsjrCCvXSMDhq3Z-pIryEC1E',
//   isMutable: true,
//   primarySaleHappened: false,
//   sellerFeeBasisPoints: 5000,
//   editionNonce: 255,
//   creators: [
//     {
//       address: [PublicKey [PublicKey(uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm)]],
//       verified: true,
//       share: 100
//     }
//   ],
//   tokenStandard: 0,
//   collection: null,
//   collectionDetails: null,
//   uses: null,
//   programmableConfig: null,
//   address: PublicKey [PublicKey(DUc8iwbiKvkfr8XAEye3FhndZ5J9ojQ4fg7YTKx8TUKG)] {
//     _bn: <BN: b95ea67028f5099eff0e2e7e90a81c0d965309d814bd0af1842963379c70684f>
//   },
//   metadataAddress: Pda [PublicKey(D7ZUfYG7Np7ZNHJGGC7A664FpQThq8S7cjpSE7njqrPY)] {
//     _bn: <BN: b3fa732634ba43b436ae6e6399c2bfabc02c23d4bc92697845fdae116fe60f3f>,
//     bump: 255
//   },
//   mint: {
//     model: 'mint',
//     address: PublicKey [PublicKey(DUc8iwbiKvkfr8XAEye3FhndZ5J9ojQ4fg7YTKx8TUKG)] {
//       _bn: <BN: b95ea67028f5099eff0e2e7e90a81c0d965309d814bd0af1842963379c70684f>
//     },
//     mintAuthorityAddress: PublicKey [PublicKey(DY8cJinuqkwcM2jz5jxtNWGECMcZdTbaePzT5iNFMEF7)] {
//       _bn: <BN: ba45d9f55bfebc5ed724913becccb2d1de41b89a01e30e1842eac55df2471466>
//     },
//     freezeAuthorityAddress: PublicKey [PublicKey(DY8cJinuqkwcM2jz5jxtNWGECMcZdTbaePzT5iNFMEF7)] {
//       _bn: <BN: ba45d9f55bfebc5ed724913becccb2d1de41b89a01e30e1842eac55df2471466>
//     },
//     decimals: 0,
//     supply: { basisPoints: <BN: 1>, currency: [Object] },
//     isWrappedSol: false,
//     currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
//   },
//   token: {
//     model: 'token',
//     address: Pda [PublicKey(CJFvpECwtNqLJjLi6qEw1Tzm9NjVuw7zAdxBGpKGaJp6)] {
//       _bn: <BN: a7dc4f13ee9684aad8a24ddf30136d6b1d7ff99e45d9477026664deff345dda7>,
//       bump: 255
//     },
//     isAssociatedToken: true,
//     mintAddress: PublicKey [PublicKey(DUc8iwbiKvkfr8XAEye3FhndZ5J9ojQ4fg7YTKx8TUKG)] {
//       _bn: <BN: b95ea67028f5099eff0e2e7e90a81c0d965309d814bd0af1842963379c70684f>
//     },
//     ownerAddress: PublicKey [PublicKey(uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm)] {
//       _bn: <BN: d924d73aeb149b49821e828a90d22c7e4554dc134d2449d2491ab11a40238f4>
//     },
//     amount: { basisPoints: <BN: 1>, currency: [Object] },
//     closeAuthorityAddress: null,
//     delegateAddress: null,
//     delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
//     state: 1
//   },
//   edition: {
//     model: 'nftEdition',
//     isOriginal: true,
//     address: Pda [PublicKey(DY8cJinuqkwcM2jz5jxtNWGECMcZdTbaePzT5iNFMEF7)] {
//       _bn: <BN: ba45d9f55bfebc5ed724913becccb2d1de41b89a01e30e1842eac55df2471466>,
//       bump: 255
//     },
//     supply: <BN: 0>,
//     maxSupply: <BN: 0>
//   }
// }
// PS C:\Users\sanju\OneDrive\Desktop\com\Solana Developer Program\day 01 - SDB> npx ts-node .\22-upload-metadata.ts
// bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
// result {
//   uri: 'https://arweave.net/ZP0yhE5wRNUoArO91uhKfrsXPqnZKplxW1rNdsdH9Ek',
//   metadata: {
//     name: 'kap nino in beach',
//     symbol: 'KAP',
//     image: 'https://arweave.net/X14jHdYOeGCmKVzS67ZqxV8WLtH1X29nU7VlZibShT4',
//     attributes: [ [Object], [Object], [Object] ]
//   },
//   assetUris: []
// }
// uri https://arweave.net/ZP0yhE5wRNUoArO91uhKfrsXPqnZKplxW1rNdsdH9Ek
// PS C:\Users\sanju\OneDrive\Desktop\com\Solana Developer Program\day 01 - SDB> npx ts-node .\23-mint-nft.ts       
// bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
// nft {
//   model: 'nft',
//   updateAuthorityAddress: PublicKey [PublicKey(uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm)] {
//     _bn: <BN: d924d73aeb149b49821e828a90d22c7e4554dc134d2449d2491ab11a40238f4>
//   },
//   json: {
//     name: 'kap nino in beach',
//     symbol: 'KAP',
//     image: 'https://arweave.net/X14jHdYOeGCmKVzS67ZqxV8WLtH1X29nU7VlZibShT4',
//     attributes: [ [Object], [Object], [Object] ]
//   },
//   jsonLoaded: true,
//   name: 'kap nino in beach',
//   symbol: '',
//   uri: 'https://arweave.net/ZP0yhE5wRNUoArO91uhKfrsXPqnZKplxW1rNdsdH9Ek',
//   isMutable: true,
//   primarySaleHappened: false,
//   sellerFeeBasisPoints: 5000,
//   editionNonce: 255,
//   creators: [
//     {
//       address: [PublicKey [PublicKey(uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm)]],
//       verified: true,
//       share: 100
//     }
//   ],
//   tokenStandard: 0,
//   collection: null,
//   collectionDetails: null,
//   uses: null,
//   programmableConfig: null,
//   address: PublicKey [PublicKey(BQziodwk5w3JQvGzDVEcGKCwZ4Qwhtmcre7vX5NWnM2h)] {
//     _bn: <BN: 9aba7e318fea2d9406eb43be6ae34090dda84f473d7a08345e9cb2191f1f922a>
//   },
//   metadataAddress: Pda [PublicKey(3TqK6DDAq6mSozk93rU29rBhfL3Ucxr3wq2RU3xhcLZH)] {
//     _bn: <BN: 249719f02d25d5558995b3796ea02d5160011d4a7c5bd9adbe25a5b007dbce54>,
//     bump: 254
//   },
//   mint: {
//     model: 'mint',
//     address: PublicKey [PublicKey(BQziodwk5w3JQvGzDVEcGKCwZ4Qwhtmcre7vX5NWnM2h)] {
//       _bn: <BN: 9aba7e318fea2d9406eb43be6ae34090dda84f473d7a08345e9cb2191f1f922a>
//     },
//     mintAuthorityAddress: PublicKey [PublicKey(DCwpuGBJymbg3zgSRN7NJBGh4M4A5Y4cSY99nsqyw49g)] {
//       _bn: <BN: b55b9fb3c26db3284714e0373bc20f7c4bc98114da14c0560f0ed8104f4db453>
//     },
//     freezeAuthorityAddress: PublicKey [PublicKey(DCwpuGBJymbg3zgSRN7NJBGh4M4A5Y4cSY99nsqyw49g)] {
//       _bn: <BN: b55b9fb3c26db3284714e0373bc20f7c4bc98114da14c0560f0ed8104f4db453>
//     },
//     decimals: 0,
//     supply: { basisPoints: <BN: 1>, currency: [Object] },
//     isWrappedSol: false,
//     currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
//   },
//   token: {
//     model: 'token',
//     address: Pda [PublicKey(9anr9oGq7hemS4uSMxQc1ekok5afTPMcSqCzWjU9qnZ6)] {
//       _bn: <BN: 7f858081b5b6bc4bb581a640b2d7d654ec45e4d8e73abfe7974b368e2f59d479>,
//       bump: 254
//     },
//     isAssociatedToken: true,
//     mintAddress: PublicKey [PublicKey(BQziodwk5w3JQvGzDVEcGKCwZ4Qwhtmcre7vX5NWnM2h)] {
//       _bn: <BN: 9aba7e318fea2d9406eb43be6ae34090dda84f473d7a08345e9cb2191f1f922a>
//     },
//     ownerAddress: PublicKey [PublicKey(uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm)] {
//       _bn: <BN: d924d73aeb149b49821e828a90d22c7e4554dc134d2449d2491ab11a40238f4>
//     },
//     amount: { basisPoints: <BN: 1>, currency: [Object] },
//     closeAuthorityAddress: null,
//     delegateAddress: null,
//     delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
//     state: 1
//   },
//   edition: {
//     model: 'nftEdition',
//     isOriginal: true,
//     address: Pda [PublicKey(DCwpuGBJymbg3zgSRN7NJBGh4M4A5Y4cSY99nsqyw49g)] {
//       _bn: <BN: b55b9fb3c26db3284714e0373bc20f7c4bc98114da14c0560f0ed8104f4db453>,
//       bump: 255
//     },
//     supply: <BN: 0>,
//     maxSupply: <BN: 0>
//   }
// }