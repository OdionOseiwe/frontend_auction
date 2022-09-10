export const contract_address="0x2B90a26cc6d99c8C2AF1D8961721A7d1f01C8356"
export const NFT_contract_Address="0x56d1666b348ad878a2b564c66075f1fde9977450"

import AUCTION_NFT from '../abi/auction.json'
import NFT_ABI from '../abi/nft.json'


export const AUCTContract = {
    addressOrName: contract_address,
    contractInterface: AUCTION_NFT ,
  }
export const NFTContract = {
    addressOrName: NFT_contract_Address,
    contractInterface: NFT_ABI,
}