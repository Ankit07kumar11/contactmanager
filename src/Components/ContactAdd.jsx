import React from "react";
import Form from "react-bootstrap/Form"
import { useState } from "react";

const ContactAdd = ({addContact}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 

  const submit=(e)=>{
    e.preventDefault();

    if(!name ||!email){
      alert("Enter Name or Email")
    }
    else{
      addContact(name,email)
      setName("")
      setEmail("")

    }
  }
    
  return (
    <>
    <div className="grid place-items-center">
      <h2 className="text-3xl font-bold my-3">Add Contacts</h2>

      <div className="">
        <h5 className="font-bold">Name</h5>
        <input className="border-solid border-2 m-1 p-2" type="text" value={name} onChange={(e)=>(setName(e.target.value))} placeholder="Name" />
      </div>

      <div className="my-3">
        <h5 className="font-bold">Email</h5>
        <input className="border-solid border-2 m-1 p-2 " type="email" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="Email" />
      </div>

      <Form onSubmit={submit}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 " onSubmit={submit}>Add</button>
      </Form>
    </div>
    <hr />



    </>
  );
};

export default ContactAdd;
