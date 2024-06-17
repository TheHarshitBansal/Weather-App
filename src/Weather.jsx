import "./Weather.css"
import SubWeather from "./subWeather"

export default function Weather({weather}){

    return(
        <div className="widget">
            <h2>{weather.name}</h2>
            <hr style={{color:"white"}}/>
            <div className="temp">
                <img src="../public/temp.svg" alt="Temp" className="tempSVG"/>
                <div className="temp2">
                <h1>{Math.round(weather.temp)}&deg;</h1>
                <h2>{weather.weather}</h2>
                </div>
            </div>
            <br /><hr style={{color:"white"}}/>
            <div className="subWeather">
                <SubWeather data={weather.wind} unit={"km/h"} src={"../public/wind.svg"} name={"Wind"}/>
                <SubWeather data={weather.clouds} unit={"%"} src={"../public/cloud.svg"} name={"Clouds"}/>
                <SubWeather data={weather.pressure} unit={"mbar"} src={"../public/temp.svg"} name={"Pressure"}/>
                <SubWeather data={weather.humidity} unit={"%"} src={"../public/humidity.svg"} name={"Humidity"}/>
            </div>
        </div>
    )
}