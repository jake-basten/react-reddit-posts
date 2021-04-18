import React, { useState } from 'react';

const SelectSubRedditForm = ({ handleUpdateSubReddit }) => {
  const [subRedditText, setSubRedditText] = useState('');

  const handleSubmit = (e) => {
    handleUpdateSubReddit(subRedditText);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter SubReddit to update posts: </label>
      <input type="text"
        value={subRedditText}
        onChange={
          (e) => setSubRedditText(e.target.value)
        }
      />
    </form>
  );
}

export default SelectSubRedditForm;