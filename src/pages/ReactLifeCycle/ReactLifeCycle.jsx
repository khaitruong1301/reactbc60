import React, { Component } from 'react'
import Child from './Child'
import axios from 'axios'
import * as _ from 'lodash'
export default class ReactLifeCycle extends Component {
  constructor(props){
    super(props)
    this.state = {
        number:1,
        like:1,
        objectLike:{
          like: 1
        },
        products: [
          {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "size": "[36,37,38,39,40,41,42]",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "deleted": false,
            "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
            "relatedProducts": "[2,3,5]",
            "feature": true,
            "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"
          }
        ]
    }
    console.log('constructor')
  }
  static getDerivedStateFromProps(newProps,currentState){
    //Kiểm tra localstorage .... để xử lý state trước render
    console.log('getDerivedStateFromProps')
    // return {
    //     number:currentState.number + 1,
    // }
    return null
  }
  render() {
    console.log('render')
    return (
      <div className='container'>
        <h3>Number: {this.state.number}</h3>
        <button className='btn btn-danger' onClick={()=>{
          this.setState({
            number: this.state.number + 1
          })
        }}>+</button>
        <br />
        react lifecycle
        <div className='bg-dark text-white'>
            <button className='btn btn-primary' onClick={()=>{
              let newLike = this.state.objectLike // {like} 0001.xx = 5
              newLike.like += 1
              this.setState({
                objectLike: _.cloneDeep(newLike) //0002
              })
            }}>Like {this.state.objectLike.like}</button>
            <Child objectLike={this.state.objectLike}/>
            
        </div>
        <hr />
        <button className='btn btn-success' onClick={()=>{
         

        }}>Get api</button>
        <h3 className='text-center'>Product list</h3>
        <div className='row'>
            {this.state.products.map((item)=>{
              return <div className='col-4 mt-2' key={item.id}>
              <div className='card'>
                <img src={item.image} alt="..."/>
                <div className='card-body'>
                  <h3>{item.name}</h3>
                  <p>{item.price} $</p>
                  <button className='btn btn-dark'><i className='fa fa-cart-plus'></i> Add to cart</button>
                </div>
              </div>
            </div>
            })}
        </div>

      </div>
    )
  }
  componentDidMount(){
    //sau khi lấy dữ liệu api về => setState ....
    console.log('componentDidMount')
     //Call api
     let promise = axios({
      url:'https://shop.cyberlearn.vn/api/Product',
      method:'GET'
    });
    //thành công
    promise.then(res => {
      const data = res.data.content;
      //đem data đưa vào state
      this.setState({
        products:data
      })
    })
  
  }
}
