import { combineReducers } from 'redux'
import * as type from '../constants'

const fetchItems = (state = { isFetching: false, items: []}, action) => {
    switch (action.type) {
        case type.FETCH_ITEMS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.items,
            }
        case type.FETCH_ITEMS_FAILURE:
            return {
                ...state,
                err: action.err,
                isFetching: false
            }
        default:
            return state;
    }
}


export default combineReducers({
    fetchItems
})