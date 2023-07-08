import React from "react";
import Dropzone from "react-dropzone";
export default function ImportExcel() {
  const handleDrop = (acceptedFiles: any) => {
    console.log(acceptedFiles);
  };

  return (
    <div>
      <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
