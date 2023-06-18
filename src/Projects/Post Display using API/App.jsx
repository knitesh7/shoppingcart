import {useState,useEffect} from 'react'
import Card from './components/card/card.tsx'
import './App.css';

function App(){
  const [posts,setPosts] = useState([])
  useEffect(()=>{
      async function fetchData(){
        let fetchedData = await fetch('https://jsonplaceholder.typicode.com/posts',{method:'get'}) 
        let response = await fetchedData.json()
        setPosts(response)
      }
      fetchData() 
  },[])
  return (
    <div className="App">
      {posts.map(post=><Card item={post}/>)}
    </div>
  );
}

export default App;