import { useEffect, useState } from 'react';
import { GameDisplayer } from './components/GameDisplayer';
import { GlobalStyle } from './GlobalStyle';

function App() {

  const [randomNum, setRandomNum] = useState<number | undefined>();

  useEffect(() => {
    randomNumberGenerator()
  }, [])

  const randomNumberGenerator = () => {
    let num1 = Math.floor(Math.random() * 20 ) + 1;  //let becouse it is going to change
    setRandomNum(num1)
  }

  return (
    <>
      <GlobalStyle/>
      <GameDisplayer randNum={randomNum || 0} />
    </>
  );
}

export default App;
