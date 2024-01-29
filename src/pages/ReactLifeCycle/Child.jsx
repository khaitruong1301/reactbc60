import React, { Component, PureComponent } from 'react'
/*
PureComponent: tự so sánh các props trước khi render có thay đổi hay không để quyết định việc render của component (có thay đổi thì render lại không thay đổi thì không render)

**Thay đổi: shallow compare (so sánh nông)
chỉ so sánh được các giá trị cơ sở
#Pure không so sánh được object trước và sau khi thay đổi
Đối với props là reference value thì khi update state (props) sẽ phải clone ra object mới


*/


export default class Child extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {

    }
    console.log('constructor child')
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDerivedStateFromProps child')
    return null
  }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log('this.props', this.props)
  //   console.log('newProps', newProps)
  //   //Xét trước render
  //   // props: this.props và newProps (sau khi component thay đổi và trước render)
  //   //state: this.state là state trước khi thay đổi và (new state là state sau khi thay đổi và trước render) 
  //   if (this.props.like !== newProps.like) {
  //     //người dùng đang bấm like
  //     return true
  //   }
  //   return false
  // }

  render() {
    console.log('render child')
    return (
      <div className='container'>
        like: {this.props.objectLike.like}
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount child')
  }
}
