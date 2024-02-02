//Cấu hình store chứa các state của ứng dụng
import {configureStore} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:{
        stateNumber: (stateNumber = 100,action) => {
            console.log('redux store')
            if (action.type == 'DEPOSIT'){
                stateNumber += action.payload;
            }
            return stateNumber 
        },
        stateFontSize:(state = 30,action) =>{
            if (action.type === 'CHANGE_FONT_SIZE'){
                state += action.payload
            }
            return state
        },
        stateImage: (state='./images/black-car.jpg',action) => {
            if (action.type === 'CHANGE_COLOR'){
                state = action.payload
            }
            return state
        },
        stateCart: (
            state = [
                {id:3,name:'meizu phone',image:'./images/meizuphone.jpg',price:3000,quantity:2}
            ]
        ) => {


            return state
        }
    }
})

