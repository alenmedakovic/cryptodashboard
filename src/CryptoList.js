import React from 'react';


function CryptoList(props) {
  const { rates } = props;

  return (
    <div>
      {Object.keys(rates).map(key => (
        <div key={key}>
          {key}: {rates[key]}
        </div>
      ))}
    </div>
  );
}

export default CryptoList;