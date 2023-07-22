import React, { ChangeEvent, useState } from 'react';
import { Card, CardContent, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import imageDownload from '@src/features/image-resizer';

const ImageResizer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<'png' | 'jpeg'>('jpeg');
  const [maxSize, setMaxSize] = useState(413);
  const [fileName, setFileName] = useState('클릭해서 이미지 업로드');
  const [fileSize, setFileSize] = useState({ width: 0, height: 0 });
  const [resizedImage, setResizedImage] = useState({ width: 500, height: 0 });

  // feature function
  const imageResizer = (image: HTMLImageElement) => {
    let width = image.width;
    let height = image.height;

    const canvas = document.createElement('canvas');
    const ratio = height / width;

    setFileSize({ width: image.width, height: image.height });

    width = maxSize;
    height = maxSize * ratio;

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context?.drawImage(image, 0, 0, width, height);

    const resizedImage = canvas.toDataURL(`image/${outputFormat}`);
    setResizedImage({ width, height });

    setSelectedImage(resizedImage);
  };

  // event handler functions
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
      imageResizer(image);
    };
  };

  const handleImageResize = () => {
    if (!selectedImage) return;
    const image = new Image();
    image.src = selectedImage;

    image.onload = () => {
      imageResizer(image);
    };
  };

  const handleImageDownload = () => {
    imageDownload(selectedImage, fileName);
  };

  return (
    <div className="flex sm:flex-row gap-6 flex-col justify-center w-full min-h-80 mx-auto my-2 rounded-xl shadow-lg">
      <noscript>여권사진 재조합기, 여권 사진 규격 맞추기, 여권 사진 규격 맞추기 사이트, 여권 사진 사이즈</noscript>
      <CardContent className="flex flex-col gap-6 bg-slate-50 rounded p-6 min-w-[20rem] min-h-[20rem] w-full h-full">
        <div className="mb-2 w-full h-full">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden w-full"
            id="upload-button"
          />
          <label
            htmlFor="upload-button"
            className="w-full box-border p-2 rounded-lg bg-red-300 cursor-pointer break-words line-clamp-2">
            {fileName}
          </label>
          <div className="mt-6">
            <strong>기존 사이즈:</strong> {Math.round(fileSize.width)} x {Math.round(fileSize.height)}
          </div>
        </div>

        <FormControl fullWidth className="mb-6">
          <TextField
            type="number"
            label="Max size(px)"
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
              <img src={selectedImage} alt="Resized" className="object-contain mt-4 w-full h-full rounded shadow-lg" />
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
      <div className="flex flex-col gap-4">
        <Card>
          <h3 className="font-bold text-2xl m-2 text-slate-600">
            <a href="https://www.passport.go.kr/home/kor/contents.do?menuPos=32" target="_blank" rel="noreferrer">
              여권 사진 규격 안내{' '}
              <span className="text-blue-500 underline-offset-4 underline text-sm">(외교부 규격 참조)</span>
            </a>
          </h3>
          <article className="flex flex-col p-4 ">
            <ul className="font-sans  list-decimal px-4 flex flex-col gap-1 text-slate-600">
              <li className="list-decimal">파일 크기 500KB 이하, 파일 형식 JPG/JPEG 가능</li>
              <li className="list-decimal">가로 413 픽셀(pixel), 세로 531픽셀(pixel) 사이즈 권장</li>
              <li className="list-decimal">해상도는 300dpi 권장</li>
              <li className="list-decimal">6개월 이내에 촬영된 사진</li>
            </ul>
            <p></p>
          </article>
        </Card>
        <Card>
          <h3 className="font-bold text-2xl m-2 text-slate-600">여권 사진 재조합기 사용 안내 </h3>
          <article className="flex flex-col p-4 ">
            <h4>
              <strong>주의사항</strong>
            </h4>
            <h4>여권 사진 재조합기는, </h4>
            <ul className="font-sans  list-decimal px-4 flex flex-col gap-1 text-slate-600">
              <li className="list-decimal">여권 사진 규격에 맞춰 사진을 재조합해주는 도구입니다.</li>
              <li className="list-decimal">
                재조합기를 사용시, 기존 사진의 사이즈를 변경합니다.(413 x 531)px
                <p className="text-xs text-red-400 mt-1">
                  이때, 원본이 변경되는 것이 아닌, 사이즈가 변경된 복사본이 따로 저장됩니다.
                </p>
              </li>
              <li className="list-decimal">변경된 사진은 외교부의 여권 사진 규격에 맞지 않을 수 있습니다.</li>
              <li className="list-decimal">변경된 여권사진은 기존 사진의 비율을 준수합니다.</li>
            </ul>
          </article>
        </Card>
      </div>
    </div>
  );
};

export default ImageResizer;
