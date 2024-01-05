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

    const [output, setOutput] = useState<string>("Start Guessing");

    const [correctAnswer, setCorrectAnswer] = useState<boolean>(false); //gonna stay hidden

    const [score, setScore] = useState<number>(20);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckValue(parseInt(event.target.value))
    }

    const checkHandler = () => {

        if (!correctAnswer && score > 0 ) {
            if (typeof checkValue !== "undefined") {

                if (checkValue === randNum) {
                    setOutput("Correct Guess!");
                    setCorrectAnswer(true);
                } else  {
                    setOutput(checkValue > randNum ? "Guess is Higher" : "Guess is Lower");
                    setScore(score-1);
                }
                if(score -1 === 0){
                    setOutput("Game Over")
                }

            }
        }
    };

    return (
    <Wrapper>
        <Container>
            <TopSection>
                <Line></Line>
                <H1>{correctAnswer ? randNum : `?`}</H1>
                <Line></Line>
            </TopSection>
            <Title>
                <H1>Guess my number</H1>
            </Title>
            <MiddleSection>
                <Paragraph>Score: <span>{score}</span></Paragraph>
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

