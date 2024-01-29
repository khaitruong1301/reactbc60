import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Profile extends Component {
  render() {

    if (!localStorage.getItem('userLogin')) {
        alert('Yêu cầu đăng nhập !')
        return <Navigate to="/login" />
    }

    return (
      <div>Profile</div>
    )
  }
}
