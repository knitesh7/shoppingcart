import { useWeatherState } from './context/weathercontext'

const SearchBar = () => {
    const weatherState = useWeatherState()
    return (
        <div className="searchBar">
            <input type='text' placeholder="Search city here.." value={weatherState.city ? weatherState.city : ''} onChange={e => weatherState.setCity(e.target.value)}></input>
        </div>
    )
}

export default SearchBar