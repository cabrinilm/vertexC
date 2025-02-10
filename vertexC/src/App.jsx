import { useState } from 'react'
import './App.css'
import { Header } from '../../components/Header'
import { FindCripto } from '../../components/Find'
import axios from 'axios'
const  App = () => {
  

  return  (
    <>
    <Header />
    <FindCripto />
    </>
  )

  
  
}

export default App
