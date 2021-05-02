import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdDone,MdBorderColor } from "react-icons/md";
import {FiEdit} from "react-icons/fi";
import './App.css';

class ToDoComplete extends React.Component{
     constructor(props){
        super(props);
     }
    render(){
        return(
            <div className='todo-complete-row' style={{ display:this.props.todo.text == ''?"none":""}}>
                <div className='todo-complete-text' >{this.props.todo.text}</div>
                <button onClick={this.props.onDelete} className='todo-complete-button'><BsFillTrashFill /></button>
            </div>
        )
    }
}
export default ToDoComplete;
