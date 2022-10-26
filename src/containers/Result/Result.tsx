import React, { FC } from 'react';
import cn from './Result.module.scss';
import { verdict } from '../../utils/verdict';

export interface ResultProps {
  result: number;
}

export const Result: FC<ResultProps> = ({ result }) => {
  return (
    <div className={cn.Result}>
      <div className={cn.Result__Smile}>{verdict(result)?.smile}</div>
      <h2 className={cn.Result__Title}>Вы набрали <span>{result > 100 ? 100 : result}</span>&nbsp;из&nbsp;100 баллов
      </h2>

      <div className={cn.Result__Verdict}>
        {verdict(result)?.result}
      </div>
    </div>
  );
};