import styled from 'styled-components';
import '../../style.global.scss';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:5px;
`;


export const Button = styled.button`
    background-color: var(--ciano-800);
    border-radius: 50px;
    width: 250px;
    color: #fff;
    border: none;
    font-size: 30px;
    padding: 12px 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    &:hover {
        opacity: 70%;
    }
    cursor: pointer;
`;



