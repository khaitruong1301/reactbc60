



export const fontSizeReducer = (state = 30,action) =>{
    if (action.type === 'CHANGE_FONT_SIZE'){
        state += action.payload
    }
    return state
}