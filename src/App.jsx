import { useState } from 'react';
import StartScreen from './StartScreen';
import Quiz from './QuizComponent/Quiz';
import Result from './Result';

function App() {
  const [stage, setStage] = useState('start'); // start, quiz, result
  const [userName, setUserName] = useState('');
  const [duration, setDuration] = useState(60); // بالثواني
  const [score, setScore] = useState(0);

  const handleStart = (name, time) => {
    setUserName(name);
    setDuration(time);
    setStage('quiz');
  };

  const handleFinish = (finalScore) => {
    setScore(finalScore);
    setStage('result');
  };

  return (
    <>
      {stage === 'start' && <StartScreen onStart={handleStart} />}
      {stage === 'quiz' && <Quiz duration={duration} onFinish={handleFinish} userName={userName} />}
      {stage === 'result' && <Result name={userName} score={score} />}
    </>
  );
}

export default App;
