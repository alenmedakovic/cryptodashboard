import React from 'react';


function CryptoPctChange(percentageResponseObject) {
  const { percentage } = percentageResponseObject;

  if (Object.keys(percentage).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.entries(percentage).map(([key, value]) => (
        <div key={key}>
          {key}: {value.symbol}
          <ul>
            {Object.entries(value)
            .filter(([innerKey]) => innerKey !== "symbol" && innerKey
            !== "name_full" && innerKey !== "icon_url")
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

export default CryptoPctChange;