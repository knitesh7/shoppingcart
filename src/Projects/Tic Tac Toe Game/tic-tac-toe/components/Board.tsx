import React, { useState, useEffect } from 'react';
import BoardSqaure from './BoardSquare'
import './Board.css'

const Board: React.FC = () => {
    const [values, setValues] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)
    const [winner, setWinner] = useState('')

    useEffect(() => {
        let res = determineWinner()
        if (typeof res === 'undefined') {
            setWinner('')
        } else {
            setWinner(res)
        }
    }, [values])

    function reseter() {
        setValues([...Array(9).fill(null)])
        setIsXTurn(true)
        setWinner('')
    }

    function clickFn(id: number): void {
        // let temp = values //useEfect wont run in this case
        let temp = [...values]
        temp[id] = isXTurn ? 'X' : 'O'
        setValues(temp)
        setIsXTurn(!isXTurn)
    }
    function determineWinner() {
        const winSquares = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        for (const arr of winSquares) {
            const [a, b, c] = arr
            if (values[a] != null) {
                if ((values[a] == values[b] && values[b] == values[c])) {
                    return values[a]
                }
            }
        }
        return ''
    }

    return (
        <>  
            {(winner == '' && !(values.filter(x => x != null).length == 9 && winner == '')) && <h2>{isXTurn?'X':'O'} please move</h2>}
            {(winner != '') && <div className='result'>  {winner} is the winner</div>}
            {(values.filter(x => x != null).length == 9 && winner == '') && <h2>Match is Draw</h2>}

            <div id='board'>
                <div className='row'>
                    <BoardSqaure values={values} matchWinner={winner} id={0} value={values[0]} fn={clickFn} />
                    <BoardSqaure values={values} matchWinner={winner} id={1} value={values[1]} fn={clickFn} />
                    <BoardSqaure values={values} matchWinner={winner} id={2} value={values[2]} fn={clickFn} />
                </div>
                <div className='row'>
                    <BoardSqaure values={values} matchWinner={winner} id={3} value={values[3]} fn={clickFn} />
                    <BoardSqaure values={values} matchWinner={winner} id={4} value={values[4]} fn={clickFn} />
                    <BoardSqaure values={values} matchWinner={winner} id={5} value={values[5]} fn={clickFn} />
                </div>
                <div className='row'>
                    <BoardSqaure values={values} matchWinner={winner} id={6} value={values[6]} fn={clickFn} />
                    <BoardSqaure values={values} matchWinner={winner} id={7} value={values[7]} fn={clickFn} />
                    <BoardSqaure values={values} matchWinner={winner} id={8} value={values[8]} fn={clickFn} />
                </div>

            </div>
            {((winner != '') || (values.filter(x => x != null).length == 9 && winner == '')) && <button className='reset' onClick={reseter}>Play Again</button>}
        </>

    );
};

export default Board;