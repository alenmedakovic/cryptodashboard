
import React from 'react';



function CryptoList(cryptoResponseObject) {
  const { rates } = cryptoResponseObject;

  if (Object.keys(rates).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mb-8">My Table</h1>
      <table className="text-left w-full">
        <thead className="bg-black flex text-white w-full">
          <tr className="flex w-full mb-4">
          <th className="p-4 w-1/4">Rank</th>
            <th className="p-4 w-1/4">Symbol</th>
            <th className="p-4 w-1/4">Name</th>
            <th className="p-4 w-1/4">Price (USD)</th>
            <th className="p-4 w-1/4">Change (24h)</th>
            <th className="p-4 w-1/4">Market Cap (USD)</th>
          </tr>
        </thead>
        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{height: '50vh;'}}>
          {Object.keys(rates).map(key => {
            const percentChange = rates[key].percent_change_24h;
            let percentColor = "p-4 w-1/4";
            if (percentChange < 0) {
              percentColor += " text-red-500";
            } else {
              percentColor += " text-green-500";
            }
            const marketCapInBillions = (rates[key].market_cap_usd 
            / 1000000000).toFixed(2);

            const price = rates[key].price_usd;
            let shortenedPrice = "";

            if (price[7] === ".") {
              shortenedPrice = price.substring(0, 7);
            } else {
              shortenedPrice = price.substring(0, 8);
            }
            

            return (
              <tr key={key} className="flex w-full mb-4">
                <td className="p-4 w-1/4">{rates[key].rank}</td>
                <td className="p-4 w-1/4">{rates[key].symbol}</td>
                <td className="p-4 w-1/4">{rates[key].name}</td>
                <td className="p-4 w-1/4">${shortenedPrice}</td>
                <td className={percentColor}>{rates[key].percent_change_24h + "%"}</td>
                <td className="p-4 w-1/4">{marketCapInBillions} B</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default CryptoList; 



