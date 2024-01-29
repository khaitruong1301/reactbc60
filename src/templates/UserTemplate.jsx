import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class UserTemplate extends Component {
  render() {
    return (
      <>
        <div className='d-flex'>
          <div className='w-25 bg-dark text-white' style={{ minHeight: '100vh' }}>
            <h3 className='text-center py-2'>
              <NavLink className={'text-warning'} style={{ textDecoration: 'none' }} to="/user">Dashboard</NavLink>
            </h3>
            <ul className='mt-2'>
              <li>
                <NavLink className={'nav-link'} to="/user/index">Users</NavLink>
              </li>
              <li>
                <NavLink className={'nav-link'} to="/user/product">Products</NavLink>
              </li>
            </ul>
          </div>
          <div className='w-75'>
            <div className='bg-dark text-white w-100 p-3 text-end'>
              <NavLink to="#" className="nav-link d-inline-block text-center">
                <span className='rounded-circle'>
                  <i className='fa fa-user'></i>
                </span>
                <br />
                Hello abc!
              </NavLink>
            </div>
            <Outlet />
          </div>
        </div>

      </>
    )
  }
}

// console.error('acb')
