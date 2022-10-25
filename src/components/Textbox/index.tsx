import { InputHTMLAttributes } from 'react';
import { css } from '@emotion/css';

const InputStyle = css`
    display: block;
    padding: 0 12px;
    width: 100%;
    height: 44px;
    font-size: 1.5rem;
    background-color: #f9f9f9;
    outline: 0;
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 6px;

    &:focus {
        background-color: #fff;
    }
`;

export function Textbox( props: InputHTMLAttributes<HTMLInputElement> ) {
    return (
        <input className={ InputStyle } { ...props } />
    );
}