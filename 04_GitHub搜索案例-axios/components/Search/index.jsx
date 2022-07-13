import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {
  search=()=>{
    //获取用户的输入（连续解构赋值+重命名）
    const {keyWordElement:{value}} = this
    //发送请求前通知App更新状态
    this.props.updateAppState({isFirst:false,isLoading:true})
    console.log(value);
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
      response=>{
        //发送请求后通知App更新状态
        this.props.updateAppState({isLoading:false,users:response.data.items,err:""})
      },
      error=>{
        //发送请求失败通知App更新状态
        this.props.updateAppState({isLoading:false,err:error.message})
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
