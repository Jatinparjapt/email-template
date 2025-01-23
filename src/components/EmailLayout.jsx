import React, { useEffect } from 'react';
import { useEmailContext } from '../context/EmailContext';
import { getEmailLayout } from '../services/emailService';

const EmailLayout = () => {
  const { layout, setLayout } = useEmailContext();

  useEffect(() => {
    const fetchLayout = async () => {
      const data = await getEmailLayout();
      setLayout(data); // Store the layout data in context
    };

    fetchLayout();
  }, [setLayout]);

  return (
    <div className="email-layout p-4 sm:p-6 md:p-8 lg:p-12">
      {layout ? (
        <div
          className="layout-content max-w-full mx-auto"
          dangerouslySetInnerHTML={{ __html: layout.htmlContent }}
        />
      ) : (
        <p className="text-center text-gray-500">Loading email layout...</p>
      )}
    </div>
  );
};

export default EmailLayout;
