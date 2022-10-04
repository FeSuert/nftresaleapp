import { Alchemy, Network } from 'alchemy-sdk';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const Myitems = () => {
    const [inventory, setInventory] = useState("")
    const settings = {
    apiKey: "q-BnAsNG_1pntsNZ4WiUXJSGRvQoLCD9", // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET,
    };
    const adress = "0xA9350E3b4Ad3f22bab136cfEf999C132eAD3bCA3"

    // Print all NFTs returned in the response:
    const alchemy = new Alchemy(settings);
    useEffect(() => {
      (async () => {
          try {
              const nfts = await alchemy.nft.getNftsForOwner(adress)
              setInventory(nfts)
            } catch (error) {
              console.error(error)
            }
      })()
    }, [])

    return (
        <div>
            <h1>My Items</h1>
            {inventory && inventory.ownedNfts.map((obj, index) => {
                let image = obj.rawMetadata.image
                console.log(obj.tokenId)
                const opensealink = "https://opensea.io/assets/ethereum/" + obj.contract.address + "/" + obj.tokenId
                if(image){
                    if(!image.includes("https")){
                        image = image.split("/")
                        image = "https://ipfs.io/ipfs/" + image[image.length - 1]
                    }
                    return (
                        <div key={index}>
                            <p>{obj.title}</p>
                            <Image 
                                loader={() => image} 
                                src={image} 
                                width={250} 
                                height={250}
                                alt="/notfound.svg"/>
                            <a target="_blank" href={opensealink} rel="noopener noreferrer">
                                <Image src="/opensea.svg" alt="Opensea" width={25} height={25}/>
                            </a>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default Myitems;