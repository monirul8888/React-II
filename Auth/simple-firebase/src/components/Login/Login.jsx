import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();


const Login = () => {

    const [user, setUser] = useState(null);

    const handleGoogleSignIn = () =>{
        console.log("Google Button Clicked")

        signInWithPopup(auth, googleProvider).then(result=>{
            console.log(result);
            setUser(result.user)
        })
        .catch(error=>{
            console.log(error)
        })


    }

    const handleSignOut = () =>{
        signOut(auth).then(()=>{
            console.log("Sign Out")
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    return (
        <div>
            <h1>Please Log In</h1>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            <button onClick={handleSignOut}>Sign Out</button>

            {user && 
            <div>
                <h3>{user.displayName}</h3>
                <h4>{user.email}</h4>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;