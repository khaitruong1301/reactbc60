//rxslice
import { createSlice } from '@reduxjs/toolkit'

//state default luôn là object
//B1: setup state ban đầu
const initialState = {
    arrProductCart: [ 
        {id:3,name:'meizu phone',image:'./images/meizuphone.jpg',price:3000,quantity:2}
    ]
}
const cartReducer = createSlice({
  name: 'cartReducer', //b2: đặt tên này giúp sinh ra action type tự động
  initialState,
  reducers: {
    addToCart: (state, action) => { //b3: định nghĩa action
        console.log(action)
        //Tạo ra sản phẩm giỏ hàng có thêm số lượng
        const prodCart = {...action.payload,quantity:1}
        //Kiểm tra sản phẩm đã có trong giỏ hàng (state.arrProductCart) nếu có thì tăng số lượng ngược lại chưa có thì push vào state.arrProductCart
        const prodCheck = state.arrProductCart.find(prod => prod.id === prodCart.id);
        if (prodCheck) {
            prodCheck.quantity += 1
        }else {
            state.arrProductCart.push(prodCart)
        }
    },
    deleteItemCart:(state,action) => {
        //Xử lý xoá dựa vào payload gửi lên
        const id = action.payload
        //xử lý thay đổi state.arrProductCart
        state.arrProductCart = state.arrProductCart.filter(p => p.id !== id);
    },
    changeQuantity:(state,action) => {
        const {id,quantity} = action.payload
        const prodCheck = state.arrProductCart.find(prod=>prod.id === id);
        if(prodCheck){
            prodCheck.quantity += quantity
            if (prodCheck.quantity < 1) {
                if(window.confirm('Bạn có muốn xoá không ?')){
                    state.arrProductCart = state.arrProductCart.filter(p=>p.id!==id)
                }else {
                    prodCheck.quantity += 1
                }
            }
        }
        //imutatable: tính bất biến (phân biệt sự thay đổi của state)
        //so sánh state trước và state sau khi sử lý (shallow compare) 
    },
    changeQuantityInput:(state,action) =>{
        const {id,value} = action.payload;
        const prodChangeQuantity = state.arrProductCart.find(p=>p.id === id);
        if (prodChangeQuantity && value >0 && value < 100){
            prodChangeQuantity.quantity = Number(value)
        }
    }
  }
});
export const {addToCart,deleteItemCart,changeQuantity,changeQuantityInput} = cartReducer.actions //b4: export action ra ngoài 
export default cartReducer.reducer

















// import _ from 'lodash'
// const stateDefault = [ 
//     {id:3,name:'meizu phone',image:'./images/meizuphone.jpg',price:3000,quantity:2}
// ]

// export const cartReducer = (state = stateDefault, action) => {
//     if (action.type === 'ADD_TO_CART') {
//         let prodCart = {...action.payload, quantity:1}
//         console.log(prodCart)
//         let prodCheck = state.find(prod => prod.id === prodCart.id);
//         if (prodCheck){
//             prodCheck.quantity += 1
//         }else {
//             state.push(prodCart)
//         }
//     }
//     console.log(state,'state')

//     let newState = _.cloneDeep(state)
//     return newState 
// }
