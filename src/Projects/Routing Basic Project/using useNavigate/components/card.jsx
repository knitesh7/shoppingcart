import './card.css'
import { useNavigate } from 'react-router-dom'
const Card = ({ userId, title, id, body }) => {
    const navigate = useNavigate()
    return (
        
        <div className={!body?"card2":"card1"}>
            {!body && <button className="titleBtn" onClick={()=>navigate(`/${id}`)}>{title}</button>}

            {/* {body && <div className="cardDetails">Post No.{id}</div>} */}
            {body && <div className="cardDetails" id='id'>Post No.{id}</div>}

            {/* {body && <div className="cardDetails">Created by UserId</div>} */}
            {body && <div className="cardDetails" id='userid'>Created by UserId:{userId}</div>}

            {body && <div className="cardDetails">Title</div>}
            {body && <div className="cardDetails" id='title'>{title}</div>}

            {body && <div className="cardDetails">Body</div>}
            {body && <div className="cardDetails" id='body'>{body}</div>}

        </div>
    )
}

export default Card