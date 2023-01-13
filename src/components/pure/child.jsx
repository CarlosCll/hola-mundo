import React,{ useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef= useRef('')
    const nameRef= useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in Input ${text}`)
    }   

    function pressButtonParams(text){
        alert(`text: ${text}`)
    }

    function submitName(e){
        e.preventDefault(); //evitar recargar la pagina
        update(nameRef.current.value)
    }


    return (
        <div style={{background:'cyan', padding:'30px'}}>
            <p onMouseOver={()=> console.log('On Mouse Over')}>Hello, {name}</p>
            <button onClick={()=>console.log('Boton 1 pulsado') }>Button 1</button>
            <button onClick={pressButton}>Button 2</button>
            <button onClick={()=>pressButtonParams('hello')}>Button 3</button>
            <input 
                placeholder='Send a text ot your father' 
                onFocus={()=>console.log('Input Focus')}
                onChange={(e) =>console.log('Input Changed:',e.target.value)}
                onCopy={()=>console.log('Copied text from Input')}
                ref = {messageRef}
            />
            <button onClick={()=>send(messageRef.current.value)}>Send Message</button>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name' />
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
