import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UploadForm from './UploadForm';

function Dashboard({ user, setUser }) {
  const [resources, setResources] = useState([]);

  const fetchResources = async () => {
    const res = await axios.get('http://localhost:5000/resources');
    setResources(res.data);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <div>
      <h2>Welcome, {user.username} ({user.role})</h2>
      <button onClick={() => setUser(null)}>Logout</button>

      {user.role === 'admin' && <UploadForm onUpload={fetchResources} />}

      <h3>Resources:</h3>
      <ul>
        {resources.map((res) => (
          <li key={res.id}>
            {res.title} - <a href={`http://localhost:5000/uploads/${res.filename}`} target="_blank">Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
