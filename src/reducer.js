import {Map} from 'immutable';
import {initGame, resetGame, getLegalMoves} from './game'

export default (state = Map(), action) => {
    switch(action.type) {
        case 'INIT_GAME':
            return initGame();
        break;
        case 'RESET_GAME':
            return resetGame();
        break;
        case 'GET_LEGAL_MOVES':
            return getLegalMoves( state, action.rank, action.file );
        break;
    }
    return state;
}