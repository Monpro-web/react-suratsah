import Head from 'next/head'
import React from 'react'
import { Footer } from '../components/Footer'
import { Links } from '../components/Links'

const page = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    
        <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">About page</h1>
        <Links />
        <Footer />
      </main>  
    </div>
  )
}

export default page