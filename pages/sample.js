import { useEffect, useState } from 'react';
import getTransactionInfo from '../functions/getTransactionInfo';
import styles from '../styles/Home.module.css'

const Test = () => {
    getTransactionInfo("0xb6da8ab057f7045d7feb0ffd7bd05065ad4389274d6f34ff2f2f9cd296af8171")
    return (
        <div>Test</div>
    )
}

export default Test;