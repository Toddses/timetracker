// @flow

import type { Timer } from 'types';

/**
 *
 * @author Todd Miller <todd.miller@tricomb2b.com>
 */

// ============================
// ACTION TYPES
// ============================
export const TIMER_CREATE = 'TIMER_CREATE';
export const TIMER_DESTROY = 'TIMER_DESTROY';
export const TIMER_UPDATE = 'TIMER_UPDATE';
export const TIMER_SET_INFO = 'TIMER_SET_INFO';
export const TIMER_SET_TIME = 'TIMER_SET_TIME';

// ============================
// ACTION CREATORS
// ============================
export const createTimer = (timer: Timer) => {
  return {
    type: TIMER_CREATE,
    timer: timer,
  };
};

export const destroyTimer = (index: number) => {
  return {
    type: TIMER_DESTROY,
    index: index,
  };
};

export const updateTimer = (index: number) => {
  return {
    type: TIMER_UPDATE,
    index: index,
  };
};

export const setTimerInfo = (
  index: number,
  field: string,
  data: string | boolean
) => {
  return {
    type: TIMER_SET_INFO,
    index: index,
    field: field,
    data: data,
  };
};

export const setTimerTime = (index: number, seconds: number) => {
  return {
    type: TIMER_SET_TIME,
    index: index,
    seconds: seconds,
  };
};
