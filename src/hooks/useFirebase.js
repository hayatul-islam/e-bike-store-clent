import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import firebaseInitializeApp from '../firebase/firebaseInitializeApp';

firebaseInitializeApp()

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    console.log(user);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleUserRegister = (email, password, name, location, history) => {

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const newUser = { email, displayName: name };
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                // history.replace('/');


                const redirect_url = location?.state?.from || '/';
                history.replace(redirect_url)
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            })
    };


    const handleUserLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const redirect_url = location?.state?.from || '/';
                history.replace(redirect_url)
            })
            .catch((error) => {

            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        })
    });

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {

        });
    }

    return {
        user,
        isLoading,
        googleSignIn,
        handleUserRegister,
        handleUserLogin,
        logOut
    }
}
export default useFirebase;