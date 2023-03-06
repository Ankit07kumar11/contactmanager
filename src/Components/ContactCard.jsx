import React from 'react'
import { IoIosPerson} from "react-icons/io"
import { AiFillDelete} from "react-icons/ai"
import Button from "react-bootstrap/Button"

const ContactCard = (props) => {
  return (
    <>
        <div className='item flex sm:space-x-40 lg:space-x-40 py-3 px-5'>
        
        <span className='text-5xl '><IoIosPerson/></span>
        <div className='content flex space-x-11'>
            <div className='header text-2xl font-semibold'>{props.contact.name}</div>
            <div className='text-xl'>{props.contact.email}</div>
        </div>

        <Button className='text-3xl'onClick={()=>{props.onDelete(props.contact)}} style={{color:"red"}}><AiFillDelete/></Button>
    </div>
    <hr />
    </>
  )
}

export default ContactCard
