import React from 'react';


function CryptoPctChange(props) {
  const { percentage } = props;

  return (
    <div>
      {Object.keys(percentage).map(key => (
        <div key={key}>
          {key}: {percentage[key]}
        </div>
      ))}
    </div>
  );
}

export default CryptoPctChange;