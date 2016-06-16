import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe( 'reducer', () => {

    it( 'handles INIT_GAME', () => {
        const initialState = Map();
        const action = { type: 'INIT_GAME' };
        const nextState = reducer( initialState, action );

        expect( nextState ).to.equal(fromJS({
            message: '',
            board: [
                [-6,-5,-4,-3,-2,-4,-5,-6],
                [-1,-1,-1,-1,-1,-1,-1,-1],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1],
                [6,5,4,3,2,4,5,6]
            ],
            nextMove: 'WHITE'
        }));
    });

    it( 'handles RESET_GAME', () => {
        const state = fromJS({
            message: 'c4xd5',
            board: [
                [-6,-5,-4,-3,-2,-4,-5,-6],
                [-1,0,0,-1,0,-1,-1,-1],
                [0,0,0,0,0,0,0,0],
                [0,-1,-1,0,1,0,0,0],
                [0,0,0,1,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [1,1,1,3,0,1,1,1],
                [6,5,4,0,2,4,5,6]
            ],
            nextMove: 'BLACK'
        });
        const action = { type: 'RESET_GAME' };
        const nextState = reducer( state, action );
        
        expect( nextState ).to.equal(fromJS({
            message: 'Game Reset',
            board: [
                [-6,-5,-4,-3,-2,-4,-5,-6],
                [-1,-1,-1,-1,-1,-1,-1,-1],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1],
                [6,5,4,3,2,4,5,6]
            ],
            nextMove: 'WHITE'
        }));
    });

   /* it( 'shows valid moves for a piece (e2 pawn)', () => {
        const state = reducer(null, {type: 'INIT_GAME'});
        const action = { type: 'GET_LEGAL_MOVES', rank: 2, file: 'e' };
        const nextState = reducer( state, action );

        expect(nextState).to.equal(fromJS({
            message: 'Game Reset',
            board: [
                [-6,-5,-4,-3,-2,-4,-5,-6],
                [-1,-1,-1,-1,-1,-1,-1,-1],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1],
                [6,5,4,3,2,4,5,6]
            ],
            nextMove: 'WHITE',
            validMoves: [ 'e3', 'e4' ]
        }));
    });*/
});