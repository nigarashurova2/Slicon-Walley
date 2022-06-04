import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Contact from './Contact';

const Contacts = () => {
    const [contacts , setContacts] = useState([]);


    useEffect(() => {
       
           getContacts();
          
        
    }, [])

   const getContacts = async () =>{
       try {
           const res = await axios.get('https://randomuser.me/api/?results=12');
           setContacts(res.data.results);
     
           
       } catch (err) {
           alert(err.message);
       }
   }

  return (
    <div className='contacts'>
        <div className="container">
        <div className="row">
           { 
            contacts.map((contact) => {
                return   <div className='col-xl-4 text-center' key={contact.login.uuid}>
                    <Contact contact= {contact}></Contact>
             </div>;
            })}
        </div>
        </div>
       
    </div>
  )
}

export default Contacts