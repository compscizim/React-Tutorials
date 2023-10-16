import React from "react";

let id=0
const Todo = props => (
  <li>
  <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle}/>
  <button onClick={props.onDelete}>delete</button>
  <span>{props.todo.text}</span>
  </li>
)
class App extends React.Component{
   constructor(props){
    super(props)
    this.state = {
      todos :[]
    }
   }

   addTodo(){

    const text = prompt("Enter Todo")

    this.setState({
      todos : [...this.state.todos,{text:text, id:id++, checked: false}]
    })

   }


   removeTodo(id){
    this.setState({
      todos: this.state.todos.filter(todo=> todo.id !== id)
    })
   }

    toggoleTodo(id){
      this.setState({
        todos : this.state.todos.map(todo =>{
          if (todo.id !== id) return todo
          return{
            text: todo.text,
            id: todo.id,
            checked: !todo.checked
          }
        })
      })
    }

   render(){
    return(
      <div>
        <p>The number of Todos {this.state.todos.length}</p>
        <p>The number of Checked {this.state.todos.filter(todo=> todo.checked).length}</p>
        <button onClick={this.addTodo.bind(this)}>Add Todo</button>
        <ol>
          {this.state.todos.map(todo=> <Todo 
          onDelete={()=> this.removeTodo(todo.id)}
          onToggle={()=> this.toggoleTodo(todo.id)}
          
          todo={todo}/>)}
        </ol>
      </div>
    )
   }
}

export default App;
