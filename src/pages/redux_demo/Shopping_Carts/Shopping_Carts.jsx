//rcredux: Xoa export, xoa mapDispatchToProps
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import Cart from './Cart'

const dataProduct = [
  {id:1,name:'apple phone',image:'./images/applephone.jpg',price:1000},
  {id:2,name:'vs phone',image:'./images/vsphone.jpg',price:2000},
  {id:3,name:'meizu phone',image:'./images/meizuphone.jpg',price:3000},
]

class Shopping_Carts extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Product list</h3>
        <Cart />
        <div className='row mt-2'>
          {dataProduct.map((prod)=>{
            return <div className='col-4' key={prod.id}>
              <Product product={prod} />
            </div>
          })}
          
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Shopping_Carts)