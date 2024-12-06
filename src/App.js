// // App.js
// import React from 'react';
// import './App.css';
// import './Weather.js'

// function App() {
//   return (
//     <div className="weather-container">
//       <div className="weather-icon">
//         <span role="img" aria-label="cloud">
//           ☁️
//         </span>
//       </div>
//       <div className="weather-info">
//         <div className="temperature">
//           26<span className="degree-symbol">°C</span>
//         </div>
//         <div className="details">
//           <p>Precipitation: 5%</p>
//           <p>Humidity: 61%</p>
//           <p>Wind: 13 km/h</p>
//         </div>
//       </div>
//       <div className="weather-summary">
//         <p>Weather</p>
//         <p>Wednesday 11:00</p>
//         <p>Cloudy</p>
//       </div>
//     </div>
//   );
// }

// export default App;
// App.js
import React from 'react';
import useWeather from './Weather';
import './App.css';

function App() {
  const { weatherData, loading, error } = useWeather('Hanoi'); // Thành phố mặc định: Hà Nội

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="weather-container">
      <div className="weather-icon">
        <span role="img" aria-label="cloud">
          ☁️
        </span>
      </div>
      <div className="weather-info">
        <div className="temperature">
          {Math.round(weatherData.main.temp)}
          <span className="degree-symbol">°C</span>
        </div>
        <div className="details">
          <p>Precipitation: {weatherData.clouds.all}%</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {Math.round(weatherData.wind.speed)} km/h</p>
        </div>
      </div>
      <div className="weather-summary">
        <p>Weather</p>
        <p>{new Date().toLocaleString()}</p>
        <p>{weatherData.weather[0].description}</p>
      </div>
    </div>
  );
}

export default App;
