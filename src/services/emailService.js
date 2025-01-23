import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://email-template-backend-d3wb.onrender.com';

export const getEmailLayout = async () => {
  try {
    const response = await axios.get(`${API_URL}/getEmailLayout`);
    return response.data;
  } catch (error) {
    console.error('Error fetching email layout:', error);
  }
};

export const uploadImage = async (imageData) => {
  try {
    const formData = new FormData();
    formData.append('image', imageData);
    const response = await axios.post(`${API_URL}/uploadImage`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

export const uploadEmailConfig = async (configData) => {
  try {
    const response = await axios.post(`${API_URL}/uploadEmailConfig`, configData);
    return response.data;
  } catch (error) {
    console.error('Error uploading email config:', error);
  }
};

export const renderAndDownloadTemplate = async (templateData) => {
  try {
    const response = await axios.post(`${API_URL}/renderAndDownloadTemplate`, templateData);
    return response.data;
  } catch (error) {
    console.error('Error rendering template:', error);
  }
};
