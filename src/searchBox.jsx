import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const getWeather = async() => {
        try{const cityDetails = await fetch(`${import.meta.env.VITE_API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
        const jsonCityDetails = await cityDetails.json();
        const weather = {
            name : jsonCityDetails.name,
            clouds : jsonCityDetails.clouds.all,
            temp : jsonCityDetails.main.temp,
            humidity : jsonCityDetails.main.humidity,
            pressure : jsonCityDetails.main.pressure,
            wind : jsonCityDetails.wind.speed, 
            weather : jsonCityDetails.weather[0].main,
        }
        console.log(weather);
        setError(false);
        return weather;}
        catch(err){
            throw err;
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = async (event) => {
        try{event.preventDefault();
        console.log(city);
        setCity("");
        const info = await getWeather();
        updateInfo(info);}
        catch(err){
            setError(true);
        }
    }
    return(
        <>
        <h2>Search for the city</h2>
        <form onSubmit={handleSubmit}>
            <TextField label="City Name" id="city" required size="small" value={city} onChange={handleChange}/>
            &nbsp; &nbsp;
            <Button variant="contained" color='secondary' type='submit' endIcon={<SearchIcon />}>Search</Button>
        </form>
        {error && <p style={{color:"red"}}>No such place exists in our database</p>}
        </>
    )
}