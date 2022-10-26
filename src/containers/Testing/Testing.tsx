import React from 'react';
import cn from './Testing.module.scss';
import { HorizontalLinearStepper } from '../Stepper';

export const Testing = () => {
  return (
    <div className={cn.Testing}>
      <HorizontalLinearStepper/>
    </div>
  );
};