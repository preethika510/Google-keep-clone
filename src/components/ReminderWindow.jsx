import React from 'react';

function ReminderWindow({ reminders, onClose }) {
  return (
    <div className="reminder-window">
      <h2>Reminder Notes</h2>
      {reminders.length > 0 ? (
        reminders.map((note) => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))
      ) : (
        <p>No reminder notes found.</p>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ReminderWindow;


