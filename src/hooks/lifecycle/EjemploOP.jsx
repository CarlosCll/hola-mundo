import React,{ useState, useEffect } from 'react';

const EjemploOP = () => {

    const datoInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San José'
    }
    
    const [datoPersona, setdatoPersona] = useState(datoInicial);

    useEffect(() => {
        function incrementoAge(){
            setdatoPersona(datoPersona.edad+1)
        }
    
        const interval = setInterval(() => {
            incrementoAge()
        },1000)
        return () => {
            // incrementoAge()
            // clearInterval(interval)
        };
    });
    return (
        <div>
            {/* <h2>
                Hora Actual:
                {datoPersona.fecha.toLocaleTimeString()}
            </h2> */}
            <h3>    
                {datoPersona.nombre} {datoPersona.apellidos}
            </h3>
            <h1>
                Edad: {datoPersona.edad}
            </h1>
        </div>
    );
}

export default EjemploOP;
