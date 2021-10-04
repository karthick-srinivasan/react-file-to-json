import React, { useState } from 'react';
import { excelToJson } from './excelToJson';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File>();

  const handleChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleClick = async () => {
    const data = await excelToJson(file);

    console.log(data);
  };

  return (
    <div>
      Upload file:
      <input type="file" onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        Parse
      </button>
    </div>
  );
};

export default FileUpload;
