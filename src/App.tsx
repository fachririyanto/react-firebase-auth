import { Routes, Route } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { ProtectedRoute, AuthenticatedRoute } from './utils/routes';

import PageLogin from './pages/Login';
import PageRegister from './pages/Register';
import PageHome from './pages/Home';

export default function App() {
    return (
        <>
            <Global styles={ css`
                * {
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                }
                html {
                    font-size: 10px;
                }
                body{
                    margin: 0;
                    padding: 0;
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.6rem;
                    color: #333;
                    line-height: 1.55;
                }
                @-webkit-keyframes spin-around {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(359deg);
                    }
                }
                @keyframes spin-around {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(359deg);
                    }
                }
            ` } />

            <Routes>
                <Route element={ <AuthenticatedRoute /> }>
                    <Route path="/login" element={ <PageLogin /> } />
                    <Route path="/register" element={ <PageRegister /> } />
                </Route>
                <Route element={ <ProtectedRoute /> }>
                    <Route path="/" element={ <PageHome /> } />
                </Route>
            </Routes>
        </>
    );
}