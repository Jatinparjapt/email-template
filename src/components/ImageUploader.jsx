import React, { useState } from 'react';
import { uploadImage } from '../services/emailService';

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    const response = await uploadImage(image);
    console.log('Image uploaded:', response);
  };

  return (
    <>
     <div className="p-4 sm:p-6 md:p-8 lg:p-12">
  <div className="max-w-xl mx-auto space-y-4">
    <input
      type="file"
      onChange={handleImageChange}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
    />
    <button
      onClick={handleUpload}
      className="w-full sm:w-auto py-2 px-4 bg-slate-700 text-white rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
    >
      Upload Image
    </button>
  </div>
</div>

    </>
  );
};

export default ImageUploader;
