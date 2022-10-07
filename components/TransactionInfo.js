import { Network, Alchemy } from "alchemy-sdk";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import react from "react";

const provider = new ethers.providers.InfuraProvider( "homestead" , "2e3f2ac784b1486e8c8aada615627a40" )

export default function TransactionInfo(props) {
    const hash = props.value
    const [data, setData] = useState({
        value: "loading...",
        from: "loading...",
        to:  "loading...",
    })
    useEffect(() => {
    (async() => { 
        const res = await provider.getTransaction(hash) 
        if(res){
            setData({
                value: ethers.utils.formatEther( res.value ),
                from: res.from,
                to:  res.to ,
            })
            //setData(ethers.utils.formatEther( res.value ))
        }
        console.log(res)
    })()
    }, [hash])

    return (
        <div>
            <h1>{data.value}</h1>
            <h1>{data.from}</h1>
            <h1>{data.to}</h1>
        </div>
    )
}