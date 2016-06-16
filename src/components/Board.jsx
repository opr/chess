import React from 'react';
import Square from './Square';

export default React.createClass({
    render: () => {
        let squares = [];
        for( var i=0; i<8; i++) {
            squares.push([]);
            for( var j=0; j<8; j++) {
                squares[i].push(<Square isWhite={(i+j)%2} squareId={i+''+j} />);
            }
        }
        console.log( squares );
        return <div className="board">{squares}</div>;

    }
});