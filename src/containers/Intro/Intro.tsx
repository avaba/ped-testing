import React, { useCallback } from 'react';
import cn from './Intro.module.scss';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../hooks/useRedux';
import { startTesting } from '../../store/testing';

export const Intro = () => {
  const dispatch = useAppDispatch()
  
  const handleClickStart = useCallback(() => {
    dispatch(startTesting())
  }, [dispatch])
  
  return (
    <div className={cn.Intro}>
      <h1>А программирование для тебя или нет?🤔</h1>
      <Button onClick={handleClickStart} size='large' variant='contained'>Начать тест</Button>
    </div>
  );
};