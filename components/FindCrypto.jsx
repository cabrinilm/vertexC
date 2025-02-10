import { useState } from "react";
import axios from "axios";
import { CryptoInfo } from "./CryptoInfo";



export function FindCrypto({ onDataFetch }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("")
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY; 


  const handleSearch = async () => {
    setLoading(true); // 
    setError(null); // 
  
    try {
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${search.toLowerCase()}`, {
                headers: {
                    "x-cg-api-key": API_KEY,
                },
            }
        );
    
    onDataFetch(response.data)
  } catch (error){
    setError("Not possible to find this crypto")
  } finally {
    setLoading(false)
  }
};
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Type the name's crypto..."
      />
      <button onClick={handleSearch}>Go</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
