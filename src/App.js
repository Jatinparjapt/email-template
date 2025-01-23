import React from 'react';
import EmailLayout from './components/EmailLayout';
import ImageUploader from './components/ImageUploader';
import EmailConfigUploader from './components/EmailConfigUploader';
import EmailTemplateRenderer from './components/EmailTemplateRenderer';

const App = () => {
  return (
    <div className="p-6 bg-slate-800 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Email Builder</h1>
      <EmailLayout />
      <ImageUploader />
      <EmailConfigUploader />
      <EmailTemplateRenderer />
    </div>
  );
};

export default App;
