import { createContext, useState } from "react";
import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
	const [user,setUser] = useState(null);
	const createUser = (email,password) => {
	    return createUserWithEmailAndPassword(auth,email,password);
	}

	const authInfo = {
		user,
		createUser
	}
	return (
		<AuthContext.Provider value={authInfo}>
              {children}
		</AuthContext.Provider>
	);
};

export default AuthProviders;