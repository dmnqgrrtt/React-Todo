import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <form>
                <input type='text' name='task' placeholder='...todo' />
            </form>
        );
    }
}

export default TodoForm;