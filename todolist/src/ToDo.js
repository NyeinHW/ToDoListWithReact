import React from "react";
import { nanoid } from 'nanoid';
import './App.css';

class ToDo extends React.Component{
    state={
        text:""
    };
    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit({
            id:nanoid(),
            text:this.state.text,
            complete:false
        });
        this.setState({
            text:""
        });
        //submit
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className='todo-form'>
                    <input placeholder="todo" className='todo-input'
                    value={this.state.text}
                    name="text"
                    onChange={this.handleChange}
                    />
                    <input type="submit" name="" value="Add" className='todo-button'/>
                </form>
            </div>
        )
    }
}
export default ToDo;