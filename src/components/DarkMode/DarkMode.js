
import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkMode = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button type="button" data-text="&#9728;" onClick={darkMode.disable}>
        	&#9728;
      </button>
      {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
      <button type="button" data-text="&#9790;" onClick={darkMode.enable}>
       	&#9790;
      </button>
    </div>
  );
};

export default DarkMode;
