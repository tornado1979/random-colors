import axios from "axios";
import { GET_RANDOM_COLOUR, SERVER_CONNECTION_ERROR } from '../actions'


const fetchValues = (data) => {
    return {
        payload: data,
        type: GET_RANDOM_COLOUR
    }
}

const error = (err) => {
    return {
        payload: err,
        type: SERVER_CONNECTION_ERROR,
    }
}

export const getRandomColour = () => (dispatch) => {
    axios.get(`http://www.colr.org/json/color/random`)
        .then((response)=> {
            return response.data
        })
        .then((colors) => {
          return dispatch(fetchValues(colors))
        })
        .catch((err) => {
          return dispatch(error(err))
        })
}