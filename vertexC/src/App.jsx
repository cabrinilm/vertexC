import { useState } from 'react'
import './App.css'
import { Header } from '../../components/Header'
import { FindCrypto } from '../../components/FindCrypto'
import axios from 'axios'
import { CryptoInfo } from '../../components/CryptoInfo'






const  App = () => {
  const [cryptoData, setCryptoData] = useState(null);
  

  const handleDataFetch = (data) => {
    setCryptoData(data);  
  };


  return  (
    <>
    <Header />
    <FindCrypto  onDataFetch={handleDataFetch}/>
     <CryptoInfo  data={cryptoData}/> 





    </>
  )

  
  
}

export default App
