import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdDone,MdBorderColor } from "react-icons/md";
import {FiEdit} from "react-icons/fi";
import {FaSave} from "react-icons/fa";

import './App.css';

class ToDoDetail extends React.Component{
     constructor(props){
        super(props);
     }
      state={
        text:this.props.todo.text,
        change:false
    };
    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value,
            change:true
        });
    }
    handleSubmit=(event)=>{
            event.preventDefault();
            this.props.onSubmit({
                id:this.props.todo.id,
                text:this.state.text,
                complete:false
            });
            //submit
        }
    render(){
        let ischangeValue=this.state.change;
        var button;
            if (ischangeValue) {
                button =<button type="submit" className='todo-normal-button'><FaSave/></button>;
                } else {
                button =<button type="submit" className='todo-normal-button'><FiEdit/></button>;
                }
        return(
            <div className='todo-row'>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="text" onChange={this.handleChange} value={this.state.text} className='todo-input-row' />
                {button}
                <button onClick={this.props.onComplete} className='todo-normal-button'><MdDone/></button>
                <button onClick={this.props.onDelete} className='todo-button'><BsFillTrashFill /></button>
                </form>
            </div>
        )
    }
}
export default ToDoDetail;
/*export default (props)=>(
<div>
<input type="text" value={props.todo.text} 
    onChange={(event)=>{
        props.changeUpdate(event.target.value,{props.todo.id})
}} style={{ cursor:props.todo.complete?"not-allowed":""}}/>
<button onClick={props.onComplete} style={{ color:props.todo.complete?"green":"red"}}>finish</button>
<button onClick={props.onDelete}>X</button>
<button style={{display:props.todo.complete?"none":""}} >Edit</button>

</div>);*/