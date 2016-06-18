import {Map, List} from 'immutable';
import {getPawnLegalMoves} from './pieces/Pawn';

export const INITIAL_STATE = new Map({
    message: '',
    board: List([
        List([-6,-5,-4,-3,-2,-4,-5,-6]),
        List([-1,-1,-1,-1,-1,-1,-1,-1]),
        List([0,0,0,0,0,0,0,0]),
        List([0,0,0,0,0,0,0,0]),
        List([0,0,0,0,0,0,0,0]),
        List([0,0,0,0,0,0,0,0]),
        List([1,1,1,1,1,1,1,1]),
        List([6,5,4,3,2,4,5,6])
    ]),
    nextMove: 'WHITE'
});

export function initGame() {
    return INITIAL_STATE;
}

export function resetGame() {
    return INITIAL_STATE.set( 'message', 'Game Reset' );
}

export function getLegalMoves( state, rank, file ) {
    const boardPosition = getArrayPosition(rank, file);
    const piece = state.get('board').get(boardPosition.get('x')).get(boardPosition.get('y'));

    switch(piece) {
        case 1:
            getPawnLegalMoves()
    }
    console.log(piece);
}

export function getArrayPosition( rank, file ) {
    const files = 'abcdefgh';
    const x = Math.abs( 8-rank );
    const y = files.indexOf(file);
    return Map({ x: x, y: y});
}