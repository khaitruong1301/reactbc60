import React, { Component } from 'react'
import Child from './Child'
export default class ReactLifeCycle extends Component {
  constructor(props){
    super(props)
    this.state = {
        number:1
    }
    console.log('constructor')
  }
  static getDerivedStateFromProps(newProps,currentState){
    //Kiểm tra localstorage .... để xử lý state trước render
    console.log('getDerivedStateFromProps')
    return {
        number:currentState.number + 1
    }
    // return null
  }
  render() {
    console.log('render')
    return (
      <div className='container'>
        <h3>Number: {this.state.number}</h3>
        react lifecycle
        <div className='bg-dark text-white'>
            <Child />
        </div>
      </div>
    )
  }
  componentDidMount(){
    //sau khi lấy dữ liệu api về => setState ....
    console.log('componentDidMount')
  }
}
