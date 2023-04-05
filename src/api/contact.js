import axios from 'axios'

export const fetchContacts = async()=>{
    const {data} = await axios.get('http://localhost:5005/contact/getuser')
    return data 
}

export const PostContact =async (values)=>{
    const addingContact = await axios.post('http://localhost:5005/contact/',{...values})
}

export const updateContact = async(id,values)=>{
    const updated = await axios.put(`http://localhost:5005/contact/updateuser/${id}`,values)
}

export const  deleteContact =async(id)=>{
    const deleteduser = await axios.delete(`http://localhost:5005/contact/deleteuser/${id}`)
}

export const  getUniqueUser=async(id,values)=>{
const {data}= await axios.get(`http://localhost:5005/contact/getuser/${id}`,values)
return data 
}