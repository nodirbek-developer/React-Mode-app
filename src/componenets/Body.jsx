import React from 'react'

export default function Body({mode}) {
  return (
    <div className={mode==true?"Body bg-dark text-light":"Body bg-light"}>MainBody</div>
  )
}

