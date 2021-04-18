import './App.css';
import React, { useState } from 'react';
import DataProvider from './DataProvider';
import SelectSubRedditForm from './SelectSubRedditForm';

const App = () => {
  const [subReddit, setSubReddit] = useState('pics');

  const handleUpdateSubReddit = (subRedditText) => {
    setSubReddit(subRedditText);
  }

  return (
    <div className="App">
      <h1>{'Reddit Post Data'}</h1>
      <h2>{subReddit}</h2>
      <SelectSubRedditForm 
        handleUpdateSubReddit={handleUpdateSubReddit}
      />
      <DataProvider
        subReddit={subReddit}
      />
    </div>
  );
}

export default App;
