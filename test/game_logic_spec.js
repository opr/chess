import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {getArrayPosition, getLegalMoves, getPiece} from '../src/game';
import reducer from '../src/reducer';

describe( 'game logic', () => {

    it( 'gets the correct array position for a given rank and file (8a)', () => {
        const rank = 8;
        const file = 'a';
        const arrayPositions = getArrayPosition( rank, file );

        expect(arrayPositions).to.equal( Map({ x: 0, y: 0 } ) );
    });

    it( 'gets the correct array position for a given rank and file (1a)', () => {
        const rank = 1;
        const file = 'a';
        const arrayPositions = getArrayPosition( rank, file );

        expect(arrayPositions).to.equal( Map({ x: 7, y: 0 } ) );
    });

    it( 'gets the correct array position for a given rank and file (5f)', () => {
        const rank = 5;
        const file = 'f';
        const arrayPositions = getArrayPosition( rank, file );

        expect(arrayPositions).to.equal( Map({ x: 3, y: 5 } ) );
    });

    it( 'gets the correct piece number for a square', () => {
        const initialState = reducer(null, {type: 'INIT_GAME'});
        const piece = getPiece( initialState.get('board'), 6, 0 );
        expect(piece).to.equal(1);
    } );

    it( 'gets the legal moves for a pawn that hasn\'t moved yet', () => {
        const state = reducer( null, {type: 'INIT_GAME'} );
        const legalMoves = reducer( state, { type: 'GET_LEGAL_MOVES', rank: 2, file: 'd' } );
    });
});