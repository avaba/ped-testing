import React from 'react';
import { useAppSelector } from '../../hooks/useRedux';
import { Testing } from '../Testing';
import { Intro } from '../Intro';

export const App = () => {
  const isStart = useAppSelector((state) => state.testing.isStart);

  return (
    <>
      {!isStart && <Intro/>}
      {isStart && <Testing/>}
    </>
  );
};