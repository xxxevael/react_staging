import React,{Component}  from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
export default class App extends Component{
  // 状态再哪里 操作状态的方法就再哪里

  //初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false}
  ]}
  //addTodo 用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj)=>{
    //  console.log('App',data);
    //获取原todo
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
   }
   //updateTodo用于更新一个todo对象
   updateTodo = (id,done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //匹配处理数据
    const newTodos =  todos.map((todoObj) => {
      if(todoObj.id===id){
        return {...todoObj,done}
      }else{
        return todoObj
      }
    })
    this.setState({todos:newTodos})
   }
   //deleteTodo 用于删除一个todo对象
   deleteTodo=(id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id 
    })
    this.setState({todos:newTodos})
   }
   //checkALL用于全选
   checkALL=(done)=>{
    const {todos} = this.state
    const newTodos = todos.map(item=>{
      return {...item,done}
    })
    this.setState({todos:newTodos})
   }
   //clearAll 用于清除已完成任务
   clearAlldone=()=>{
    const {todos} = this.state
    const newTodos = todos.filter(item=>!item.done)
    this.setState({todos:newTodos})
   }
  render(){
    const {todos} = this.state
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkALL={this.checkALL} clearAlldone={this.clearAlldone}/>
        </div>
      </div>
    )
  }
}

