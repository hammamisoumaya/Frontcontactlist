import React from 'react'
import "./CardContact.css"
import { useNavigate } from 'react-router';
import {deleteContact} from '../../api/contact'
const CardContact = ({users,getContact}) => {
  console.log(users,'users')
  const navigate=useNavigate()
  const navupdate=()=>{
navigate(`/update/${users._id}`)
  }

  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Avatar" />
      <div className="container">
        <h4><b>{users.name}</b></h4>
        <p>{users.email}</p>
        <p>{users.age}</p>
        <p>{users.adresse}</p>
        <a href="#"><button onClick={()=>navupdate()}>Update</button></a>
        <a href="#"><button  onClick={async()=>{await deleteContact(users._id);getContact()}} >Delete</button></a>
      </div>
    </div>
  );
}

export default CardContact;