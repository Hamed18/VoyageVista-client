import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
	const [loading,setLoading] = useState(true);  // loader

	const [user,setUser] = useState(null);
	const createUser = (email,password) => {
		setLoading(true);
	    return createUserWithEmailAndPassword(auth,email,password);
	}

	const signIn = (email,password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth,email,password);  // docs: password authentication
	 }

	const logOut = () => {   
		setLoading(true);
		return signOut(auth);  // doc: password authentication
	}

	useEffect( () =>{   // onAuthStateChanged means the state whether user logged in or logged out
		const unSubscribe = onAuthStateChanged(auth,currentuser =>{   // firebase doc: manage user
			console.log('user in the auth state changed',currentuser);  
			setUser(currentuser);
			setLoading(false);
		});
		return ()=>{
			unSubscribe();
		}
	},[])


	const authInfo = {
		user,
		createUser,
		logOut,
		signIn
	}
	return (
		<AuthContext.Provider value={authInfo}>
              {children}
		</AuthContext.Provider>
	);
};

export default AuthProviders;