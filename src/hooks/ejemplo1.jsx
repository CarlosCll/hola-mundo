/**
 *  Ejemplo de uso del Hook useSate
 * 
 * Creat un componente de tipo funcion y acceder a su estado
 * privado a traves de un hokk y, adenas, poder modificarlos
 */

import React,{ useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Varlos inicial para una persona
    const personaIncial={
        nombre :'Martin',
        email : 'martin@gmail.com'
    }

    /**
     * Queremos que el valorinicial y persona inicial sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] =useState(valorInicial)
     */

    const [contador, setcontador] = useState(valorInicial);
    const [persona, setpersona] = useState(personaIncial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setcontador(contador+1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actaulizarPersona(){
        setpersona(
            {
                nombre: 'Pepe',
                email:'pepe@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>***Ejemplo de useSate() ***</h1>
            <h2>
                Contador: {contador}
            </h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email:{persona.email}</h3>
            {/* Bloque de botones para actualiar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actaulizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
