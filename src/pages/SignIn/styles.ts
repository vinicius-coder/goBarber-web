import { shade } from 'polished';
import styled from 'styled-components';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`

    height: 100vh;

    display: flex;
    align-items: stretch;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 80px;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;
            color: #F4EDE8;

            &::placeholder {
                color: #666360;
            } 

            & + input {
                margin-top: 8px;
            }
        }

        button {
            background: #ff9000;
            height: 56px;
            border-radius: 10px;
            padding: 16px;
            color: #321e38;
            width: 100%;
            font-weight: 500;
            transition: background-color 0.2s;

            margin-top: 16px;

            &:hover {
                background: ${shade(0.2, '#ff9000')}
            }
        }

        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')}
            }
        }
    }

    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        &:hover {
            color: ${shade(0.2, '#ff9000')}
        }
        
        svg {
            margin: 16px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackground}) no-repeat center;
    background-size: cover;
`;