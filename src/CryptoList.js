
import React from 'react';


function CryptoList(cryptoResponseObject) {
  const { rates } = cryptoResponseObject;

  delete rates.success;
  delete rates.terms;
  delete rates.privacy;
  delete rates.timestamp;
  delete rates.target;


  if (Object.keys(rates).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.entries(rates).map(([key, value]) => (
        <div key={key}>
          {key}: {value.symbol}
          <ul>
            {Object.entries(value)
            .map(([innerKey, innerValue]) => (
              <li key={innerKey}>
                {innerKey}: {innerValue}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

}




export default CryptoList; 



