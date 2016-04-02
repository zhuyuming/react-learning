import { LISTADD, LISTDEL, LISTEMPTY } from '../const'

function add (item) {
    return {
        type: LISTADD,
        item: item
    }
}

function del (index) {
    return {
        type: LISTDEL,
        index: index
    }
}

function empty () {
    return {
        type: LISTEMPTY
    }
}

export default {
    add,
    del,
    empty
}
