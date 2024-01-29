import React, { Component } from 'react'

export default class Home extends Component {

  callApiFunc = ()=>{
      console.log('call api ...')
  }

  render() {
    return (
      <div>Home</div>
    )
  }


  componentDidMount(){
    //setup 1 hàm chạy ngầm
    setInterval(this.callApiFunc,1000)
  }
  componentWillUnmount(){
    //Lifecycle chạy trước khi component mất khỏi giao diện
    //Thường dùng để huy các service chạy ngầm
    clearInterval(this.callApiFunc)
  }

  componentDidUpdate(prevProps,prevState) {
    //Component thực thi sau khi render => và mỗi khi state hoặc props thay đổi
    //Nếu có xử lý setState trong trường hợp này phải có if
    

  }

}
