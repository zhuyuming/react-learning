import { LISTADD, LISTDEL, LISTEMPTY } from '../const'

function add (item) {
    return {
        type: LISTADD,
        item: item
    }
}

function del (item) {
    return {
        type: LISTDEL,
        item: item
    }
}

function empty (item) {
    return {
        type: LISTEMPTY
    }
}

export default {
    add,
    del,
    empty
}
