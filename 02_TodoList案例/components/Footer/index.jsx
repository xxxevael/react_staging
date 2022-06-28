import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

  //全选和取消全选的回调
  handleCheck=(event)=>{
    this.props.checkALL(event.target.checked)
  }
  //清除已完成任务的回调
  handleclearALL=()=>{
    this.props.clearAlldone()
  }

  render() {
    const {todos} = this.props
    //全部的数量
    const total = todos.length
    //已完成的数量
    const doneCount = todos.reduce((pre,cur)=>{return pre + (cur.done?1:0)},0)
    return (
      <div className="todo-footer">
            <label>
              <input type="checkbox" checked={doneCount===total && total!==0} onChange={this.handleCheck}/>
            </label>
            <span>
              <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button className="btn btn-danger" onClick={this.handleclearALL}>清除已完成任务</button>
          </div>
    )
  }
}
