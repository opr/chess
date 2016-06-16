import {Map} from 'immutable';
import {initGame} from './game'

export default (state = Map(), action) => {
    switch(action.type) {
        case 'INIT_GAME':
            return initGame();
    }
    return state;
}