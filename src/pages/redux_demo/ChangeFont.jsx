//rcredux: Xoa export, xoa mapdispatchtoprops
import React, { Component } from 'react'
import { connect } from 'react-redux'
//xoa export
class ChangeFont extends Component {
    
  render() {
    console.log(this.props)
    return (
      <div className='container'>
        <p style={{fontSize:this.props.fSize}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, facere!</p>
        <button className='btn btn-success me-2' onClick={()=>{
            //Buoc 1: Tao action 
            const action = {
                type:'CHANGE_FONT_SIZE',
                payload: 1
            }
            //B2: Gui len store
            this.props.dispatch(action)
        }}>+</button>
        <button className='btn btn-success me-2' onClick={()=>{
            //Buoc 1: Tao action 
            const action = {
                type:'CHANGE_FONT_SIZE',
                payload: -1
            }
            //B2: Gui len store
            this.props.dispatch(action)
        }}>-</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    fSize:state.stateFontSize
})
//xoa mapdispatchtoprops
export default connect(mapStateToProps)(ChangeFont)