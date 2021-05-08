import React, {Component, useEffect, useState} from 'react';
import './Weather.css';
const axios = require('axios');

const APIkey= "139f9c1e3240a70c62287d5005e2b52f";
const base= "https://api.openweathermap.org/data/2.5/";
  
function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key == "Enter") {
      fetch(`${base}weather?q=${query}&units=metric&APPID=${APIkey}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

const createDates = (dates) => {
    let dayArray = ["Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"];
    let monthArray = ["January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November", 
                      "December"];
    let day = dayArray[dates.getDay()];
    let date = dates.getDate();
    let month = monthArray[dates.getMonth()];
    let year = dates.getFullYear();

    return `${day} ${month} ${date}, ${year}`
  }

  return (
    <div class = 'header'>
      <h1 class = 'header1'> 
        Planning on going to the dog park today? Make sure to check the weather first!
      </h1>
      <h2 class = 'header2'>
        Type in your city and click enter:
      </h2>
      <div class={(typeof weather.main != "undefined")?((weather.main.temp > 16)?'app warm':'app'):'app'}>
        <main>
          <div class="searchLocation">
            <input type="text" class="searchlocation2" placeholder="Search Location"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}/>
          </div>
              {(typeof weather.main != "undefined") ? (
          <div>
            <div class = "box">
                  <div class = "locationBox">
                      <div class="location">{weather.name}, {weather.sys.country}</div>
                      <div class="date">{createDates(new Date())}</div>
                  </div>
                <div class ="weather">
                  <div class="temperature">
                    {Math.round(((weather.main.temp)+(9/5))+32)}°F
                  </div>
                  <div class="weather2">{weather.weather[0].main}</div>
                </div>
            </div>
          </div>
            ):('')}
        </main>
      </div>
    </div>
  );
}

export default Weather;