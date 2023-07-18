import React, { useState } from 'react';
import { MdDelete, MdEdit, MdArchive } from 'react-icons/md';
import { AiOutlineBell } from 'react-icons/ai';

function Note({
  title,
  content,
  image,
  reminder,
  onDelete,
  onEdit,
  onArchive,
  onSetReminder,
  id
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedTitle, editedContent);
    setIsEditing(false);
  };

  const handleArchive = () => {
    onArchive(id, { id, title, content, image });
  };

  const handleSetReminder = () => {
    onSetReminder(id);
  };

  return (
    <div className="note">
      {image && <img src={image} alt="Note Image" className="note-image" />}
      {isEditing ? (
        <form className="note-form" onSubmit={handleSave}>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>

          <div className="note-actions">
            <button type="submit">
              <MdEdit size={25} />
            </button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
          <div className="note-actions">
            <button onClick={handleEdit}>
              <MdEdit size={25} />
            </button>
            <button onClick={() => onDelete(id)}>
              <MdDelete size={25} />
            </button>
            <button onClick={handleArchive}>
              <MdArchive size={25} />
            </button>
            <button onClick={handleSetReminder}>
              <AiOutlineBell size={25} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;