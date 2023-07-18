import React from 'react';

function BinWindow({ deletedNotes, onClose }) {
  return (
    <div className="bin-window">
      <h2>Deleted Notes</h2>
      {deletedNotes && deletedNotes.length > 0 ? (
        deletedNotes.map((note) => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))
      ) : (
        <p>No deleted notes found.</p>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default BinWindow;

