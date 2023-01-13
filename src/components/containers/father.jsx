import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {
    
    const [name, setname] = useState('Martin');

    function showMessage(text){
        alert(`Message received: ${text}`)
    }

    function updateName(newName){
        setname(newName)
    }
    return (
        <div style={{background:'tomato', padding:'10px' }}>
            <p onMouseOver={()=> console.log('On Mouse Over Father')}>Father Component</p>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
