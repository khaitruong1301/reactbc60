import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {

  renderTotalQuantity = () => {
    let total = 0
    for(let prod of this.props.stateCart){
      total += prod.quantity
    }
    return total
  }

  render() {
    console.log(this.props)
    //bs5-modal-default
    return (
      <div>
        {/* Modal trigger button */}
        <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
          <i className='fa fa-cart-plus'></i> ({this.renderTotalQuantity()})
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
                  {/* table gio hang  */}
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.stateCart.map((prdCart)=>{
                        return <tr key={prdCart.id}>
                        <td>{prdCart.id}</td>
                        <td><img src={prdCart.image} alt="..." width={50} /></td>
                        <td>{prdCart.name}</td>
                        <td>{prdCart.price}</td>
                        <td>
                          <button className='mx-2 btn btn-dark'>+</button>
                          {prdCart.quantity}
                          <button className='mx-2 btn btn-dark'>-</button>
                        </td>
                        <td>{prdCart.price * prdCart.quantity}</td>
                        <td>
                          <button className='btn btn-danger'><i className='fa fa-trash' ></i></button>
                        </td>
                    </tr>
                      })}
                    </tbody>
                  </table>
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
  stateCart: state.stateCart
})


export default connect(mapStateToProps)(Cart)