import React from 'react';
import '../App.css'
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      id='report-button'
      ref={buttonRef}
      onClick={showModal}
      type='submit'

    >
      {triggerText}
    </button>
  );
};
export default Trigger;