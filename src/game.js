import {Map, List} from 'immutable';

export const INITIAL_STATE = new Map({
    message: '',
    board: List([
        List([6,5,4,3,2,4,5,6]),
        List([1,1,1,1,1,1,1,1]),
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