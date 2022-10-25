import { firebaseAuth, firebaseDB } from './init';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getErrorMessage } from '../error';

// setup sign-in with Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters( {
    prompt: 'select_account',
} );

export const SignInWithGooglePopup = () => signInWithPopup( firebaseAuth, provider );


// create user auth with email and password
export const createUserAuthWithEmailAndPassword = async ( email: string, password: string ) => {
    if ( ! email || ! password ) {
        return false;
    }

    return createUserWithEmailAndPassword( firebaseAuth, email, password );
};


// create user document from auth
export const createUserDocumentFromAuth = async ( auth: any, additionalData = {} ) => {
    const userDocRef = doc( firebaseDB, 'users', auth.uid );
    const userSnapshot = await getDoc( userDocRef );

    if ( ! userSnapshot.exists() ) {
        const { displayName, email } = auth;
        const createdAt = new Date();

        try {
            await setDoc( userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            } );
        } catch ( error ) {
            console.log( 'Error creating the user. Error: ', getErrorMessage( error ) );
        }
    }

    return userDocRef;
};