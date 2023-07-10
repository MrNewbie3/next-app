import React, { useCallback, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import XLSX from "xlsx";
export default function ImportExcel() {
  const [jsonData, setJsonData] = useState(null);
  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      // @ts-ignore
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 0 });
      // @ts-ignore
      setJsonData(json);
    };

    reader.readAsArrayBuffer(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="max-w-full rounded-md mt-10" {...getRootProps()} style={{ padding: "20px", border: "2px dashed gray" }}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the Excel file here...</p> : <p>Drag 'n' drop an Excel file here, or click to select a file</p>}
      {jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}
    </div>
  );
}
