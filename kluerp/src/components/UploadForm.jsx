import React, { useState } from 'react';
import axios from 'axios';

function UploadForm({ onUpload }) {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const upload = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    await axios.post('http://localhost:5000/upload', formData);
    onUpload();
    setTitle('');
    setFile(null);
  };

  return (
    <div>
      <h3>Upload Resource</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default UploadForm;
