export function CryptoInfo({data}) {
 
    if(!data) return null;

    
  return (
    <div>
      <h2>
        {data.name} ({data.symbol.toUpperCase()})
      </h2>
      <p>Price: ${data.market_data.current_price.usd.toFixed(2)}, Ranking : {data.market_cap_rank}</p>
      <img src={data.image.small} alt={data.name} />
    </div>
  );
}