import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

const Index = () => {
  const [search, setSearch] = useState("")

  function handleSearch(e){
    e.preventDefault();
    console.log(search)
    setSearch("")
  }

  return (
    <div className='bg-orange-500 p-8 text-5xl m-5'>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/myitems">
          <a className='ml-8'>My Items</a>
        </Link>
        <Link href="/resalehistory">
          <a className='ml-8'>Resale History</a>
        </Link>
        <Link href="/sample">
          <a className='ml-8'>Sample</a>
        </Link>

      <form className="inline-block" onSubmit={handleSearch}>
        <label className="p-3 text-2xl" htmlFor="amount">
          Search adress
        </label>
        <input type="text" name="adress" value={search} onChange={e => setSearch(e.target.value)}/>
        <button
          type="submit"
          className={`my-2 ml-2 rounded border border-pink-300 bg-pink-100 py-1 px-4 text-xl hover:bg-pink-300  `}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Index;