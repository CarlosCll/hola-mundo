import React,{ useState, useEffect } from 'react';
import { contacto } from '../../models/contacts.class'
import { SEXO } from '../../models/sexoconst';
import Contacs from '../pure/contacs';
import RegisterContact from '../pure/forms/registerContact';


const ContacsComponent = () => {

    const contactIncial1 = new contacto('Carlos','carlos@gmail.com','98765321584',SEXO.MASCULINO,false)
    const contactIncial2 = new contacto('Martin','Martin@gmail.com','98765321584',SEXO.MASCULINO,true)
    const contactIncial3 = new contacto('Victor','Victor@gmail.com','98765321584',SEXO.MASCULINO,false)
    const contactIncial4 = new contacto('Jhonny','Jhonny@gmail.com','98765321584',SEXO.MASCULINO,true)
    const contactIncial5 = new contacto('Gabriela','Gabriela@gmail.com','98765321584',SEXO.FEMENINO,true)

    const [contact, setcontact] = useState([contactIncial1,contactIncial2,contactIncial3,contactIncial4,contactIncial5]);

    useEffect(() => {
        
        return () => {
        };
    }, [contact]);

    function estadoDisponibilidad(contactoInfo){
        const index = contact.indexOf(contactoInfo) // obtendo el indice donde pertenece
        const tempContact = [...contact]    
        tempContact[index].estado = ! tempContact[index].estado //modifico el estado
        setcontact(tempContact)
    }

    function delteContact(contactoInfo){
        const index = contact.indexOf(contactoInfo) // obtendo el indice donde pertenece
        const tempContact = [...contact]    
        tempContact.splice(index,1)
        setcontact(tempContact)
    }

    function addContact(add){
        const tempContact = [...contact]
        tempContact.push(add)
        setcontact(tempContact)
    }

    return (
        <div className='d-flex'>
            <div className='d-flex flex-wrap ' style={{ width:'68%', height:'100vh', background:'black', overflow:'auto' }}>
            { contact.map((contacto,index)=>{
                return (
                    <Contacs
                    key={index}
                    contacts={contacto}
                    disp={estadoDisponibilidad}
                    deletCont={delteContact}
                    ></Contacs>
                )
            })
            }
            </div>
            <div className='d-flex justify-content-center ' style={{background:'tomato', width:'32%', height:'100vh',alignItems:'center'}}>
                <div className='d-flex justify-content-center ' style={{background:'#344057', width:'500px', height:'500px',alignItems:'center', borderRadius:'20px'}}>
                    <RegisterContact
                    add={addContact}
                    ></RegisterContact>
                </div>
            </div>
        </div>

    );
}

export default ContacsComponent;
