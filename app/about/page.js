import Head from 'next/head'
import React from 'react'
import { Footer } from '../components/Footer'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export default page = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8   sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  row-start-2 items-center sm:items-start">
    
        <Headline  page="About" />
        <Links page="About" />
        <Footer />
      </main>  
    </div>
  )
}

