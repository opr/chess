import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {getArrayPosition} from '../src/game';

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
});