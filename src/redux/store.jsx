//Cấu hình store chứa các state của ứng dụng
import {configureStore} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:{
        stateNumber: (state = 1) => state
    }
})