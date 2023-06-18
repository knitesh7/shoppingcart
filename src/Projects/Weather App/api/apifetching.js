const baseUrl = `https://api.weatherapi.com/v1/current.json?key=e9c21c736fa348c8b67115431230105`

export const apifetcherForCity = async (city) => {
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`, { method: 'get' })
    const data = await response.json()
    return [response.status, data]
}

export const apifetcherForLocation = async (latitude, longitude) => {
    const response = await fetch(`${baseUrl}&q=${latitude},${longitude}&aqi=yes`, { method: 'get' })
    const data = await response.json()
    return [response.status, data]
}