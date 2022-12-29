import React from 'react';
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CryptoList from './CryptoList';



const baseUrl = "https://api.coinlore.net/api"


function App() {

const [ cryptoResponseObject, setCryptoResponseObject ] = useState({});



  useEffect(() => {
    fetchCryptoRates();
  }, []);

   const fetchCryptoRates = () => {
    axios.get(`${baseUrl}/tickers/`, {headers: {"Content-Type": "application/json"}})
    .then((response) => {
      const cryptoResponseObject = response.data.data;
      setCryptoResponseObject(cryptoResponseObject);
    })
    .catch(error => console.error(`Error: ${error}`));
  } 
  

   return (
    <div>
      {Object.keys(cryptoResponseObject).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <CryptoList rates={cryptoResponseObject} />
      )};
    </div>

  );
}



export default App;
