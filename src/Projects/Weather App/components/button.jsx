import { useWeatherState } from './context/weathercontext'
import { apifetcherForCity } from '../api/apifetching'

const Button = (props) => {
    const weatherState = useWeatherState()
    const setData = async (city) => {
        try {
            const data = await apifetcherForCity(city)
            if (data[0] < 200 || data[0] >= 300) {
                weatherState.setDoneFetching(true)
                let errorMessage = data[1].error.message
                throw new Error(errorMessage);
            } else {
                weatherState.setDoneFetching(true)
                weatherState.setCityData(data[1])
            }

        } catch (error) {
            weatherState.setErrMsg(error.message)
            weatherState.setCity(null)
            weatherState.setCityData({})
        }

    }
    function resetFunc() {
        weatherState.setErrMsg('')
        weatherState.setDoneFetching(false)
        weatherState.setCity(null)
        weatherState.setCityData({})
        weatherState.setdoneLocationFetching(false)
    }
    return (
        <div className="btn">
            <button onClick={() => {
                if (weatherState.city == null) {
                    alert('Enter the city for search..')
                } else {
                    resetFunc()
                    setData(weatherState.city)
                }
            }}>{props.value}</button>
        </div>
    )
}

export default Button