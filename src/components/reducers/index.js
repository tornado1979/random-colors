import { GET_RANDOM_COLOUR } from '../actions'

//initiate your starting state
let initial = {
    position: 0, //1st circle position (top,left)
}

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_RANDOM_COLOUR:
    let position = state.position
    const newPosition = position === 4 ? 1 : ++position

    return {
        ...action.payload,
        position: newPosition,
    }
    default:
      return state;
  }
};

export default reducer