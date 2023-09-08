import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import './style.scss'
import Avatar from '../../../assets/avatars/avatar3.png';
import { db } from '../../../core/services/firebase';

const AdminDashboard = () => {
    const [users, setUsers] = useState<any>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch the list of users when the component mounts
      const fetchUsers = async () => {
        try {
          const usersCollection = collection(db, 'users');
          const querySnapshot = await getDocs(usersCollection);
  
          const usersData: ((prevState: any[]) => any[]) | { id: string; }[] = [];
          querySnapshot.forEach((doc) => {
            usersData.push({ id: doc.id, ...doc.data() });
          });
  
          setUsers(usersData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching users:', error);
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='admin-dashboard'>
       
        <div className='card'>
        <h4>List of Users</h4>
          {users.map((user:any, index: any) => (
            <UsersWidget key={index} email={user.email} role={user.role} uid={user.id}/>
          ))}
        </div>
      </div>
    );
  }


const UsersWidget = (props: any) => {
    const { email, role, uid } = props;
    const [message, setmessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);
    const [isBusy, setIsBusy] = useState(false);
    const setasHr = async () => {
        console.log(uid)
        try {
            setIsBusy(true);
            setmessage('')
          const recordRef = doc(db, 'users', uid);
          await updateDoc(recordRef, {
            role: 'hr',
            email: email
          });
          setIsSuccess(true);
          setmessage('Record updated successfully.');
          setIsBusy(false);
        } catch (error) {
            setmessage(`${error}`);
            setIsSuccess(false);
            setIsBusy(false);
        }
      }
    return (
       <>
        <div className='userwidget-tile'>
            <div className="userwidget-details">
                <img src={Avatar} />
                <div>
                    <p className='fw-bold'>{email}</p>
                    <small className='light-text'>{role}</small>
                </div>

            </div>
            <button disabled={isBusy || role === 'hr' || role === 'admin'}  onClick={setasHr}>Set as HR</button>
        </div>
            <small className={isSuccess ? 'text-success' : 'text-danger'}>{message}</small></>

    )
}
export default AdminDashboard