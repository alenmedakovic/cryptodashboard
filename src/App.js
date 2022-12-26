import React from 'react';
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CryptoList from './CryptoList';
import CryptoPctChange from './CryptoPctChange';



const url = "https://www.worldcoinindex.com/apiservice/json?key=${API_KEY}";


function App() {

  const [ cryptoResponseObject, setCryptoResponseObject ] = useState("");
  const [ percentageResponseObject, setPercentageResponseObject ] = useState("");


  
const crypto_mock_percentage = {
  "success": true,
  "terms": "https://coinlayer.com/terms",
  "privacy": "https://coinlayer.com/privacy",
  "change": true,
  "start_date": "2018-04-01",
  "end_date": "2018-04-30",
  "target": "USD",
  "rates": {
    "BTC": {
      "start_rate": 6903.113849,
      "end_rate": 9245.982724,
      "change": 2342.86887,
      "change_pct": 1.33939305
    },
    "ETH": {
      "start_rate": 383.02749,
      "end_rate": 670.440229,
      "change": 287.412739,
      "change_pct": 1.75037105
    },
    "XRP":{
      "start_rate": 0.482917,
      "end_rate": 0.831833,
      "change": 0.348916,
      "change_pct": 1.72251753
    }
  }
} 


const crypto_mock = {
    "success": true,
    "terms": "https://coinlayer.com/terms",
    "privacy": "https://coinlayer.com/privacy",
    "timestamp": 1529571067,
    "target": "USD",
    "rates": {
      "BTC": 16830,
      "ETH": 1200,
      "XRP": 3.523,
      "611": 0.389165,
      "ABC": 59.99,
      "ACP": 0.014931,
      "ACT": 0.15927,
      "ACT*": 0.14371,
      "ADA": 0.160502,
      "ADCN": 0.001406,
      "ADL": 121.5,
      "ADX": 0.427854,
      "ADZ": 0.02908,
      "AE": 2.551479,
      "AGI": 0.12555,
      "AIB": 0.005626,
      "AIDOC": 0.02605,
  }
}


  useEffect(() => {
    fetchCryptoRates();
    fetchPercentageChanges();

  }, []);

  const fetchCryptoRates = () => {
    axios.get(`${url}`, {headers: {"Content-Type": "application/json"}})
    .then((response) => {
      const allCryptoRates = response.crypto;
      setCryptoResponseObject(allCryptoRates);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  //PERCENTAGE CHANGE BELOW

  const fetchPercentageChanges = () => {
    axios.get(`${url}`, {headers: {"Content-Type": "application/json"}})
    .then((response) => {
      const allPercentageChange = response.pct;
      setPercentageResponseObject(allPercentageChange);
    })
    .catch(error => console.error(`Error: ${error}`));
  }


  

  return (
    <div>
    <CryptoList rates={crypto_mock.rates}  />
    <CryptoPctChange percentage={crypto_mock_percentage.rates.BTC} />
    </div>
 )
}

export default App;
