import {Map, List} from 'immutable';

export function getPawnLegalMoves( board, boardPosition ) {
    const x = boardPosition.get('x');
    const y = boardPosition.get('y');
    const isWhite = board.get(x).get(y) > 0;
    var validMoves = List();

    if( isWhite ) {
        //if it's on the 2nd rank, check 1 then 2 squares in front of it.
        if(board.get(x-1).get(y) == 0) {
            validMoves = validMoves.push(Map({ x: x-1, y: y}));
            if(board.get(x-2).get(y) == 0) {
                validMoves = validMoves.push(Map({ x: x-2, y: y}));
            }
        }
    }
    return validMoves;
}