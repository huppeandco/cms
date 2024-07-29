import React, { useState } from 'react';
import * as XLSX  from 'xlsx';
import ImageUpload from '../pages/uploadproduct';

function CsvFileReader() {
  const [xlsxData, setXLSXData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0]; // Assuming we're reading the first sheet
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setXLSXData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      
      <p>upload file now</p>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      {xlsxData && (
        <div>
          <h2>XLSX Data</h2>
          <table>
          
           
              {xlsxData.slice(1).map((row, rowIndex ) => (
                <>
                 
                    <ImageUpload key={rowIndex}  row={row}/>
                 
                </>
              ))}
           
          </table>
        </div>
      )}
    </div>
  );
}




export default CsvFileReader;

const XLSXImageExtractor = () => {
 const [images, setImages] = useState([]);

 const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const images = [];
      // Assuming images are in the first column
      ws['!ref'].split(':').forEach((cell, index) => {
        const cellAddress = XLSX.utils.encode_cell({ c: index, r: 0 });
        const cellValue = ws[cellAddress]?.v;
        if (cellValue && cellValue.startsWith('http')) {
          // Assuming the cell contains a URL to the image
          images.push(cellValue);
        }
      });
      setImages(images);
    };
    reader.readAsBinaryString(file);
 };

 return (
    <div>
      <p>cgose a file now !!!!!!!!!!!!!!!!!!!</p>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
 );
};

//export default XLSXImageExtractor;
