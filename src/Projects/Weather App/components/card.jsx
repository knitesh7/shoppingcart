
import { useWeatherState } from "./context/weathercontext"

const Card = () => {
    const weatherState = useWeatherState()
    const flag = weatherState.errMsg == '' ? true : false
    return (
        <div className="card">

            {(weatherState.doneFetching && !flag) && weatherState.errMsg}

            {(weatherState.doneFetching && flag) && <div className="cardIcon">{<img src={weatherState.cityData.current.condition.icon}></img>}</div>}
            {(weatherState.doneLocationFetching) && <div className="cardIcon">{<img src={weatherState.cityData.current.condition.icon}></img>}</div>}

            {(weatherState.doneFetching && flag) && <div className="cardText">{weatherState.cityData.current.condition.text}</div>}
            {(weatherState.doneLocationFetching) && <div className="cardText">{weatherState.cityData.current.condition.text}</div>}

            {(weatherState.doneFetching && flag) && <div className="cardTemp">{weatherState.cityData.current.temp_c}<span>&#176;</span>C </div>}

            {(weatherState.doneLocationFetching) && <div className="cardTemp">{weatherState.cityData.current.temp_c}<span>&#176;</span>C </div>}

            {(weatherState.doneFetching && flag) && <div className="cardName">{weatherState.cityData.location.name},{weatherState.cityData.location.region},{weatherState.cityData.location.country}</div>}

            {(weatherState.doneLocationFetching) && <div className="cardName"> Current Location -- {weatherState.cityData.location.name},{weatherState.cityData.location.region},{weatherState.cityData.location.country}</div>}
    
        </div>

    )
}

export default Card