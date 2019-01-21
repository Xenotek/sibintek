import * as type from '../constants'
import axios from 'axios'

const fetchItemsRequest = () => ({
    type: type.FETCH_ITEMS_REQUEST
})

const fetchItemsSuccess = ({data}) => ({
    type: type.FETCH_ITEMS_SUCCESS,
    items: data
})

const fetchItemsFailure = (err) => ({
    type: type.FETCH_ITEMS_FAILURE,
    err
})

export const fetchItems = () => dispatch => {
    dispatch(fetchItemsRequest())

    axios.get('https://raw.githubusercontent.com/cy6eria/test_task/master/posts.json')
    // axios.get('/data.json')
        .then(res => {
            if (res.status === 200) {
                dispatch(fetchItemsSuccess(res))
            } else {
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(fetchItemsFailure(err)))

}

