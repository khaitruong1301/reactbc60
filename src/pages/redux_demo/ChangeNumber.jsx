import React, { Component } from 'react'
import {connect} from 'react-redux'

 class ChangeNumber extends Component {


  render() {
    console.log(this.props)
    return (
      <div className='container'>
        <p>Account balance:</p>
        <h3>{this.props.number}$</h3>
        <button className='btn btn-success' onClick={()=>{
            //Gửi dữ liệu lên store
            //Bước 1: Tạo ra object (action) có 2 tham số: {type:'',payload:dữ liệu gửi lên}
            const action = {
                type:'DEPOSIT', //bắt buộc action phải có thuộc tính type
                payload:10
            }
            //Dùng props this.props.dispatch
            this.props.dispatch(action)
        }}>deposit 10$</button>
      </div>
    )
  }
}
//mapStateToProps: Lay state redux -> props cua component 
const mapStateToProps = (state) => {
    return {number:state.stateNumber}
}
const ComponentChangeNumberWithRedux = connect(mapStateToProps)(ChangeNumber)
export default ComponentChangeNumberWithRedux

