import './App.css'
import { useEffect} from 'react'
import apidataFetcher from './api/apidata'
import Card from './components/card'
import {usePostContext} from './components/context/postcontext'

const App = () => {
  let postContext = usePostContext()
  useEffect(() => {
    async function setData() {
      const data = await apidataFetcher()
      postContext.setPostsArr(data)
    }
    setData()
  }, [])
  return (
    <div className="App">
      <div className='heading'>Click on Post Titles for Details</div>
  
      {postContext.postsArr.length > 0 && postContext.postsArr.map(post => <Card  key={post.id} id={post.id} title={post.title} />)}

    </div>
  )
}

export default App
