import React, { useState, useEffect } from 'react';

function TogglePage() {
  const [isOn, setIsOn] = useState(false);

  const fetchState = async () => {
    try {
      const response = await fetch('http://localhost:4000/toggle');
      const data = await response.json();
      setIsOn(data.isOn);
    } catch (error) {
      console.error('Error fetching toggle state', error);
    }
  };

  const toggleState = async () => {
    try {
      await fetch('http://localhost:4000/toggle', { method: 'POST' });
      setIsOn((prev) => !prev);
    } catch (error) {
      console.error('Error toggling state', error);
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  return (
    <div style={{ background: isOn ? 'black' : 'white', height: '100vh' }}>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}

export default TogglePage;

