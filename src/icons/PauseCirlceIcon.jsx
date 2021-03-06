// @flow

import React from 'react';

type Props = {
  iconTitle: string,
};

const PauseCirlceIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-labelledby={props.iconTitle}
    >
      <title id={props.iconTitle}>Pause Icon</title>

      <path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm168-96v192m-10-192h20c3.3 0 6 2.7 6 6v180c0 3.3-2.7 6-6 6h-20c-3.3 0-6-2.7-6-6V166c0-3.3 2.7-6 6-6zm96 0h20c3.3 0 6 2.7 6 6v180c0 3.3-2.7 6-6 6h-20c-3.3 0-6-2.7-6-6V166c0-3.3 2.7-6 6-6z" />
    </svg>
  );
};

export default PauseCirlceIcon;
