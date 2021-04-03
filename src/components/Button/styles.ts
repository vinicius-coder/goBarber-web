import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`

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

`;