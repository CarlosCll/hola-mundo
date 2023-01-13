/**
 * Ejemplo de use de:
 * - useSate()
 * - useRef()
 * - useEffect()
 */
import React,{ useState,useEffect,useRef } from 'react';

const Ejemplo2 = () => {

    //Vamos a crear 2 contadores
    //cada uno en un estado diferente
    const [contador1, setcontador1] = useState(0)
    const [contador2, setcontador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();
    function incrementar1(){
        setcontador1(contador1 + 1)
    }

    function incrementar2(){
        setcontador2(contador2 + 1)
    }

    /**
     * Trabajando con UseEffect
     */

    /**
     * ? Caso1: Ejecutar siempre un snoppit de codigo
     * Cada vez que haga un cambio en el esatod del componente
     * se ejecuta aquello que este dentro del useeffect()
     */
    
    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostarando Referencia a elemento del DOM:');
    //     console.log(miRef);
    //     });

    /**
     * ? Caso2: EjECUTAR SOLO CUANDO CAMBIE CONTADOR1
     * cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador2, no habra ejecucion
     */
    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostarando Referencia a elemento del DOM:');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso3: EJECUTAR SOLO CUANDO CAMBIE CONTADOR1 O CONTADOR2
     * cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
     * cada vez que haya un cambio en contador2, se ejecuta lo que diga el useEffect()
     */
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
        console.log('Mostarando Referencia a elemento del DOM:');
        console.log(miRef);
    }, [contador1,contador2]);


    return (
        <div>
            <h1>***Ejemplo de useSate(), useRef(), useEffect() ***</h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar contador */}
            <div>
                <button onClick={incrementar1}>Incrementar contador1</button>
                <button onClick={incrementar2}>Incrementar contador2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
