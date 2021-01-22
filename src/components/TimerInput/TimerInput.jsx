// @flow

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import './TimerInput.scss';
import { formatSeconds, isoStringToSeconds } from 'utils';
import { setTimerTime, updateTimer } from 'actions/timers';
import PauseIcon from 'icons/PauseCirlceIcon';
import PlayIcon from 'icons/PlayCircleIcon';

type Props = {
  id: number,
  time: number,
};

/**
 *
 */
const TimerInput = (props: Props) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timer = window.setInterval(() => {
      dispatch(updateTimer(props.id));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  });

  function updateSeconds(e) {
    const val = e.target.innerHTML;

    if (val.length !== 8) {
      setIsInvalid(true);
      return;
    }

    const seconds = isoStringToSeconds(val);
    setIsInvalid(false);
    dispatch(setTimerTime(props.id, seconds));
  }

  return (
    <div className="timer-input">
      <span
        className={isInvalid ? 'is-invalid' : ''}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={updateSeconds}
      >
        {formatSeconds(props.time)}
      </span>
      {/* <input */}
      {/* 	className="w-light" */}
      {/* 	value={formatSeconds(props.time)} */}
      {/* 	onBlur={updateSeconds} */}
      {/* /> */}
      <div className="actions">
        {isActive ? (
          <div className="pause-icon" onClick={() => setIsActive(false)}>
            <PauseIcon iconTitle="pause-icon" />
          </div>
        ) : (
          <div className="play-icon" onClick={() => setIsActive(true)}>
            <PlayIcon iconTitle="play-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerInput;
