import { SetStateAction, useState } from 'react'
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
  
    const [checkValue, setCheckValue] = useState<number | undefined>();

    const [output, setoutput] = useState<string>("Start Guessing");

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckValue(parseInt(event.target.value))
    }

    const checkHandler = () => {
        if(checkValue === randNum){
            setoutput("Correct Guess")
        }
    }

    return (
    <Wrapper>
        <Container>
            <TopSection>
                <Line></Line>
                <H1>?</H1>
                <Line></Line>
            </TopSection>
            <Title>
                <H1>Guess my number</H1>
            </Title>
            <MiddleSection>
                <Paragraph>Score: <span>20</span></Paragraph>
                <Paragraph>Hight Score: <span>20</span></Paragraph>
                <Paragraph>{output}</Paragraph>
            </MiddleSection>
            <InputArea>
                <Input type="number" onChange={inputHandler} />
            </InputArea>
            <ButtonArea>
                <Button onClick={checkHandler} className="orange">Guess</Button>
                <Button className="green">Restart</Button>
            </ButtonArea>
                <Button className="purple">Reset Score</Button>
        </Container>
    </Wrapper>
  )
}

