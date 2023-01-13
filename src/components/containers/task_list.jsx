import React,{ useState,useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//IMPORTAR ESTILOS
import '../../style/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskList = () => {

    const defaultTask1 = new Task('Example1','Default description1',true,LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2','Default description2',false,LEVELS.URGENTE);
    const defaultTask3 = new Task('Example3','Default description3',true,LEVELS.BLOCKUNG);


    //Estado del componente
    const [tasks, settasks] = useState([defaultTask1,defaultTask2,defaultTask3]);

    const [loading, setloading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Modificacion de estado de las tasks');
        setloading(false);
        return () => {
            console.log('Tasklist component is going to unmount...');
        };
    }, [tasks]);

    
    function completeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = ! tempTasks[index].completed;
        
        //We update the state of the component with the new list of tasks and it will update whe
        //Iteration of the tasks in order to show the task updated
        settasks(tempTasks);
    }
    
    function deleteTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        settasks(tempTasks);
    }

    function addTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        settasks(tempTasks);
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header (title) */}
                    <div className='card-head p-3'>
                        <h5>
                        Tu tarea:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* TODO : Iterar sobre una lista de tareas */}
                                { tasks.map((task, index) =>{
                                    return (
                                        <TaskComponent 
                                        key={index} 
                                        task={task}
                                        complete={completeTask}
                                        deleteT={deleteTask}
                                        >
                                        </TaskComponent>
                                    )
                                }) }

                            </tbody>
                        </table>
                    </div>
                    <TaskForm 
                    add={addTask}
                    ></TaskForm>
                </div>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};




export default TaskList;
