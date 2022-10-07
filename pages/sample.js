import { useEffect, useState } from 'react';
import TransactionInfo from '../components/TransactionInfo';
import useTransactionInfo from '../functions/useTransactionInfo';
import useTransferHistory from '../functions/useTransferHistory';
import styles from '../styles/Home.module.css'

const Sample = () => {
    const adress = "0xd3F2659aB103b7A24FF255dC0cf1199D3E296660"
    //const data = useTransactionInfo("0xb6da8ab057f7045d7feb0ffd7bd05065ad4389274d6f34ff2f2f9cd296af8171")
    const data = useTransferHistory(adress)
    console.log(data)
    if(data) {
        return (
            <div>
                {data && data.map((transaction) => {
                    return (
                    <div key={transaction}>
                        <TransactionInfo value={transaction}/>
                    </div>)
                })
                }
            </div>
        )
    }
}

export default Sample;