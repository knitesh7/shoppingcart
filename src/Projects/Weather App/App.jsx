import './App.css'
import { useEffect } from 'react'
import Card from './components/card'
import SearchBar from './components/input'
import Button from './components/button'
import ResetButton from './components/resetbutton'
import { useWeatherState } from './components/context/weathercontext'
import currentLocationDataSetter from './components/location/location.js'

const App = () => {
  const weatherState = useWeatherState()
  function setLocationData() {
    currentLocationDataSetter(weatherState)
  }

  useEffect(() => {
    setLocationData()
  }, [])
  return (
    <div className="App">
      <h1>Weather Forescast App</h1>

      <div className="searchDiv">
        <SearchBar />
        <Button value={'Search'} />
        {weatherState.doneFetching && <ResetButton value={'Reset'} />}
      </div>
      <Card />
    </div>
  )
}

export default App

// const App = () => {
//   const weatherState = useWeatherState()
//   const currentLocationDataGetter = async () => {
//     navigator.geolocation.getCurrentPosition(async position => {
//       try {
//         const response = await apifetcherForLocation(position.coords.latitude, position.coords.longitude)
//         if (response[0] < 200 || response[0] >= 300) {
//           let errorMessage = response[1].error.message
//           throw new Error(errorMessage);
//         } else {
//           weatherState.setCityData(response[1])
//           weatherState.setdoneLocationFetching(true)
//         }
//       } catch (error) {
//         console.log('location error : ', error.message)
//       }

//     })
//   }
//   useEffect(() => {
//     currentLocationDataGetter()
//   }, [])
//   return (
//     <div className="App">
//       <h1>Weather Forescast App</h1>

//       <div className="searchDiv">
//         <SearchBar />
//         <Button value={'Search'} />
//         {weatherState.doneFetching && <ResetButton value={'Reset'} />}
//       </div>
//       <Card/>
//     </div>
//   )
// }

// export default App