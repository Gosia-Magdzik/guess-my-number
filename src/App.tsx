import { useEffect, useState } from 'react';
import { GameDisplayer } from './components/GameDisplayer';


function App() {

  const [randomNum, setRandomNum] = useState<number>();

  useEffect(() => {
    randomNumberGenerator()
  }, [])

  const randomNumberGenerator = () => {
    let num1 = Math.floor(Math.random() * 20 ) + 1;  //let becouse it is going to change
    setRandomNum(num1)
  }

  return (
    <>
      <GameDisplayer/>
    </>
  );
}

export default App;
