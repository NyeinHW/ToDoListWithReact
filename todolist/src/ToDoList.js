import React from "react";
import './App.css';
import ToDo from './ToDo';
import ToDoDetail from './ToDoDetail';
import ToDoComplete from './ToDoComplete';
class ToDoList extends React.Component{
state={
    todos:[]
};
addToDo=todo=>{
    this.setState({
        todos:[todo,...this.state.todos]
    })
}
updateToDo=value=>{
    this.setState({
        todos:this.state.todos.map(todo=>{
            if(todo.id === value.id){
                return{
                    ...todo,
                    text: value.text
                };
            }
            else{
                return todo;
            }
    })
    })
}
onComplete=(id)=>{
    this.setState({
        todos:this.state.todos.map(todo=>{
            if(todo.id === id){
                return{
                    ...todo,
                    complete: !todo.complete
                };
            }
            else{
                return todo;
            }
        })
    })
}
onDelete=(id)=>{
    this.setState(state=>({
        todos: state.todos.filter(todo => todo.id !== id)
    }));
}
    render(){
        var completeTodo=this.state.todos.filter(todo=>todo.complete);
        var unfinishTodo=this.state.todos.filter(todo=>!todo.complete);
        return(
        <div className='todo-container'>
            
            <div className='todo-plan'>
                <h1>What `s the plan for Today?</h1>
                <ToDo onSubmit={this.addToDo}/>
                {unfinishTodo.map(todo=>{
                    return(
                        <ToDoDetail 
                        key={todo.id}
                        todo={todo} 
                        onComplete={()=>this.onComplete(todo.id)}
                        onDelete={()=>this.onDelete(todo.id)}
                        onSubmit={this.updateToDo}
                        /> 
                    )
                    
                })}
            </div>
            <div className='todo-finish'>
                <h1>Today `s Accomplishment</h1>
                {completeTodo.map(todo=>{
                    return(
                        <ToDoComplete 
                        key={todo.id}
                        todo={todo} 
                        onDelete={()=>this.onDelete(todo.id)}
                        /> 
                    )
                    
                })}
            </div>
        </div>
        )
    }
}
export default ToDoList;