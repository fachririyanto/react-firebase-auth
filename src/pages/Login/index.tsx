import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStoreValues } from '../../app/hooks';

import { Wrapper, Container, Head, Form } from './style';
import { Textbox } from '../../components/Textbox';
import { Button } from '../../components/Button';
import Logo from '../../assets/logo.svg';

export default function PageLogin() {
    const { config } = getStoreValues();

    useEffect( () => {
        document.title = 'Login | ' + config.siteTitle;
    }, [] );

    return (
        <Wrapper>
            <Container>
                <Head.Wrap>
                    <Link to="/">
                        <Head.Img loading="lazy" src={ Logo } alt={ config.siteTitle } />
                    </Link>
                </Head.Wrap>
                <Form.Card>
                    <Form.Title>Welcome Back</Form.Title>
                    <Form.Field>
                        <Textbox type="email" placeholder="Email" required />
                    </Form.Field>
                    <Form.Field>
                        <Textbox type="password" placeholder="Password" required />
                    </Form.Field>
                    <Form.Action>
                        <Button type="submit" className="-btn-block">Login</Button>
                    </Form.Action>
                    <Form.Link>
                        Don't have account? <Link to="/register">Register</Link>
                    </Form.Link>
                </Form.Card>
            </Container>
        </Wrapper>
    );
}