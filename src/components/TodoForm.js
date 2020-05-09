import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }

    }

    onChange = e => {
        e.preventDefault();
        this.setState({
            newTodo: e.target.value
        })
    }

    submit = e => {
        e.preventDefault();
        if(this.state.newTodo) {
            this.props.addNewTodo(this.state.newTodo)
            this.setState({
                newTodo: ''
            })
        }
        
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.submit}>
                    <input type='text' name='task' placeholder='Enter Task Here...' value={this.state.newTodo} onChange={this.onChange}/>
                    <div className='buttons'>
                        <button type='submit'>Add Todo</button>
                        <button  onClick={this.props.clearCompleted}>Clear Completed</button>
                    </div>
                </form>
                
            </div>
            
            
        );
    }
}

export default TodoForm;