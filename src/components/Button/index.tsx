import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

const Default = styled.button`
    display: inline-block;
    padding: 0 24px;
    height: 44px;
    font-size: 1.35rem;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: #333;
    border-radius: 6px;
    cursor: pointer;

    &.-btn-block {
        display: block;
        width: 100%;
    }

    &.-is-loading {
        position: relative;
        color: transparent;
        &:hover {
            color: transparent;
        }
        &:after {
            display: block;
            position: absolute;
            top: calc(50% - (20px / 2));
            left: calc(50% - (20px / 2));
            content: '';
            width: 20px;
            height: 20px;
            border: 2px solid #fff;
            border-radius: 290486px;
            border-right-color: transparent;
            border-top-color: transparent;
            -webkit-animation: spin-around .5s infinite linear;
            animation: spin-around .5s infinite linear;
        }
    }
`;

export function Button( props: ButtonHTMLAttributes<HTMLButtonElement> ) {
    return (
        <Default { ...props } />
    );
}