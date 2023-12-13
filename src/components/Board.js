import React from 'react';
import Column from './Column';
import '../css/board.css';
import BoardContext from '../BoardContext';

function Board() {
    const { Consumer: BoardConsumer } = BoardContext;
    return (
        <BoardConsumer>
            {(context) => ( 
                <div className="board">
                    {context.colArr.map((item) => (
                        <Column key={item.id} name={item.name} limit={item.limit} />
                    ))}
                </div>
            )}
        </BoardConsumer>
    );
}

export default Board;
