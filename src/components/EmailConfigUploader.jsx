import React, { useState } from 'react';
import { uploadEmailConfig } from '../services/emailService';

const EmailConfigUploader = () => {
  const [emailConfig, setEmailConfig] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });

  const handleConfigChange = (e) => {
    const { name, value } = e.target;
    setEmailConfig((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUploadConfig = async () => {
    const response = await uploadEmailConfig(emailConfig);
    console.log('Email Config Uploaded:', response);
  };

  return (
    <div className="max-w-full mx-auto p-4 sm:p-6 md:p-8">
  <div className="space-y-4">
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={emailConfig.title}
        onChange={handleConfigChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
      />
    </div>
    <div>
      <textarea
        name="content"
        placeholder="Content"
        value={emailConfig.content}
        onChange={handleConfigChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
      />
    </div>
    <div>
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={emailConfig.imageUrl}
        onChange={handleConfigChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
      />
    </div>
    <div className="flex justify-center sm:justify-start">
      <button
        onClick={handleUploadConfig}
        className="px-6 py-3 bg-black text-white rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        Upload Email Config
      </button>
    </div>
  </div>
</div>

  );
};

export default EmailConfigUploader;
