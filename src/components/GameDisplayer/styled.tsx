import styled from "styled-components";

export const Wrapper = styled.div`
    
`

export const Container = styled.div`
    color: #f4efef;
    background: #37475350;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90vh;
    padding: 2rem;

`

export const TopSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const Line = styled.div`
    height: 10px;
    border: 1px solid white;
    width: 50%;
    background-color: #bbd6d6;
`

export const H1 = styled.h1`
    background-color: #bbd6d6;
    padding: 6px 20px;
    color: black;
    font-size: 3rem;
    border-radius: 40px;

`

export const Title = styled.div`
    font-size: 3rem;
    font-family: "Nosifer", sans-serif;
    padding: 0 20px;
    text-align: center;
    transition: all 0.3s ease-in-out; 
`

export const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
`

export const Paragraph = styled.p`
    font-size: 3rem;
    font-family: "VT323", monospace;
    transition: all 0.3s ease-in-out;
    margin: 1rem;

    &:nth-child(3) {
        margin-top: 20px;
        font-size: 4rem;
        font-family: "Fjalla One", sans-serif;
    }
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    border-radius: 6px;
    border: none;
    outline: none;
    height: 50px;
    text-align: center;
    font-size: 1.5rem;
    background: linear-gradient(
        90deg,
        rgba(218, 245, 242, 1) 0%,
        rgba(190, 245, 236, 1) 100%
    ); 

    &::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }
`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

export const Button = styled.button`
    margin-top: 20px;
    border-radius: 6px;
    font-size: 2rem;
    color: black;
    cursor: pointer;
    height: 50px;
    outline: none;
    border: none;
    padding: 0 20px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        filter: drop-shadow(0 0 14px rgba(168, 235, 18, 1));
    }

    &.orange {
        background-color: #f9ff52;
    }

    &.green {
        background-color: #a1ff67;
    }

    &.purple {
        background-color: #e98fff;
    }

`



