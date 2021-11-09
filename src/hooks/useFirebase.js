import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitializeApp from '../firebase/firebaseInitializeApp';

firebaseInitializeApp()

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => {
                setIsLoading(false)
            })
    }

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
        logOut
    }
}
export default useFirebase;