import { useState } from 'react'
import './App.css'
import Weather from './Weather'
import SearchBox from './searchBox'

function App() {
  const [weather, setWeather] = useState("{}")

  const updateWeather = (result) => {
    setWeather(result);
  }
  
  return (
    <>
      <SearchBox updateInfo={updateWeather}/>
      <br /><br />
       <Weather weather={weather}/>
    </>
  )
}

export default App
