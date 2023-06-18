import { apifetcherForLocation } from "../../api/apifetching"

async function currentLocationDataSetter(weatherState) {
    navigator.geolocation.getCurrentPosition(async (position) => {
        try {
            const response = await apifetcherForLocation(position.coords.latitude, position.coords.longitude)
            if (response[0] < 200 || response[0] >= 300) {
                let errorMessage = response[1].error.message
                throw new Error(errorMessage)
            } else {
                weatherState.setCityData(response[1])
                weatherState.setdoneLocationFetching(true)
            }
        } catch (error) {
            console.log('location error : ', error.message)
        }

    })
}

export default currentLocationDataSetter