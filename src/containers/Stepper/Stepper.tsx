import * as React from 'react';
import { FC, useCallback, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { StepItem } from '../StepItem';
import { backStep, checkAnswer, nextStep, resetStep } from '../../store/testing';
import { Result } from '../Result';

export const HorizontalLinearStepper: FC = () => {
  const steps = useAppSelector((state) => state.testing.steps);
  const activeStep = useAppSelector((state) => state.testing.activeStep);
  const result = useAppSelector((state) => state.testing.result);
  const answers = useAppSelector((state) => state.testing.answer);
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();

  const isCheck = useMemo(() => (
    answers.filter(item => (item?.steps === activeStep + 1) && (item?.isChecked))
  ), [activeStep, answers]);

  const handleNext = useCallback(() => {
    dispatch(nextStep(value));
    setValue(0);
    window.scrollTo(0, 0);
  }, [dispatch, value]);

  const handleBack = useCallback(() => {
    dispatch(backStep(value));
    window.scrollTo(0, 0);
  }, [dispatch, value]);

  const handleReset = useCallback(() => {
    dispatch(resetStep());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const handleCheck = useCallback((value: number, name: string) => {
    dispatch(checkAnswer({ id: activeStep + 1, name }));
    setValue(value);
  }, [activeStep, dispatch]);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((item) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={item?.id} {...stepProps}>
              <StepLabel/>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length && (
        <>
          <Result result={result}/>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }}/>
            <Button variant="contained" onClick={handleReset}>Начать заново</Button>
          </Box>
        </>
      )}

      {activeStep !== steps.length && (
        <>
          <StepItem
            onCheck={handleCheck}
            activeStep={activeStep + 1}
          />

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="contained"
            >
              Назад
            </Button>
            <Box sx={{ flex: '1 1 auto' }}/>
            <Button
              disabled={!isCheck?.length}
              variant="contained"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Завершить' : 'Далее'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
