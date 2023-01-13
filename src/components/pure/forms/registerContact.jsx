import React,{ useRef } from 'react';
import PropTypes from 'prop-types';
import { SEXO } from '../../../models/sexoconst';

import '../../../style/task.scss'
import { contacto } from '../../../models/contacts.class';

const RegisterContact = ({add}) => {

    const nameRef = useRef('');
    const sexoRef = useRef(SEXO.MASCULINO);
    const emailRef = useRef('')
    const telefRef = useRef('')

    function addContact(e){
        e.preventDefault(); // para no recargar la pagina

        const newContact = new contacto(
            nameRef.current.value,
            emailRef.current.value,
            telefRef.current.value,
            sexoRef.current.value,
            false
        )
        add(newContact)
    }   

    return (
        <form onSubmit={addContact}>
            <h5 style={{color:'white'}}>Agregando Contacto</h5>
            <div className='mb-3 mt-4' style={{ textAlign:'initial' }}>
                <label className='form-label'>Nombre</label>
                <input  ref={nameRef} className='form-control' id='id_nombre' placeholder='Nombre' autoFocus required/>
            </div>
            <div className='mb-3' style={{ textAlign:'initial' }}>
                <label className='form-label' >Sexo: </label>
                <select ref={sexoRef}  className='form-select' defaultValue={SEXO.MASCULINO} id='id_sexo' required>
                    <option value={SEXO.MASCULINO}>Masculino</option>
                    <option value={SEXO.FEMENINO}>Femenino</option>
                </select>
            </div>
            <div className='mb-3' style={{ textAlign:'initial' }}>
                <label className='form-label'>Email:</label>
                <input ref={emailRef} className='form-control' id='id_email' placeholder='email' required/>
            </div>
            <div className='mb-3' style={{ textAlign:'initial' }}>
                <label className='form-label'>Telefono:</label>
                <input ref={telefRef} className='form-control' id='id_telef' placeholder='Telefono' required/>
            </div>

            <button className="btn btn-primary" type='submit'>
                Agregar Contacto
                <span style={{marginLef:'30px'}}><i className="bi bi-plus-circle"></i></span>
            </button>
        </form>
    );
};


RegisterContact.propTypes = {

};


export default RegisterContact;
