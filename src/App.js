import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  addNewTodo = (task) => {
    this.setState({
      tasks: [
        ...this.state.tasks, { task: task, completed: false, id: Date.now()}
      ]
    })
  };

  toggleCompleted = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(taskId === task.id) {
          return {...task, completed: !task.completed};
        }
        return task;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    })
  }

  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo} clearCompleted={this.clearCompleted}/>
        <TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
