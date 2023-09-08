import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../../core/services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setmessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);
    const [isBusy, setIsBusy] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async () => {
        setIsBusy(true);
        setmessage('')
        try {
            await signInWithEmailAndPassword(auth, email, password);
            if (auth.currentUser) {
                const userRef = doc(db, 'users', auth.currentUser.uid);
                const userSnapshot = await getDoc(userRef);

                if (userSnapshot.exists()) {
                    const userRole = userSnapshot.data().role;
                    if (userRole === 'hr') {
                        navigate('/user-dashboard');
                    } else if(userRole === 'admin'){
                        navigate('/admin-dashboard');
                    } else {
                        setmessage('Unauthorized access: You are not an HR of ADMIN');
                        setIsSuccess(false);
                        setIsBusy(false);
                    }
                } else {
                    setmessage('User data not found.');
                    setIsSuccess(false);
                    setIsBusy(false);
                }
            } else {
                setmessage('User is not authenticated.');
                setIsSuccess(false);
                setIsBusy(false);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setmessage(`${error}`);
            setIsSuccess(false);
            setIsBusy(false);
        }
    };
    return (
        <div className='auth-layout'>
            <div className='card'>
                <h2>Login</h2>
                <small className={isSuccess ? 'text-success' : 'text-danger'}>{message}</small>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>Login</button>

                <p>Login with the account you created or login as admin with the credentials below;</p>
                <p>Username: admin@admin.com</p>
                <p>password: 123456</p>

                {/*  */}
            </div>
        </div>
    );
}
export default UserLogin