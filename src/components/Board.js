import React from 'react';
import Column from './Column';
import '../css/board.css';
import BoardContext from '../context';

function Board() {
    const { Consumer: BoardConsumer } = BoardContext;
    return (
        <BoardConsumer>
            {(arr) => (
                <div className="board">
                    {arr.map((item) => (
                        <Column key={item.id} name={item.name} limit={item.limit} />
                    ))}
                </div>
            )}
        </BoardConsumer>
    );
}

export default Board;
