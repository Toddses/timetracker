// @flow

/**
 *
 * @author Todd Miller <todd.miller@tricomb2b.com>
 */
import * as DO from 'actions/timers';

import type { Timer } from 'types';

export type TimerState = {
  timers: Timer[],
};

export type TimerAction = {
  data?: string | boolean,
  field?: string,
  index?: number,
  seconds?: number,
  timer?: Timer,
  type: string | null,
};

const defaultState = {
  timers: [],
};

const timers = (state: TimerState = defaultState, action: TimerAction) => {
  switch (action.type) {
    case DO.TIMER_CREATE:
      return {
        ...state,
        timers: [...state.timers, action.timer],
      };

    case DO.TIMER_DESTROY:
      return {
        ...state,
        timers: [
          ...state.timers.slice(0, action.index),
          ...state.timers.slice(action.index + 1),
        ],
      };

    case DO.TIMER_UPDATE:
      return {
        ...state,
        timers: state.timers.map<Timer>((timer, index) => {
          if (index !== action.index) return timer;

          return {
            ...timer,
            timeInSeconds: timer.timeInSeconds + 1,
          };
        }),
      };

    case DO.TIMER_SET_INFO:
      return {
        ...state,
        timers: state.timers.map<Timer>((timer, index) => {
          if (index !== action.index) return timer;

          timer[action.field] = action.data;

          return timer;
        }),
      };

    case DO.TIMER_SET_TIME:
      return {
        ...state,
        timers: state.timers.map<Timer>((timer, index) => {
          if (index !== action.index) return timer;

          timer.timeInSeconds = action.seconds;

          return timer;
        }),
      };

    default:
      return state;
  }
};

export default timers;
