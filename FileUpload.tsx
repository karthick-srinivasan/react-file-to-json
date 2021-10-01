import React, {useState} from 'react';

const FileUpload: React.FC = () => {
  const [ file, setFile ] = useState<File>();

  const handleChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    const { files } = e.target;

    if(files && files[0]) {
      setFile(files[0]);
    }
  }

  const handleClick = () => {
    const reader = new FileReader();

    reader.readAsBinaryString(file);

    reader.onload = (e: ProgressEvent<FileReader>) => {
      console.log(e.target.result)
    }
  }

  return (
    <div>
      Upload file:
      <input type="file" onChange={handleChange}/>
      <button type="submit" onClick={handleClick}>Parse</button>
    </div>
  );
}

export default FileUpload;