import { read, utils } from 'xlsx';

export const excelToJson = (file: File): Promise<Array<Object>> => {
  return new Promise((resolve, reject) => {
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
      resolve(utils.sheet_to_json(ws));
    };

    reader.onerror = (e: any) => {
      reject(e.error);
    };
  });
};
