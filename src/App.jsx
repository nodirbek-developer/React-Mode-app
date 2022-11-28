import React, { useState } from 'react'
import Footer from './componenets/Footer'
import Navbar from './componenets/Navbar'
import Body from './componenets/Body'
import lang from './base/lang'

export default function App() {
  const [data,setData]=useState('uz')
  const [mode,setMode]=useState(true);
  const handleData=lang[data]
  return (
    <>
      <Navbar mode={mode} setMode={setMode} data={handleData} setData={setData}/>
      <Body mode={mode}/>
      <Footer data={handleData}/>
    </>

  )
}