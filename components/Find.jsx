import { useState } from "react";
import axios from "axios";



export function FindCripto() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null)


  const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY; 


  const handleSearch = async () => {
    try {
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${search.toLowerCase()}`, {
                headers: {
                    "x-cg-api-key": API_KEY,
                },
            }
        );
    console.log('Data of cripto:', response.data);
    setData(response.data)
  } catch (error){
    console.log('Error', error)
  }
};
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          console.log(e.target.value);
          setSearch(e.target.value);
        }}
        placeholder="Digite o nome da cripto..."
      />
      <button onClick={handleSearch}>Go</button>
    </div>
  );
}
