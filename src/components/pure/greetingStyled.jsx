import React, { useState } from 'react';

//Definiendo stilos en constantes;
//? Estilo para usuario logueado
const loggedStyle ={
    color:'burlywood'
};

//? Estilo para usuario no logueado
const unloggedStyle= {
    color:'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    //Generamos un estado al componente
    // y a si controlar si el usuario esta o no logueado

    const [logged, setlogged] = useState(false);

    const greetingUser = ()=>(<p>Bienvenido</p>);
    const pleaseLogin = ()=>(<p>No estas logueado</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>)}
            {logged ? greetingUser() : pleaseLogin()}
            <button onClick={()=>{
                console.log('Boton pulsado')
                setlogged(!logged);
            }} >
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
