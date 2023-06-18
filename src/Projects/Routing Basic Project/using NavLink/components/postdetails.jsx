import { useParams } from 'react-router-dom';
import Card from "./card"
import './postdetails.css'
import { usePostContext } from './context/postcontext';
const ShowDetails = ()=>{
    const postContext = usePostContext()
    const paramObj = useParams()
    const desiredObj = postContext.postsArr.find(x=>x.id == paramObj.id)

    return(
        <div className='container'>
            <Card userId={desiredObj.userId} title={desiredObj.title} id={desiredObj.id} body={desiredObj.body}/>
        </div>
    )
}

export default ShowDetails