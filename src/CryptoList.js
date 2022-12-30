
import React from 'react';
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import candlePhoto from "./photos/candles.png"




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
    <div style={{backgroundImage: `url(${candlePhoto})`,
    backgroundPosition: "100px 0px",
  }}
   className="container mx-auto w-full h-full
     relative sm:rounded-lg">
      <h1 className="mb-52 mt-16 font-extrabold text-center text-2xl">Top 100 cryptocurrencies by rank</h1>
      <table className="text-center w-full text-sm text-gray-600">
        <thead className="bg-white flex text-black w-full border-black border-2
        bg-gradient-to-r
        from-white">
          <tr className="flex w-full mb-4">
          <th className="p-4 w-1/4 py-3 px-6">Rank</th>
            <th className="p-4 w-1/4 py-3 px-6">Symbol</th>
            <th className="p-4 w-1/4 py-3 px-6">Name</th>
            <th className="p-4 w-1/4 py-3 px-6">Price (USD)</th>
            <th className="p-4 w-1/4 py-3 px-6">Change (24h)</th>
            <th className="p-4 w-1/4 py-3 px-6">Market Cap (USD)</th>
          </tr>
        </thead>
        <tbody className="border-2 border-black flex flex-col items-center justify-between w-full">
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
               from-white  dark:border-gray-700">
                <td className="p-4 w-1/4 py-4 px-6 font-semibold">{rates[key].rank}<span
                className="mx-2">&nbsp;</span>
                <a href="#" onClick={() => handleClickHeart(key)}>
                  <i className={`fas fa-heart ${activeRows[key] ? "text-indigo-700":
                  "text-gray-300"}`}></i>
                </a>
                </td>
                <td className="p-4 w-1/4 py-4 px-6 font-bold text-gray-900">{rates[key].symbol}</td>
                <td className="p-4 w-1/4 py-4 px-6 ">{rates[key].name}</td>
                <td className="p-4 w-1/4 py-4 px-6 font-semibold text-gray-900">${shortenedPrice}</td>
                <td className={percentColor}>{rates[key].percent_change_24h + "%"}</td>
                <td className="p-4 w-1/4 py-4 px-6 font-semibold text-gray-900">{marketCapInBillions} B</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default CryptoList; 



