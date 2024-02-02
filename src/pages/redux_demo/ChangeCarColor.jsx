//rcredux: xoa export, mapdispatchtoprops
import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ChangeCarColor extends Component {

    handleChangeColor = (color) => {
        // console.log(this.props)
        const action = {
            type:'CHANGE_COLOR',
            payload:`./images/${color}-car.jpg`
        }
        this.props.dispatch(action)
    }

  render() {
    // console.log(this.props)
    return (
      <div className='container'>
        <h3>Change car color</h3>
        <div className='row'>
            <div className='col-6'>
                <img src={this.props.image} className='w-100' />
            </div>
            <div className='col-6'>
                <button className='btn btn-danger' onClick={()=>{
                    this.handleChangeColor('red')
                }}>Red</button>
                <button className='btn btn-default' onClick={()=>{
                    this.handleChangeColor('silver')
                }}>Silver</button>
                <button className='btn btn-dark' onClick={()=>{
                    this.handleChangeColor('black')
                }}>Black</button>
            </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    image:state.stateImage,
    fSize:state.stateFontSize
})
export default connect(mapStateToProps)(ChangeCarColor)