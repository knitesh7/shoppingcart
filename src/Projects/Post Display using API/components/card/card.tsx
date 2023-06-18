import React from 'react'
import './card.css'

// interface cardProps {
//     item: {
//         albumId: number,
//         id: number,
//         url: string,
//         thumbnailUrl: string
//     }
// }
interface cardProps {
    item: {
        userId: number,
        id: number,
        title: string,
        body: string
    }
}

const Card: React.FC<cardProps> = ({item}) => {
    return (
        <div className="card">
            <div className="cardItems">Post No.{item.id}</div>
            <div className="cardItems">(Created By UserID-{item.userId})</div>
            <div className="cardItems" id='title'>Title : {item.title}</div>
            <div className="cardItems" id='body'>{item.body}</div> 
        </div>
    )
}

// const Card: React.FC<cardProps> = ({item}) => {
//     return (
//         <div className="card">
//             <div className="cardItems">Album No. {item.albumId}</div>
//             <div className="cardItems">Photo Id : {item.id}</div>
//             <div className="cardItems" id='img'><img src={item.thumbnailUrl}></img></div>
//             {/* <div className="cardItems" id='body'>{item.body}</div>  */}
//         </div>
//     )
// }


export default Card