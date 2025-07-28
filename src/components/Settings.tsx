"use client"

import React, { useState, useEffect } from 'react';

const FloatStorage = () => {
  const [input, setInput] = useState('');
  const [storedFloat, setStoredFloat] = useState(null);

  // Load stored float on component mount
  useEffect(() => {
    const saved = localStorage.getItem('myFloat');
    if (saved !== null) {
      setStoredFloat(parseFloat(saved));
    }
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const saveToLocalStorage = () => {
    const floatVal = parseFloat(input);
    if (!isNaN(floatVal)) {
      localStorage.setItem('myFloat', floatVal.toString());
      setStoredFloat(floatVal);
    } else {
      alert('Please enter a valid float number.');
    }
  };

  return (
    <div>
      <h2>Float to LocalStorage</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a float"
      />
      <button onClick={saveToLocalStorage}>Save</button>
      {storedFloat !== null && (
        <p>Stored Float: <strong>{storedFloat}</strong></p>
      )}
    </div>
  );
};


export default function Settings() {
    return (
        <>
            <FloatStorage></FloatStorage>
        </>
    )
}
