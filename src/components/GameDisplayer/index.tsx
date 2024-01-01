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

interface TypeProp {
    randNum : number
}

export const GameDisplayer:React.FC<TypeProp> = ({randNum}) => {
  return (
    <Wrapper>
        <Container>
            <TopSection>
                <Line></Line>
                <H1>{randNum}</H1>
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
                <Button className="orange">Guess</Button>
                <Button className="green">Restart</Button>
            </ButtonArea>
                <Button className="purple">Reset Score</Button>
        </Container>
    </Wrapper>
  )
}

