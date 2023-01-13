import React,{useEffect} from 'react';

const AllCycle = () => {

    useEffect(() => {
        document.title= `${new Date()}`
        console.log('Componente creado')

        const intervalID = setInterval(() => {
        
            console.log('actualizacion del componente')
        },1000)

        return () => {
            console.log('Componente va a desaparecer');
            document.title= "Tiempo detenido"
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycle;
