import React from 'react';
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CryptoList from './CryptoList';
import CryptoPctChange from './CryptoPctChange';


//TEMPORARY HAVING ISSUES WITH .ENV
const API_KEY = "7ebb09855b9aa6759660f9c7914cc720";

const baseUrl = "http://api.coinlayer.com"


function App() {

const [ cryptoResponseObject, setCryptoResponseObject ] = useState({});
const [ percentageResponseObject, setPercentageResponseObject ] = useState({});



  useEffect(() => {
    fetchCryptoRates();
   // fetchPercentageChanges();
  }, []);

   const fetchCryptoRates = () => {
    axios.get(`${baseUrl}/live?access_key=${API_KEY}`, {headers: {"Content-Type": "application/json"}})
    .then((response) => {
      const cryptoResponseObject = response.data;
      setCryptoResponseObject(cryptoResponseObject);
    })
    .catch(error => console.error(`Error: ${error}`));
  } 
  
  //PERCENTAGE CHANGE BELOW

  /* const fetchPercentageChanges = () => {
    axios.get(`${baseUrl}/change?access_key=${API_KEY}`, {headers: {"Content-Type": "application/json"}})
    .then((response) => {
      const percentageResponseObject = response.data;
      setPercentageResponseObject(percentageResponseObject);
    })
    .catch(error => console.error(`Error: ${error}`));
  } */



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
