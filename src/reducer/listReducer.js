import { LISTADD, LISTDEL, LISTEMPTY } from '../const'

const init = []

export default function ( state = init, action){
    switch( action.type ){
        case LISTADD :
            return [...state, action.item];
            break;
        case LISTDEL :
            return ['del'];
            break;
        case LISTEMPTY :
            return [];
            break;
    }
    return state

}
