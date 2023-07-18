import React from 'react';

function ArchiveWindow({ archivedNotes, onClose }) {
  const handleArchiveClose = () => {
    onClose();
  };

  return (
    <div className="archive-window">
      <h2>Archived Notes</h2>
      {archivedNotes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
      <button onClick={handleArchiveClose}>Close</button>
    </div>
  );
}

export default ArchiveWindow;





