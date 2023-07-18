import React, { useState } from 'react';
import { RiStickyNote2Line } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai';
import { BiEditAlt, BiArchiveIn, BiTrash } from 'react-icons/bi';
import BinWindow from './BinWindow';
import ArchiveWindow from './ArchiveWindow';
import ReminderWindow from './ReminderWindow';

function Sidebar({ isOpen, toggleSidebar, navigateToNotes, onCloseBinWindow, openReminderWindow, archivedNotes, reminders }) {
  const [showBinWindow, setShowBinWindow] = useState(false);
  const [showArchiveWindow, setShowArchiveWindow] = useState(false);
  const [showReminderWindow, setShowReminderWindow] = useState(false);

  const handleBinClick = () => {
    setShowBinWindow(true);
  };

  const handleCloseBinWindow = () => {
    setShowBinWindow(false);
    onCloseBinWindow();
  };

  const handleArchiveClick = () => {
    setShowArchiveWindow(true);
  };

  const handleCloseArchiveWindow = () => {
    setShowArchiveWindow(false);
  };

  const handleReminderClick = () => {
    setShowReminderWindow(true);
  };

  const handleCloseReminderWindow = () => {
    setShowReminderWindow(false);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="main-menu-button" onClick={toggleSidebar}>
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
      <div className="sidebar-menu">
        <div className="sidebar-menu-item" onClick={navigateToNotes}>
          <RiStickyNote2Line className="sidebar-menu-icon" />
          <span>Notes</span>
        </div>
        <div className="sidebar-menu-item" onClick={handleReminderClick}>
          <AiOutlineBell className="sidebar-menu-icon" />
          <span>Reminders</span>
        </div>
        <div className="sidebar-menu-item">
          <BiEditAlt className="sidebar-menu-icon" />
          <span>Edit Labels</span>
        </div>
        <div className="sidebar-menu-item" onClick={handleArchiveClick}>
          <BiArchiveIn className="sidebar-menu-icon" />
          <span>Archive</span>
        </div>
        <div className="sidebar-menu-item" onClick={handleBinClick}>
          <BiTrash className="sidebar-menu-icon" />
          <span>Bin</span>
        </div>
      </div>
      {showBinWindow && (
        <BinWindow onClose={handleCloseBinWindow} />
      )}
      {showArchiveWindow && (
        <ArchiveWindow
          archivedNotes={archivedNotes}
          onClose={handleCloseArchiveWindow}
        />
      )}
      {showReminderWindow && (
        <ReminderWindow
          reminders={reminders}
          onClose={handleCloseReminderWindow}
        />
      )}
    </div>
  );
}

export default Sidebar;



