import { LISTADD, LISTDEL, LISTEMPTY } from '../const'

const init = []

export default function ( state = init, action){
    switch( action.type ){
        case LISTADD :
            return [...state, action.item];
            break;
        case LISTDEL :
            return [
                ...state.slice( 0, action.index ),
                ...state.slice(action.index + 1)
            ];
            break;
        case LISTEMPTY :
            return [];
            break;
    }
    return state

}
