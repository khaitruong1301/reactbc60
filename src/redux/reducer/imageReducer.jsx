


export const imageReducer =  (state='./images/black-car.jpg',action) => {
    if (action.type === 'CHANGE_COLOR'){
        state = action.payload
    }
    return state
}