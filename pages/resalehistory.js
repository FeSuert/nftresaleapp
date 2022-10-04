import { Alchemy, Network } from 'alchemy-sdk';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const Resalehistory = () => {
    const [history, setHistory] = useState()
    const config = {
    // apiKey: "<-- ALCHEMY APP API KEY -->",
    network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(config);

    // Address we want get NFT mints from
    const address = "0xd3F2659aB103b7A24FF255dC0cf1199D3E296660";

    useEffect(() => {
        (async () => {
            const res = await alchemy.core.getAssetTransfers({
            fromBlock: "0x0",
            fromAddress: address,
            excludeZeroValue: true,
            category: ["erc721", "erc1155"],
            });
            setHistory(res)
        })()
    },[])   

    // Print contract address and tokenId for each NFT (ERC721 or ERC1155):
    if(history){
        for (const events of history.transfers) {
            console.log(events)
            if (events.erc1155Metadata == null) {
                console.log(
                "ERC-721 Token Minted: ID- ",
                events.tokenId,
                " Contract- ",
                events.rawContract.address
                );
            } else {
                for (const erc1155 of events.erc1155Metadata) {
                console.log(
                    "ERC-1155 Token Minted: ID- ",
                    erc1155.tokenId,
                    " Contract- ",
                    events.rawContract.address
                );
                }
            }
        }
    }
    return (
        <div>Resalehistory</div>
    )
}

export default Resalehistory;