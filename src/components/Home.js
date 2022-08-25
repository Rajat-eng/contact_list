import styles from '../styles/Home.module.css';
import {Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux/es/exports';


export const Home=()=>{
    const contacts=useSelector((state)=>state)
    const dispatch=useDispatch();

    const deleteContact=(id)=>{
      dispatch({
        type:"DELETE_CONTACT",
        payload:id
      })
    }
    
    return(
    <div className={styles.table_container}>
        <table>
        <thead>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </thead>
        <tbody>
        {contacts.map((contact, key) => {
          return (
            <tr key={key}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button className={styles.delBtn} onClick={()=>deleteContact(contact.id)} >Delete</button>
                <Link to={`/edit/${contact.id}`}><button className={styles.editBtn}>Edit</button></Link>
              </td>
            </tr>
          )
        })}
        </tbody>
        </table>
        <div className={styles.addBtn_container}>
         <Link to="/add"><button className={styles.addBtn} >Add Contact</button></Link> 
        </div>
        
        </div>  
        
    )
}

export default Home;