import React, { useState } from 'react';
import { excelToJson } from './excelToJson';
import { validate } from './jsonSchemaValidator';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File>();

  const handleChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleParse = async () => {
    const data = await excelToJson(file);

    console.log(data);

    const valid = validate(data);
    if (!valid) console.log(validate.errors);
  };

  return (
    <div>
      Upload file:
      <input type="file" onChange={handleChange} />
      <button type="submit" onClick={handleParse}>
        Parse
      </button>
    </div>
  );
};

export default FileUpload;
