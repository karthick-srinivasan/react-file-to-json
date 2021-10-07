import React, { useState } from 'react';
import { excelToJson } from './excelToJson';
import { validateJsonSchema } from './jsonSchemaValidator';

const schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
    },
    required: ['id', 'name'],
    additionalProperties: false,
  },
};

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

    console.log('data', data);

    const validate = validateJsonSchema(schema);

    const valid = validate(data);
    if (!valid) console.error('validate error', validate.errors);
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
