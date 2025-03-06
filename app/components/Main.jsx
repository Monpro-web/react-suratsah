
import React from 'react'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export  function Main(props) {
  return (
      <main className="flex flex-col  row-start-2 items-center sm:items-start">
        <Headline  
            page={props.page}
            code={<code>
                    {props.page}/page.js
                </code>}
            />
            {props.children}
        <Links page={props.page} />
      </main>  
  )
}
