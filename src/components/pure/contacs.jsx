import React from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/contacts.class';
import { SEXO } from '../../models/sexoconst';
import hombre from '../../hombre.jpg';
import mujer from '../../mujer.jpg';

const Contacs = ({contacts, disp, deletCont}) => {


    function contactDisponible(){
        if (!contacts.estado) {
            return <span onClick={()=>disp(contacts)} className="badge text-bg-danger task-action" style={{borderRadius:'5px 20px 0px 5px', fontSize:'15px' }}>Desconectado</span>
        } else {
            return <span onClick={()=>disp(contacts)} className="badge text-bg-success task-action" style={{borderRadius:'5px 20px 0px 5px', fontSize:'15px'}}>Disponible</span>
        }
    }

    function identidadImage(){
        switch (contacts.sexo) {
            case SEXO.MASCULINO:
                return(
                    <img src={hombre}  alt="hombre" style={{borderRadius:'100%', width:'150px'}}/> 
                );

            case SEXO.FEMENINO:
                return(
                    <img src={mujer}  alt="mujer" style={{borderRadius:'100%', width:'150px'}}/> 
                );

            default:
                break;
        }
    }

    return (
        <div className="card m-3" style={{height:'349px', width:'390px', borderRadius :'20px' }}>
            <div className='card-img-top col-12'>
                <div className='col-12 d-flex' >
                    <div className='col-6 d-flex' style={{justifyContent:'star'}}>
                        <i onClick={()=>deletCont(contacts)} className='bi bi-trash task-action mr-5' style={{color:'tomato',fontSize:'20px', paddingLeft:'10px'}}></i>
                    </div>
                    <div className='col-6 d-flex' style={{ justifyContent:'end',height:'25px' }}>
                        {/* <span class="badge text-bg-success" >Disponible</span> */}
                        {contactDisponible()}
                    </div>
                </div>
                
                <div className='d-flex mt-4' style={{height:'60px', width:'auto', alignItems:'center', justifyContent:'center'}}>
                    {/* <i className=' bi bi-person-circle' ></i> */}
                    {identidadImage()}
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title pt-3">{contacts.nombre}</h5>
                <div className="card-text " style={{ textAlign:'initial', paddingTop:'7px' }}>
                    <h3>Nombre: {contacts.nombre}</h3>
                    <h3>Sexo: {contacts.sexo}</h3>
                    <h3>Email: {contacts.email}</h3>
                    <h3>Telefono: {contacts.telefono}</h3>
                </div>
            </div>
        </div>
    );
};


Contacs.propTypes = {
    contacts:PropTypes.instanceOf(contacto).isRequired
};


export default Contacs;
