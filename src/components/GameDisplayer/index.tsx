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
        H1,
        Paragraph,
} from './styled'

export const GameDisplayer = () => {
  return (
    <Wrapper>
        <Container>
            <TopSection>
                <Line></Line>
                <H1></H1>
                <Line></Line>
            </TopSection>
            <Title>
                <H1>Guess my number</H1>
            </Title>
            <MiddleSection>
                <Paragraph>Score: <span>20</span></Paragraph>
                <Paragraph>Hight Score: <span>20</span></Paragraph>
                <Paragraph>Start Guessing</Paragraph>
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

