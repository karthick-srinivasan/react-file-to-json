import { read, utils } from 'xlsx';

export const excelToJson = (file: File): unknown[] => {
  let data: unknown[];
  const reader = new FileReader();

  reader.readAsBinaryString(file);

  reader.onload = (e: ProgressEvent<FileReader>) => {
    /* Parse data */
    const bstr = e.target.result;
    const wb = read(bstr, { type: 'binary' });
    /* Get first worksheet */
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    /* Convert array of arrays */
    data = utils.sheet_to_json(ws);
    console.log(data)
  };

  return data;
};
