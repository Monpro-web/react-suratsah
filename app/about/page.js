
import React from 'react'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'


export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8   sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Main page="about" />
      <Footer className="row-start-3"/>
    </div>
  )
}

