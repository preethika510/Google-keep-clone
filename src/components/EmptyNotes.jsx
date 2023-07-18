import React from 'react';
import {MdLightbulbOutline} from "react-icons/md";

function EmptyNotes() {
  return (
    <div className="note empty-note">
      <MdLightbulbOutline className="empty-note-icon" />
      <p className="empty-note-text">Notes you add appear here</p>
    </div>
  );
}

export default EmptyNotes;

