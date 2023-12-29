import React from 'react'
import { Wrapper, 
        Container,
        TopSection,
        Line,
        Title,
        MiddleSection,
        InputArea,
        Input,
        ButtonArea,
        Button,
} from './styled'

export const GameDisplayer = () => {
  return (
    <Wrapper>
        <Container>
            <TopSection>
                <Line></Line>
                <h1></h1>
                <Line></Line>
            </TopSection>
            <Title>
                <h1>Guess my number</h1>
            </Title>
            <MiddleSection>
                <p>Score: <span>20</span></p>
                <p>Hight Score: <span>20</span></p>
                <p>Start Guessing</p>
            </MiddleSection>
            <InputArea>
                <Input type="number"/>
            </InputArea>
            <ButtonArea>
                <Button>Guess</Button>
                <Button>Restart</Button>
            </ButtonArea>
                <Button>Reset Score</Button>
        </Container>
    </Wrapper>
  )
}

