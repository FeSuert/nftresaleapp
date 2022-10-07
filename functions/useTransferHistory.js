import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

export default function useTransferHistory(address) {
    const [history, setHistory] = useState()
    const config = {
        apiKey: "q-BnAsNG_1pntsNZ4WiUXJSGRvQoLCD9",
        network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(config);

    useEffect(() => {
        (async () => {
            const res = await alchemy.core.getAssetTransfers({
            fromBlock: "0x0",
            fromAddress: address,
            excludeZeroValue: true,
            category: ["erc721", "erc1155"],
            });
            if(res){
                let arr = []
                for (const events of res.transfers) {
                    arr.push(events.hash)}
                setHistory(arr)
            }
        })()
    },[])   
    return history
    // Print contract address and tokenId for each NFT (ERC721 or ERC1155):
    // if(history){
    //     let arr = []
    //     for (const events of history.transfers) {
    //         arr.push(events.hash)
    //     setHistory(...arr)
    //         // if (events.erc1155Metadata == null) {
    //         //     console.log(
    //         //     "ERC-721 Token Minted: ID- ",
    //         //     events.tokenId,
    //         //     " Contract- ",
    //         //     events.rawContract.address
    //         //     );
    //         // } else {
    //         //     for (const erc1155 of events.erc1155Metadata) {
    //         //     console.log(
    //         //         "ERC-1155 Token Minted: ID- ",
    //         //         erc1155.tokenId,
    //         //         " Contract- ",
    //         //         events.rawContract.address
    //         //     );
    //         //     }
    //         // }
    //     }
    // }
}