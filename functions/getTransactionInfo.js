import { Network, Alchemy } from "alchemy-sdk";
import { ethers } from "ethers";
import { useState } from "react";
import react from "react";

const provider = new ethers.providers.InfuraProvider("rinkeby");

export default function getTransactionInfo(hash) {
    const [data, setData] = useState()
    (async() => { 
        const res = await provider.getTransaction(hash) 
        setData(res)
        console.log(res)
    })()
      
}