import React, { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native"
import { FIREBASE_AUTH } from '../firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading

    const auth = FIREBASE_AUTH;

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigation.navigate('home');
    //         }
    //     });
    //     // Set persistence to LOCAL
    //     setPersistence(auth, browserLocalPersistence);
    //     return unsubscribe;
    // }, []);

    const signUp = async () => {
        try {
            setLoading(true); // Set loading to true when signing up
            const response = await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home');
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Set loading to false when signup is complete (whether successful or not)
        }
    };

    const signIn = async () => {
        try {
            setLoading(true); // Set loading to true when signing in
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (err) {
            alert(err);
        } finally {
            setLoading(false); // Set loading to false when signin is complete (whether successful or not)
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
            console.log("Signed out");
            // navigation.navigate('Home')
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ email, setEmail, username, password, setUsername, setPassword, signUp, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

