import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//IMPORTAMOS LA HOJA DE ESTILOS DE TASK.SCSS
import '../../style/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, complete, deleteT }) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Task: ${task.name} is foing to`)
        };
    }, [task]);

    /**
     * Funcion that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
                
            case LEVELS.URGENTE:
                return (
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)

            case LEVELS.BLOCKUNG:
                return (
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)

            default:
                break;
        }

    }

    function taskIconCompleted(){
        if (task.completed) {
            return <i onClick={()=>complete(task) } className='bi bi-toggle-on ms-2 task-action' style={{color:'green',fontWeight:'bold'}}></i>
        }else {
            return <i onClick={()=> complete(task) } className='bi bi-toggle-off ms-2 task-action' style={{color:'grey',fontWeight:'bold'}}></i>
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{ task.descripcion }</span>
            </td>
            <td className='align-middle'>
                {/*TODO: Sustituir por un badge  */}
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskIconCompleted()}
                <i onClick={()=>deleteT(task)} className='bi bi-trash task-action' style={{color:'tomato',fontSize:'20px'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task).isRequired,
    complete:PropTypes.func.isRequired,
    deleteT:PropTypes.func.isRequired
};


export default TaskComponent;
