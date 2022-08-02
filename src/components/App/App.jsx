// @flow

import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';
import { formatSeconds } from 'utils';
import { createTimer, destroyTimer } from 'actions/timers';
import CloseIcon from 'icons/CloseCircleIcon';
import TimeEntry from 'components/TimeEntry/TimeEntry';

import type { Timer } from 'types';

type Props = {
  timers: Timer[],
  total: number,
};

/**
 * Main App component.
 *
 * @author Todd Miller <https://github.com/Toddses>
 */
const App = (props: Props) => {
  const dispatch = useDispatch();
  const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  const handleCreateTimer = useCallback(
    () =>
      dispatch(
        createTimer({
          key:
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15),
          project: 'proj',
          description: 'desc',
          day: weekdays[new Date().getDay()],
          timeInSeconds: 0,
          highlight: true,
        })
      ),
    [dispatch]
  );

  return (
    <div id="app-container">
      <div className="header">
        <h1>Active Timers</h1>
        <div className="header-actions">
          <div className="header-button" onClick={handleCreateTimer}>
            Add Timer
          </div>
        </div>
      </div>
      <div id="entries-container">
        {props.timers.map((timer, index) => {
          return (
            <div key={timer.key}>
              <div
                className="remove"
                onClick={() => dispatch(destroyTimer(index))}
              >
                <CloseIcon iconTitle="remove-icon" />
              </div>
              <TimeEntry
                id={index}
                project={timer.project}
                description={timer.description}
                day={timer.day}
                time={timer.timeInSeconds}
                highlight={timer.highlight}
              />
            </div>
          );
        })}

        <div className="total-container">
          <div>
            <strong>total: </strong>
          </div>
          <div>{formatSeconds(props.total)}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
