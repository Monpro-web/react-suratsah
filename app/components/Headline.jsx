import React from 'react'

export const Headline = (props) => {
    console.log(props);
    
  return (
    <div>
        <h1>{props.page} Page</h1>
        <p>
            Get started by editing{" "}
            <code>
                {props.page}/page.js
            </code>
        </p>
    </div>
  )
}




