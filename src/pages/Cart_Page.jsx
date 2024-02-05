import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeQuantity, changeQuantityInput, deleteItemCart } from '../redux/reducer/cartReducer'
class Cart_Page extends Component {

  renderTotalQuantity = () => {
    let total = 0
    for (let prod of this.props.stateCart) {
      total += prod.quantity
    }
    return total
  }

  render() {
    console.log(this.props)
    //bs5-modal-default
    return (
      <div className='container'>
        <h3>Cart page </h3>
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
            {this.props.stateCart.map((prdCart) => {
              return <tr key={prdCart.id}>
                <td>{prdCart.id}</td>
                <td><img src={prdCart.image} alt="..." width={50} /></td>
                <td>{prdCart.name}</td>
                <td>{prdCart.price}</td>
                <td>
                  <button className='mx-2 btn btn-dark' onClick={()=>{
                    const action = changeQuantity({id:prdCart.id,quantity:1})
                    this.props.dispatch(action)

                  }}>+</button>
                  <input type='number' min={1} max={100}  style={{width:75,textAlign:'center'}} value={prdCart.quantity} onInput={(event)=>{
                    const {value} = event.target;
                    //tạo ra action mỗi lần người dùng thay đổi số lượng
                    const action = changeQuantityInput({
                      id:prdCart.id,
                      value
                    });
                    //đưa dữ liệu lên redux
                    this.props.dispatch(action)
                  }}/>
                  <button className='mx-2 btn btn-dark' onClick={()=>{
                    const action = changeQuantity({id:prdCart.id,quantity:-1})
                    this.props.dispatch(action)
                  }}>-</button>
                </td>
                <td>{(prdCart.price * prdCart.quantity).toLocaleString()}</td>
                <td>
                  <button className='btn btn-danger' onClick={()=>{
                    //Tạo action
                    const action = deleteItemCart(prdCart.id)
                    //Gửi action lên redux qua this.props.dispatch
                    this.props.dispatch(action)
                  }}><i className='fa fa-trash' ></i></button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>

    )
  }
}
const mapStateToProps = (state) => ({
  stateCart: state.stateCart.arrProductCart
})
export default connect(mapStateToProps)(Cart_Page)