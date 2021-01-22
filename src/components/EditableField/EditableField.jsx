// @flow

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  field: string,
  initialValue: string,
  highlight?: boolean,
  onChange: (string, string) => void,
  disableHighlight?: () => void,
};

const EditableField = (props: Props) => {
  const [value, setValue] = useState(props.initialValue);
  const { highlight = false, disableHighlight = () => {} } = props;
  const inputEl = useRef(null);

  useEffect(() => {
    if (highlight) {
      inputEl.current.focus();
      disableHighlight();
    }
  }, [highlight, disableHighlight]);

  function handleOnChange(e) {
    setValue(e.target.innerHTML);
    props.onChange(props.field, e.target.innerHTML);
  }

  function handleOnFocus(e) {
    requestAnimationFrame(() => {
      document.execCommand('selectAll', false, null);
    });
  }

  return (
    <div className="editable-field">
      <span
        ref={inputEl}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={handleOnChange}
        onFocus={handleOnFocus}
      >
        {value}
      </span>
    </div>
  );
};

export default EditableField;
