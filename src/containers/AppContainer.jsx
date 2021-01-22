// @flow

import React from 'react';
import { useSelector } from 'react-redux';

import App from 'components/App/App';

/**
 * Global App container, which also handles preloading imagery for
 * smooth app experience. Also manages top-level global
 * state, which is the various pieces of content that have been loaded.
 *
 * @author Todd Miller <https://github.com/Toddses>
 */
function AppContainer() {
  const timers = useSelector((state) => state.timers.timers);
  const total = useSelector((state) => {
    let total = 0;

    state.timers.timers.forEach((timer) => (total += timer.timeInSeconds));
    return total;
  });

  return <App timers={timers} total={total} />;
}

export default AppContainer;
