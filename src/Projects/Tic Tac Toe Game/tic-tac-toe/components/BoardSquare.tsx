import React, { useState, useEffect } from 'react'

interface BoardSqaureProps {
    id: number,
    value: string,
    matchWinner: string,
    values:Array<number>,
    fn: (x: number) => void
}

const BoardSquare: React.FC<BoardSqaureProps> = (props) => {

    function handleClick(id: number) {
        if(props.values[id]==null && props.matchWinner==''){
            props.fn(id)
        }
    }

    return (
        < div className="square" onClick={() => handleClick(props.id)}> {props.value}</div >
    )
}

export default BoardSquare