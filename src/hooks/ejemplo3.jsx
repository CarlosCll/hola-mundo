/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React,{ useContext,useState } from 'react';

/**
 * 
 * @returns Componetne 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const miContexto = React.createContext(null)


const Componente1 = () => {
    //Inicializamos un estado vacio que va a rellenarse con los
    //datos del contexto del padre

    const state = useContext(miContexto)
    
    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '123456',
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sessionData, setsessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setsessionData({
            token:'JWT1234567',
            sesion: sessionData.sesion + 1
        })

    }

    return (
        <miContexto.Provider value={sessionData}>
        {/* Todo lo que este aqui adentro puede leer los datos de sessionData */}
        {/* Ademas, si se actualiza los componentes de aqui, tambien lo actualizan */}
        <h1>*** Ejemplo de  useState() y useContext() ***</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    )
}
