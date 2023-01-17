import React from 'react';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Kalbert', 'Conetreras', 'Kalbert.contreras@gmail.com', false);

    const changeState = (id) => {
        console.log('TODO: Cambiar estad de una tarea')
    }

    return (
        <div>
            <div>
                <h1> Your Task: </h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
