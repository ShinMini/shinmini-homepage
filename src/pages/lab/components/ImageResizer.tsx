import React, { ChangeEvent, useState } from 'react';
import { Card, CardContent, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import { saveAs } from 'file-saver';

const ImageResizer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<'png' | 'jpeg'>('png');
  const [maxSize, setMaxSize] = useState(500);
  const [fileName, setFileName] = useState('No file chosen');
  const [fileSize, setFileSize] = useState({ width: 0, height: 0 });
  const [resizedImage, setResizedImage] = useState({ width: 500, height: 0 });

  const handleChangeDimensions = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxSize(parseInt(event.target.value));
    if (!selectedImage) return;

    const ratio = fileSize.height / fileSize.width;

    const width = parseInt(event.target.value);
    const height = Math.round(width * ratio);

    setResizedImage({ width, height });
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) {
      return;
    }

    setFileName(file.name); // Store file name

    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = () => {
      const canvas = document.createElement('canvas');

      let width = image.width;
      let height = image.height;

      setFileSize({ width, height });

      if (width > height) {
        if (width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width *= maxSize / height;
          height = maxSize;
        }
      }

      canvas.width = width;
      canvas.height = height;

      setResizedImage({ width, height });

      const context = canvas.getContext('2d');
      context?.drawImage(image, 0, 0, width, height);

      const resizedImage = canvas.toDataURL(`image/${outputFormat}`);
      setSelectedImage(resizedImage);
    };
  };

  const handleImageResize = () => {
    if (!selectedImage) return;
    const image = new Image();
    image.src = selectedImage;

    image.onload = () => {
      const canvas = document.createElement('canvas');

      let width = image.width;
      let height = image.height;

      setFileSize({ width, height });

      if (width > height) {
        if (width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width *= maxSize / height;
          height = maxSize;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext('2d');
      context?.drawImage(image, 0, 0, width, height);

      const resizedImage = canvas.toDataURL(`image/${outputFormat}`);
      setSelectedImage(resizedImage);
    };
  };

  const handleImageDownload = () => {
    if (!selectedImage) return;

    // Convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (selectedImage.split(',')[0].indexOf('base64') >= 0) byteString = atob(selectedImage.split(',')[1]);
    else byteString = unescape(selectedImage.split(',')[1]);

    // Write the bytes of the string to an ArrayBuffer
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // Create blob from ArrayBuffer and initiate download
    const blob = new Blob([ia], { type: `image/${outputFormat}` });
    saveAs(blob, `resized-image.${outputFormat}`);
  };

  return (
    <Card className="flex flex-col items-center justify-center w-80 max-w-[30rem] min-h-80 mx-auto my-6 p-6 bg-white rounded-xl shadow-lg">
      <CardContent className="flex flex-col gap-5">
        <div className="mb-6 w-full">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden w-full"
            id="upload-button"
          />
          <label
            htmlFor="upload-button"
            className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-teal-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 cursor-pointer">
            {fileName}
          </label>
          <div className="mt-6">
            <strong>Original Dimensions:</strong> {Math.round(fileSize.width)} x {Math.round(fileSize.height)}
          </div>
        </div>

        <FormControl fullWidth className="mb-6">
          <TextField
            type="number"
            label="Max size"
            value={maxSize}
            onChange={handleChangeDimensions}
            variant="outlined"
          />
        </FormControl>

        <FormControl fullWidth variant="outlined" className="mb-6">
          <InputLabel id="output-format-label">Output format</InputLabel>
          <Select
            labelId="output-format-label"
            value={outputFormat}
            onChange={e => setOutputFormat(e.target.value as 'png' | 'jpeg')}
            label="Output format">
            <MenuItem value="png">PNG</MenuItem>
            <MenuItem value="jpeg">JPEG</MenuItem>
          </Select>
        </FormControl>

        {selectedImage && (
          <div className="flex flex-col">
            <div className="mt-6">
              <strong>Change Dimensions to: </strong> {Math.round(resizedImage.width)} x{' '}
              {Math.round(resizedImage.height)}
            </div>
            <div className="flex flex-col items-center">
              <img src={selectedImage} alt="Resized" className="object-contain mt-4 w-full h-64 rounded shadow-lg" />
              <div className="flex w-full justify-between mt-6">
                <Button variant="contained" color="info" className="mt-4" onClick={handleImageResize}>
                  Resize
                </Button>
                <Button variant="contained" color="warning" className="mt-4" onClick={handleImageDownload}>
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageResizer;
