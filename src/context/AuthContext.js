import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../firebase';

import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { cutMyStrStartMax } from '../utils/data/string-helpers';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const signUp = async (email, password) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			navigate('/profile');
			return setDoc(doc(db, 'users', email), {
				orders: [],
			});
		} catch (e) {
			console.log(e.code);
			setError(cutMyStrStartMax(e.code, '/'));
		}
	};

	const signIn = async (email, password) => {
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			navigate('/shop');
			console.log(res.user);
		} catch (e) {
			console.log(e.code);
			setError(cutMyStrStartMax(e.code, '/'));
		}
	};

	const logOut = async () => {
		try {
			await signOut(auth);
			navigate('/');
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<UserContext.Provider value={{ signIn, signUp, logOut, user, error }}>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
