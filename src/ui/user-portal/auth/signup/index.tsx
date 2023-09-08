import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../../core/services/firebase';
import { Link } from 'react-router-dom';

const UserSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setmessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);
    const [isBusy, setIsBusy] = useState(false);
    const handleRegister = async () => {
        try {
            setIsBusy(true);
            setmessage('')
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                const userData = {
                    role: 'user',
                    email: user.email
                };

                setDoc(userRef, userData)
                    .then(() => {
                    })
                    .catch((error) => {
                    });
                setIsSuccess(true);
                setmessage('Success!, You can now log in.');
                setIsBusy(false);

            } else {
                setmessage('An error occured');
                setIsSuccess(false);
                setIsBusy(false);

            }
        } catch (error) {
            setmessage(`${error}`);
            setIsSuccess(false);
            setIsBusy(false);

        }
    };

    return (
        <div className='auth-layout'>
            <div className='card'>
                <h2>Sign Up</h2>
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
                <small>Password must be 6 characters</small>

                <div>
                    <button disabled={isBusy} onClick={handleRegister}>Register</button>

                    <div>
                        <small>Already have an account? <span className=''><Link className='text-primary fw-bold' to='/login'>login</Link></span> </small>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default UserSignUp