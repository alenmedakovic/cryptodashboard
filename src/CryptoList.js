import React from 'react';


function CryptoList(cryptoResponseObject) {
  const { rates } = cryptoResponseObject;

  if (Object.keys(rates).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.entries(rates).map(([key, value]) => (
        <div key={key}>
          {key}: {value.symbol}
        </div>
      ))}
    </div>
  );
}




export default CryptoList; 



