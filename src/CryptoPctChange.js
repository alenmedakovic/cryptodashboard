import React from 'react';


function CryptoPctChange(props) {
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

export default CryptoPctChange;