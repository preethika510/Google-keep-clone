// App.js
import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import CreateArea from './components/createArea';
import Note from './components/Note';
import Count from './components/Count';
import EmptyNotes from './components/EmptyNotes';
import Sidebar from './components/Sidebar';
import ArchiveWindow from './components/ArchiveWindow';
import ReminderWindow from './components/ReminderWindow';
import BinWindow from './components/BinWindow';


function App() {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showArchiveWindow, setShowArchiveWindow] = useState(false);
  const [showReminderWindow, setShowReminderWindow] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [showBinWindow, setShowBinWindow] = useState(false);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, { ...newNote, image: newNote.selectedImage }];
    });
  }

  function deleteNote(id) {
    const deletedNote = notes.find((note, index) => index === id);
    if (deletedNote) {
      setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
      setDeletedNotes((prevDeletedNotes) => [...prevDeletedNotes, deletedNote]);
    }
  }

  function editNote(id, editedTitle, editedContent) {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => {
        if (index === id) {
          return { ...note, title: editedTitle, content: editedContent };
        }
        return note;
      })
    );
  }

  function archiveNote(id) {
    const archivedNote = notes.find((note, index) => index === id);
    if (archivedNote) {
      setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
      setArchivedNotes((prevArchivedNotes) => [
        ...prevArchivedNotes,
        archivedNote,
      ]);
    }
  }

  function setNoteReminder(id) {
    const reminderNote = notes.find((note, index) => index === id);
    if (reminderNote) {
      setReminders((prevReminders) => [...prevReminders, reminderNote]);
    }
  }

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function navigateToNotes() {
    const notesSection = document.getElementById('notes-section');
    notesSection.scrollIntoView({ behavior: 'smooth' });
  }

  function openArchiveWindow() {
    setShowArchiveWindow(true);
  }

  function closeArchiveWindow() {
    setShowArchiveWindow(false);
  }

  function openReminderWindow() {
    setShowReminderWindow(true);
  }

  function closeReminderWindow() {
    setShowReminderWindow(false);
  }

  function handleBinClick() {
    setShowBinWindow(true);
  }

  function handleCloseBinWindow() {
    setShowBinWindow(false);
  }


  return (
    <div className="App">
      <Header onClick={toggleSidebar} />
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        navigateToNotes={navigateToNotes}
        openArchiveWindow={openArchiveWindow}
        openReminderWindow={openReminderWindow}
        reminders={reminders}
        onCloseBinWindow={handleCloseBinWindow}
        archivedNotes={archivedNotes} 
      />
      <Count
        count={
          notes.length === 0
            ? 'Empty'
            : `Showing ${notes.length} Notes in Database`
        }
      />
      <CreateArea onAdd={addNote} />
      <div id="notes-section">
        {notes.length === 0 ? (
          <EmptyNotes />
        ) : (
          notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              image={note.image}
              reminder={reminders.includes(note)}
              onDelete={deleteNote}
              onEdit={editNote}
              onArchive={archiveNote}
              onSetReminder={setNoteReminder}
            />
          ))
        )}
      </div>
      {showArchiveWindow && (
        <ArchiveWindow
          archivedNotes={archivedNotes}
          onClose={closeArchiveWindow}
        />
      )}
      {showReminderWindow && (
        <ReminderWindow
          reminders={reminders}
          onClose={closeReminderWindow}
        />
      )}
      {showBinWindow && <BinWindow onClose={handleCloseBinWindow} />}
    </div>
  );
}

export default App;
