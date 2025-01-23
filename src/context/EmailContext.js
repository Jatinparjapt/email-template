import React, { createContext, useState, useContext } from 'react';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [layout, setLayout] = useState('');
  const [emailConfig, setEmailConfig] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });

  return (
    <EmailContext.Provider value={{ layout, setLayout, emailConfig, setEmailConfig }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmailContext = () => useContext(EmailContext);
