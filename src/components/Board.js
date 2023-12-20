import React from 'react';
import Column from './Column';
import '../css/board.css';
import columns from '../columnFields';

function Board() {
    return (
        <div className="board">
            {columns.map((item) => (
                <Column key={item.id} name={item.name} limit={item.limit} id={item.id}/>
            ))}
        </div>
    );
}

export default Board;
