import { useState, useContext, createContext } from 'react'

const weatherContext = createContext(null)

export const useWeatherState = () => {
    return useContext(weatherContext)
}

export const WeatherProvider = (props) => {
    const [errMsg, setErrMsg] = useState('')
    const [doneLocationFetching, setdoneLocationFetching] = useState(false)
    const [doneFetching, setDoneFetching] = useState(false)
    const [city, setCity] = useState(null)
    const [cityData, setCityData] = useState({})
    return (
        <weatherContext.Provider value={{ city, cityData, setCity, setCityData, setDoneFetching, doneFetching, errMsg, setErrMsg, doneLocationFetching, setdoneLocationFetching }}>
            {props.children}
        </weatherContext.Provider>
    )
}