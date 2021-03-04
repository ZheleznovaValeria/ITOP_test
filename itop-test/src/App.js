import React, { useState, useRef } from 'react';
import { Buttons, Container, Wrapper, Text } from './App.styles';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
    setIsActive(false);
  };

  const handleStop = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <Wrapper>
      <h3>Stopwatch</h3>
      <h4>Test for ITOP by Zhelezova Valeria</h4>
      <Text>{formatTime()}</Text>
      <Container>
        {!isActive && !isPaused ? (
          <Buttons onClick={handleStart}>Start</Buttons>
        ) : (
          <Buttons onClick={handleStop}>Stop</Buttons>
        )}
        <Buttons onDoubleClick={handlePause} disabled={!isActive}>
          Wait
        </Buttons>
        <Buttons onClick={handleReset} disabled={!isActive && isPaused}>
          Reset
        </Buttons>
      </Container>
    </Wrapper>
  );
};

export default App;
