import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { InputWithButton } from './components/InputWithButton'
import { SummaryResult } from './components/SummaryResult'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <InputWithButton></InputWithButton>
      {/* <SummaryResult></SummaryResult> */}
    </>
  )
}

export default App
