import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UploadForm from './components/UploadForm';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Dashboard user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
