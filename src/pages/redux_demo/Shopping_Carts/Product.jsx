import React, { Component } from 'react'
import { connect } from 'react-redux'

class Product extends Component {
  render() {
    const {product} = this.props
    return (
      <div className='card'>
        <img src={product.image} alt="..." height={350}/>
        <div className='card-body'>
          <h3>{product.name}</h3>
          <p>{product.price.toLocaleString()} $</p>
          <button className='btn btn-dark'>
            <i className='fa fa-cart-plus'></i> 
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps)(Product)