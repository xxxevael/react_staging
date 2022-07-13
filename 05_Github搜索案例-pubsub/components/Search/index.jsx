import axios from 'axios';
import PubSub from 'pubsub-js';
import React, { Component } from 'react'

export default class Search extends Component {
  search=()=>{
    PubSub.publish("message",{name:"tom",age:18})
    //获取用户的输入（连续解构赋值+重命名）
    const {keyWordElement:{value}} = this
    //发送请求前通知List更新状态
    // this.props.updateAppState({isFirst:false,isLoading:true})
    PubSub.publish("message",{isFirst:false,isLoading:true})

    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
      response=>{
        //发送请求后通知List更新状态
    PubSub.publish("message",{isLoading:false,users:response.data.items,err:""})
    // this.props.updateAppState({isLoading:false,users:response.data.items,err:""})
      },
      error=>{
        //发送请求失败通知List更新状态
    PubSub.publish("message",{isLoading:false,err:error.message})
    // this.props.updateAppState({isLoading:false,err:error.message})
      }
    )
  }
  
  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={c=>this.keyWordElement = c} type="text" placeholder="enter the name you search"/>
            <button onClick={this.search}>Search</button>
          </div>
        </section>
    )
  }
}
