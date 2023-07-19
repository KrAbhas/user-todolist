import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SlideInComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currTask, setCurrTask] = useState('');

  const location = useLocation();
  const task = location.state;

  useEffect(()=>{
    setIsOpen(true);
    setCurrTask(task['title']);
  }, [task]);

  const handleSave = () => {
    setIsOpen(false);
  }

  return (
    <div className={`slide-in-component ${isOpen ? 'open' : ''}`}>
      <div className="content">
        <input 
            value={task['title']}
            onChange={e=>setCurrTask(e.target.value)}
            placeholder={task['title']}></input>
        <br/>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SlideInComponent;