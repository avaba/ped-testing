import React, { FC, useMemo } from 'react';
import cn from './StepItem.module.scss';
import { useAppSelector } from '../../hooks/useRedux';
import HelpIcon from '@mui/icons-material/Help';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export interface StepItemProps {
  activeStep: number;
  onCheck: (value: number, name: string) => void;
}

export const StepItem: FC<StepItemProps> = ({ activeStep, onCheck }) => {
  const steps = useAppSelector((state) => state.testing.steps);
  const answers = useAppSelector((state) => state.testing.answer);

  const currentStep = useMemo(() => (
    steps?.find((item) => item.id === activeStep)
  ), [activeStep, steps]);

  const currentAnswers = useMemo(() => (
    answers?.filter((item) => item.steps === activeStep)
  ), [activeStep, answers]);

  return (
    <div className={cn.StepItem}>
      <div className={cn.StepItem__Question}>
        <div className={cn.StepItem__Question_Icon}><HelpIcon fontSize="medium"/></div>
        <p className={cn.StepItem__Question_Text}>{currentStep?.question}</p>
      </div>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {currentAnswers.map((item, index) => (
            <FormControlLabel
              key={item.name + activeStep}
              sx={{ mb: 2 }}
              name={item.name}
              value={item.value}
              control={<Radio/>}
              label={item.text}
              checked={item.isChecked}
              onChange={() => onCheck(item.value, item.name)}
            />
          ))}
        </RadioGroup>
      </FormControl>

    </div>
  );
};