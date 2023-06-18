const apidataFetcher = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{method:'get'})
    const data = await response.json()
    return data
}

export default apidataFetcher