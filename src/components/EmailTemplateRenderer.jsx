import React from 'react';
import { renderAndDownloadTemplate } from '../services/emailService';

const EmailTemplateRenderer = () => {
  const handleRenderTemplate = async () => {
    const response = await renderAndDownloadTemplate({});
    console.log('Template Rendered:', response);
  };

  return (
    <>
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
  <div className="max-w-xl mx-auto">
    <button
      onClick={handleRenderTemplate}
      className="w-full sm:w-auto py-2 px-4 bg-slate-700 text-white rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
    >
      Render and Download Template
    </button>
  </div>
</div>

    </>
  );
};

export default EmailTemplateRenderer;
