//Cấu hình store chứa các state của ứng dụng
import {configureStore} from '@reduxjs/toolkit'
import _ from 'lodash'
import { numberReducer } from './reducer/numberReducer'
import { fontSizeReducer } from './reducer/fontSizeReducer'
import { imageReducer } from './reducer/imageReducer'
import cartReducer from './reducer/cartReducer'

export const store = configureStore({
    reducer:{
        stateNumber:numberReducer,
        stateFontSize:fontSizeReducer,
        stateImage:imageReducer,
        stateCart: cartReducer
}})
