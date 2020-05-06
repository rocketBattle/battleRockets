import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './column.jsx';

const initialData = {
    // id is used to look up the object
    tasks: {
        "task-1": { id: "task-1", content: "Take out garbage" },
        "task-2": { id: "task-2", content: "Take out the dishes" },
        'task-3': {id: 'task-3', content: 'Take out garbage'},
        'task-4': {id: 'task-4', content: 'Take out garbage'}
    },

    //there can be more than 1 column
    columns: {
        'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },

    // Allow reordering of the columns
    columnOrder: ['column-1'],
};

// columns object used to store columns in the system
// each column has taskIds array > you know that task-1 is currently in column 1 & you maintain order

class DragAndDrop extends Component {
    constructor(){
        super();
        this.state = initialData
        }
    

    render(){
        return this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks}></Column>;

        });
    }
}

export default DragAndDrop;

