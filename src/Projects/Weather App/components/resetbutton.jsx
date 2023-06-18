import { useWeatherState } from './context/weathercontext'
import currentLocationDataSetter from './location/location.js'


const ResetButton = (props) => {
    const weatherState = useWeatherState()
    return (
        <div className="btn">
            <button onClick={() => {
                weatherState.setErrMsg('');
                weatherState.setDoneFetching(false)
                weatherState.setCity(null)
                weatherState.setCityData({})
                currentLocationDataSetter(weatherState)
            }}>{props.value}</button>
        </div>
    )
}

export default ResetButton