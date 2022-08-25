import styles from '../styles/addContact.module.css'
import { useState,useEffect, } from 'react';
import {Link,useParams,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { notifySuccess } from '..';


const Edit=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const contacts=useSelector((state)=>state)

    const currentContact = contacts.find(
        (contact) => contact.id === parseInt(id)
    );
    
    useEffect(() => {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setPhone(currentContact.phone);
    }, [currentContact]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = {
            id: currentContact.id,
            email,
            name,
            phone,
        };
        dispatch({
            type:"UPDATE_CONTACT",
            payload:data
        })
        notifySuccess('edit successfull');
        navigate("/")
    }

    return(
        <div className={styles.addContact}>
           <h1>Edit Contact {id}</h1>
        
        <form className={styles.addform} onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="text" placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            <div className={styles.editbtns}>
                <input type='submit' className={styles.addBtn} value="Update Contact"></input>
                <Link to="/"><button className={styles.cancelBtn}>Cancel</button></Link>
            </div>
            
        </form>
        

        </div>
           
        
    )
}


export default Edit;