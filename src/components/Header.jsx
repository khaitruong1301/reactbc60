import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
class Header extends Component {


    
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} style={({isActive})=> isActive ? {border:'1px solid orange'} : {} } to="/home" aria-current="page">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} style={({isActive})=> isActive ? {border:'1px solid orange'} : {} }  to="/login">Login</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} style={({isActive})=> isActive ? {border:'1px solid orange'} : {} }  to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} style={({isActive})=> isActive ? {border:'1px solid orange'} : {} }  to="/lifecycle">React-Lifecycle</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/redux-number">Change number</NavLink>
                                <NavLink className="dropdown-item" to="/redux-font-size">Change font size</NavLink>
                                <NavLink className="dropdown-item" to="/redux-change-color">Change color</NavLink>
                                <NavLink className="dropdown-item" to="/redux-shopping-carts">Shopping Carts</NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        
                        <NavLink to="/redux-cart" className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <i className='fa fa-cart-plus'></i> ({this.props.arrProductCart.reduce((total,prod)=>{
                                return total += prod.quantity
                            },0)})
                        </NavLink>
                    </form>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state)=>({
    arrProductCart: state.stateCart.arrProductCart
})
export default connect(mapStateToProps)(Header)