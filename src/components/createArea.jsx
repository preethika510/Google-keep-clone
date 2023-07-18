import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { MdImage } from 'react-icons/md';
import { RiPushpin2Line } from 'react-icons/ri';

function CreateArea({ onAdd, handleImageChange }) {
  const [isExpanded, setExpanded] = useState(false);
  const [isPinned, setPinned] = useState(false); // Track the pinned state

  const [note, setNote] = useState({
    title: '',
    content: '',
    selectedImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleExpanded = () => {
    setExpanded(true);
  };

  const handleImageSelect = (e) => {
    const selectedImage = e.target.files[0];
    setNote((prevValue) => ({
      ...prevValue,
      selectedImage: URL.createObjectURL(selectedImage),
    }));
  };

  const submitButton = (event) => {
    onAdd(note);
    setNote({
      title: '',
      content: '',
      selectedImage: null,
    });
    event.preventDefault();
  };

  const handlePinClick = () => {
    setPinned(!isPinned); // Toggle the pinned state
  };

  return (
    <div className="create-area">
      <form>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <div className="create-area-buttons">
          <button className="submit-button" onClick={submitButton}>
            <IoIosAdd size={35} />
          </button>
          <label htmlFor="image-upload" className="image-upload-label">
            <MdImage size={20} />
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="image-upload-input"
            onChange={handleImageSelect}
          />
          <div className="pin-icon" onClick={handlePinClick}>
            <RiPushpin2Line size={25} />
          </div>
        </div>
      </form>
      {isPinned && <p>Pinned</p>} {/* Display "Pinned" if isPinned is true */}
    </div>
  );
}

export default CreateArea;

