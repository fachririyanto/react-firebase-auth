import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStoreValues, useAppDispatch } from '../../app/hooks';
import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/func';
import { getErrorMessage } from '../../utils/error';

import { Wrapper, Container, Head, Form } from './style';
import { Textbox } from '../../components/Textbox';
import { Button } from '../../components/Button';
import Logo from '../../assets/logo.svg';

type FormValues = {
    email: string,
    fullname: string,
    password: string,
    repassword: string,
};

const initialState: FormValues = {
    email: '',
    fullname: '',
    password: '',
    repassword: '',
};

export default function PageRegister() {
    const { config } = getStoreValues();
    const dispatch = useAppDispatch();

    const [ error, setError ] = useState<string>( '' );
    const [ isFormLoading, setIsFormLoading ] = useState<boolean>( false );
    const [ formFields, setFormFields ] = useState( initialState );
    const { email, fullname, password, repassword } = formFields;

    const onSubmit = async ( e: React.SyntheticEvent ) => {
        e.preventDefault();

        if ( password !== repassword ) {
            setError( 'Invalid confirm password.' );
            setIsFormLoading( false );

            return;
        }

        setIsFormLoading( true );

        try {
            const { user }:any = await createUserAuthWithEmailAndPassword( email, password );
            console.log( user );

            await createUserDocumentFromAuth( user, { displayName: fullname } );

            resetForm();
        } catch ( error: any ) {
            setIsFormLoading( false );

            if ( error.code === 'auth/email-already-in-use' ) {
                setError( 'User already exists.' );
                return;
            }

            setError( 'User creation has an error.' + getErrorMessage( error ) );
        }
    };

    const handleChange = ( event: React.FormEvent<HTMLInputElement> ) => {
        const { name, value } = event.currentTarget;
        setFormFields( { ...formFields, [ name ]: value } );
    };

    const resetForm = () => {
        setFormFields( initialState );
        setIsFormLoading( false );
        setError( '' );
    };

    useEffect( () => {
        document.title = 'Register | ' + config.siteTitle;
    }, [] );

    return (
        <Wrapper>
            <Container>
                <Head.Wrap>
                    <Link to="/">
                        <Head.Img loading="lazy" src={ Logo } alt={ config.siteTitle } />
                    </Link>
                </Head.Wrap>
                <Form.Card onSubmit={ onSubmit }>
                    <Form.Title>Register</Form.Title>
                    { error ? <Form.Error>{ error }</Form.Error> : null }
                    <Form.Field>
                        <Textbox type="email" placeholder="Email" name="email" value={ email } onChange={ handleChange } required />
                    </Form.Field>
                    <Form.Field>
                        <Textbox type="text" placeholder="Full Name" name="fullname" value={ fullname } onChange={ handleChange } required />
                    </Form.Field>
                    <Form.Field>
                        <Textbox type="password" placeholder="Password" name="password" value={ password } onChange={ handleChange } required />
                    </Form.Field>
                    <Form.Field>
                        <Textbox type="password" placeholder="Confirm Password" name="repassword" value={ repassword } onChange={ handleChange } required />
                    </Form.Field>
                    <Form.Action>
                        <Button type="submit" className={ isFormLoading ? "-btn-block -is-loading" : "-btn-block" }>Sign Up</Button>
                    </Form.Action>
                    <Form.Link>
                        Have an account? <Link to="/login">Login</Link>
                    </Form.Link>
                </Form.Card>
            </Container>
        </Wrapper>
    );
}