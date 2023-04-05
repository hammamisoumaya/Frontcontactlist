import React, {useState} from 'react';
import './AddContact.css';
import {PostContact} from '../../api/contact'
import { useNavigate } from 'react-router';

const AddContact = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState(0)
  const navigate = useNavigate()
  const handelAdd=async(values)=>{
   await PostContact(values)
   navigate('/list')
  }
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" placeholder='Name' required value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">age :</label>
        <input type="text" id="email" name="age" placeholder="age" required  value={age} 
      onChange={(e)=>setAge(e.target.value)}   />
      </div>
      <div className="form-group">
        <label htmlFor="message">email :</label>
        <textarea id="message" name="message" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}></textarea>
      </div>
      <button type="submit" onClick={()=>handelAdd((name,email,age))}>Envoyer</button>
    </form>
  );
}

export default AddContact;