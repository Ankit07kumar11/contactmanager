import './App.css';
import Contact from './Components/Contact';
import ContactAdd from './Components/ContactAdd';
import Header from './Components/Header';
import { useState,useEffect } from 'react';

function App() {
  let initContact;
  if(localStorage.getItem("contacts")===null){
    initContact=[];
  }
  else{
    initContact=JSON.parse(localStorage.getItem("contacts"));
  }

const addContact=(name,email)=>{
  let id;
  if(contacts.length===0){
    id=1;
  }
  else{
    id=contacts[contacts.length-1].id+1;
  }
  const newContacts={
    id:id,
    "name":name,
    "email":email,
  }
  SetContact([...contacts,newContacts])
  console.log(newContacts);
  console.log(contacts);

}
const onDelete=(contact)=>{
  console.log("I am on delete of contact",contact);
  SetContact(contacts.filter((e)=>{
    return e!==contact;
  }))
  localStorage.getItem("contacts")
  localStorage.setItem("contacts",JSON.stringify(contacts))
}

const [contacts,SetContact]=useState(initContact);
useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);

  return (
    <>
       <Header/>
       <ContactAdd addContact={addContact}/>
       <Contact contacts={contacts} onDelete={onDelete}/>
   
    </>
  );
}

export default App;
