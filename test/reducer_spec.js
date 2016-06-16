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
                [6,5,4,3,2,4,5,6],
                [1,1,1,1,1,1,1,1],
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
});