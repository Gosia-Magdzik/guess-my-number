import styled, {keyframes} from "styled-components";

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
    margin: 0.2rem;
`

export const TopSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 0.2rem;
`

export const Line = styled.div`
    height: 10px;
    border: 1px solid white;
    width: 50%;
    background-color: #bbd6d6;
    border-radius: 10px;
`

export const H1 = styled.h1`
    background-color: #bbd6d6;
    padding: 6px 20px;
    color: black;
    font-size: 3rem;
    border-radius: 40px;

    @media (max-width: 720px) {
        font-size: 2rem;
    }

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
    justify-content: center;
    padding: 10px;
`

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Paragraph = styled.p`
    font-size: 3rem;
    font-family: "VT323", monospace;
    transition: all 0.3s ease-in-out;
    margin: 1rem;
    color: #bbd6d6;
    justify-content: center;
    align-items: center;

    @media (max-width: 720px) {
        font-size: 2rem;
        margin: 0.5rem;
    }

    &:nth-child(3) {
        margin-top: 20px;
        font-size: 4rem;
        font-family: "Fjalla One", sans-serif;
        justify-content: center;
        align-items: center;

        @media (max-width: 720px) {
            font-size: 2.5rem;
        }
    }

    &.correctGuess {
        color: rgba(168, 235, 18);
        animation: ${pulseAnimation} 1s infinite;
    }

    &.gameOver {
        color: #ff525b;
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
    height: 5vh;
    text-align: center;
    font-size: 1.5rem;
    background: linear-gradient(
        90deg,
        rgba(218, 245, 242, 1) 0%,
        rgba(190, 245, 236, 1) 100%
    ); 
    
    @media (max-width: 720px) {
        height: 4vh;
    }

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

    @media (max-width: 720px) {
        font-size: 1.5rem;
        padding: 0 10px;
    }

    &:hover {
        filter: drop-shadow(0 0 14px rgba(168, 235, 18, 1));
    }

    &:active {
        transform: scale(0.7);
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



