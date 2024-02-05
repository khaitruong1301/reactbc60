



export const numberReducer =  (stateNumber = 100,action) => {
    console.log('redux store')
    if (action.type == 'DEPOSIT'){
        stateNumber += action.payload;
    }
    return stateNumber 
}