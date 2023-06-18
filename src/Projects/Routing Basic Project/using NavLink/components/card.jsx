import './card.css'
import { NavLink } from 'react-router-dom'
const Card = ({ userId, title, id, body }) => {

    return (
        
        <div className={!body?"card2":"card1"}>
            {!body && <NavLink className='nav-link' to={`posts/${id}`}><div>{title}</div></NavLink>}
    
            {body && <div className="cardDetails" id='id'>Post No.{id}</div>}

            {body && <div className="cardDetails" id='userid'>Created by UserId:{userId}</div>}

            {body && <div className="cardDetails">Title</div>}
            {body && <div className="cardDetails" id='title'>{title}</div>}

            {body && <div className="cardDetails">Body</div>}
            {body && <div className="cardDetails" id='body'>{body}</div>}

        </div>
    )
}

export default Card