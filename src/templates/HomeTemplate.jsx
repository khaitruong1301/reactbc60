import React, { Component } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

//Home template dùng để định nghĩa các thành phần dùng chung của các page 
export default class HomeTemplate extends Component {




  render() {
    return (
      <>
        <Header />

        <div style={{minHeight:600}}>
            {/* outlet đại diện cho component load bên trong template này */}
            <Outlet />
        </div>


        <footer className='bg-dark text-white text-center p-5'>
            Footer cybersoft
        </footer>
      </>
    )
  }
}
