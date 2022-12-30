
import React from 'react';
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";



function CryptoList(cryptoResponseObject) {
  const { rates } = cryptoResponseObject;

  const [activeRows, setActiveRows] = useState({});

  const handleClickHeart = (key) => {
    setActiveRows((prevActiveRows) => ({
      ...prevActiveRows,
      [key]: !prevActiveRows[key],
    }));
  };


  if (Object.keys(rates).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container relative shadow-md sm:rounded-lg ">
      <h1 className="mb-28 ">Top 100 Cryptocurrencies by rank</h1>
      <table className="text-center w-full text-sm text-gray-600">
        <thead className="bg-white flex text-black w-full border-black border-2
        bg-gradient-to-r
        from-white to-pink-100">
          <tr className="flex w-full mb-4">
          <th className="p-4 w-1/4 py-3 px-6">Rank</th>
            <th className="p-4 w-1/4 py-3 px-6">Symbol</th>
            <th className="p-4 w-1/4 py-3 px-6">Name</th>
            <th className="p-4 w-1/4 py-3 px-6">Price (USD)</th>
            <th className="p-4 w-1/4 py-3 px-6">Change (24h)</th>
            <th className="p-4 w-1/4 py-3 px-6">Market Cap (USD)</th>
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
              <tr key={key} className="flex w-full  bg-white border-b bg-gradient-to-r
               from-white to-pink-100 dark:border-gray-700">
                <td className="p-4 w-1/4 py-4 px-6 font-semibold">{rates[key].rank}<span
                className="mx-2">&nbsp;</span>
                <a href="#" onClick={() => handleClickHeart(key)}>
                  <i className={`fas fa-heart ${activeRows[key] ? "text-indigo-700":
                  "text-gray-500"}`}></i>
                </a>
                </td>
                <td className="p-4 w-1/4 py-4 px-6 font-bold text-gray-900">{rates[key].symbol}</td>
                <td className="p-4 w-1/4 py-4 px-6 font-semibold">{rates[key].name}</td>
                <td className="p-4 w-1/4 py-4 px-6">${shortenedPrice}</td>
                <td className={percentColor}>{rates[key].percent_change_24h + "%"}</td>
                <td className="p-4 w-1/4 py-4 px-6">{marketCapInBillions} B</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default CryptoList; 



