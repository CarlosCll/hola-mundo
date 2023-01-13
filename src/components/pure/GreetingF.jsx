import React,{useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    //iNTRODUCCION A USESATE
    //const [variable,metodo para actualizarlo] = useState(valor inicial);

    const [age, setage] = useState(29);
    const birthday = () => {
        //actualizar el state
        setage(age+1);
    }
    
    return (
        <div>
            <h1>
                HOLA! {props.name} desde componete funcional
            </h1>
            <h2>
                Edad: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir Años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
