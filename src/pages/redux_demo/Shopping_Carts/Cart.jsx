import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart_Page from '../../Cart_Page'

class Cart extends Component {

  renderTotalQuantity = () => {
    let total = 0
    for(let prod of this.props.stateCart){
      total += prod.quantity
    }
    return total
  }
  renderTotalAll =() => {
    // let totalAll = 0
    // for(let prod of this.props.stateCart){
    //   totalAll += prod.quantity * prod.price
    // }
    // return totalAll

    return this.props.stateCart.reduce((total,prod)=>{ 
      return total + prod.price * prod.quantity
    }, 0).toLocaleString()
  }

  render() {
    console.log(this.props)
    //bs5-modal-default
    return (
      <div>
        {/* Modal trigger button */}
        <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
          <i className='fa fa-cart-plus'></i> ({this.renderTotalQuantity()} - {this.renderTotalAll()})
        </button>
        {/* Modal Body */}
        {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
        <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  <i className='fa fa-cart-plus'></i>Carts
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                  <Cart_Page />
              </div>
              <div className='modal-footer text-end'>
                  <span className='fz-1'>Total: {this.renderTotalAll()}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Optional: Place to the bottom of scripts */}
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  stateCart: state.stateCart.arrProductCart
})


export default connect(mapStateToProps)(Cart)