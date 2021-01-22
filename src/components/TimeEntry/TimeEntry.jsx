// @flow

import React from 'react';
import { useDispatch } from 'react-redux';

import './TimeEntry.scss';
import { setTimerInfo } from 'actions/timers';
import EditableField from 'components/EditableField/EditableField';
import TimerInput from 'components/TimerInput/TimerInput';

type Props = {
  id: number,
  project: string,
  description: string,
  day: string,
  time: number,
  highlight: boolean,
};

/**
 * Main App component.
 *
 * @author Todd Miller <https://github.com/Toddses>
 */
const TimeEntry = (props: Props) => {
  const dispatch = useDispatch();

  function disableHighlight() {
    dispatch(setTimerInfo(props.id, 'highlight', false));
  }

  function setTimerField(field, value) {
    dispatch(setTimerInfo(props.id, field, value));
  }

  return (
    <div className="time-entry-container">
      <div className="project w-bold">
        <EditableField
          field="project"
          initialValue={props.project}
          highlight={props.highlight}
          onChange={setTimerField}
          disableHighlight={disableHighlight}
        />
      </div>
      <div className="description w-bold">
        <EditableField
          field="description"
          initialValue={props.description}
          onChange={setTimerField}
        />
      </div>
      <div className="day w-light">
        <EditableField
          field="day"
          initialValue={props.day}
          onChange={setTimerField}
        />
      </div>
      <div className="timer">
        <TimerInput id={props.id} time={props.time} />
      </div>
    </div>
  );
};

export default TimeEntry;
