import styles from '../styles/addContact.module.css'
import { notifyError,notifySuccess } from '..';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import {useNavigate} from 'react-router-dom';

const Add=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const navigate=useNavigate();

    const contacts=useSelector((state)=>state)
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{

        e.preventDefault();
        const checkContactEmailExists=contacts.filter(contact=>contact.email===email);
        const checkContactPhoneExists=contacts.filter(contact=>contact.phone===phone);

        if(checkContactEmailExists.length>0 || checkContactPhoneExists.length>0){
            return notifyError('contact already exists');
        }

        if(!email || !name || !phone){
            return notifyError('Please fill in all fields!!')
        }

        const data = {
            id: contacts.length > 0 ? contacts.length + 1 : 0,
            email,
            name,
            phone,
        };
        dispatch({
            type:"ADD_CONTACT",
            payload:data
        })
        notifySuccess("contact added")
        navigate("/");
    }


    return(
        <div className={styles.addContact}>
           <h1>Add Contact</h1>
        
        <form className={styles.addform} onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="number" placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            <input type='submit' className={styles.addBtn} value="Add Contact"></input>
        </form>

        
        </div>
           
        
    )
}


export default Add;