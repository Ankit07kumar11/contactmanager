import React from 'react'
import ContactCard from './ContactCard';
import { useState } from 'react';

const Contact = (props) => {
  const [search,setSearch]=useState("");
  return (
    <>
        <div className="flex mt-2">
    <h3 className="text-xl font-bold m-2">Contact List :-</h3>
    <input type="text" className="mx-10 border-solid border-2 bg-slate-200 " value={search} placeholder="search...." onChange={(e)=>{setSearch(e.target.value)}} />
    <hr />
    
    </div>
    
    <div className='container'>
        {
        props.contacts.length?
        props.contacts.filter((contact)=>{
          if(search===""){return contact}
          else if(contact.name.toLowerCase().includes(search.toLowerCase())){return contact}
        }).map((contact)=>{
            return(
                <>
                <ContactCard contact={contact} key={contact.id} onDelete={props.onDelete}/>
                </>
            )
        }):"No Contacts to Display"
        }
    
      
    </div>
    </>
  )
}

export default Contact
