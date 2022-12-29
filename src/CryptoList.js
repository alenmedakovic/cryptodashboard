
import React from 'react';


function CryptoList(cryptoResponseObject) {
   const { rates } = cryptoResponseObject;

  if (Object.keys(rates).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <tbody>
        {Object.keys(rates).map(key => (
          <tr key={key}>
            <td>{rates[key].rank}</td>
            <td>{rates[key].percent_change_1h}</td>
            <td>{rates[key].percent_change_24h}</td>
            <td>{rates[key].percent_change_7d}</td>
            <td>{rates[key].symbol}</td>
            <td>{rates[key].name}</td>
            <td>{rates[key].price_usd}</td>
            <td>{rates[key].market_cap_usd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

};




export default CryptoList; 



