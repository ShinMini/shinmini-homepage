/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useState } from 'react';
import { Card, CardContent, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import imageDownload from '@src/features/image-resizer';
import faceDetector from '@src/features/face-detector';
import { Face } from '@tensorflow-models/face-detection';
import { Layout } from '@src/components';
enum ProcessStage {
  Loading = 'Loading',
  Uploaded = 'Uploaded',
  Detected = 'Detected',
  Resized = 'Resized',
}

const FIXED_WIDTH = 413;
const FIXED_HEIGHT = 531;

const ImageResizer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<'png' | 'jpeg'>('jpeg');
  const [fileName, setFileName] = useState('클릭해서 이미지 업로드');
  const [fileSize, setFileSize] = useState({ width: FIXED_WIDTH, height: FIXED_HEIGHT });
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [customCanvas, setCustomCanvas] = useState<HTMLCanvasElement | null>(null);
  const [faceDetectionResult, setFaceDetectionResult] = useState<Face[]>([]); // [x, y, width, height
  const [buttonState, setButtonState] = useState<ProcessStage | null>(null);

  // feature function
  const imageResizer = (image: HTMLImageElement) => {
    let width = image.width;
    let height = image.height;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = height / width;

    setFileSize({ width: image.width, height: image.height });

    if (width > height) {
      width = FIXED_WIDTH;
      height = FIXED_WIDTH * ratio;
    } else {
      height = FIXED_HEIGHT;
      width = FIXED_HEIGHT / ratio;
    }

    const dx = (FIXED_WIDTH - width) / 2;
    const dy = (FIXED_HEIGHT - height) / 2;

    canvas.width = FIXED_WIDTH;
    canvas.height = FIXED_HEIGHT;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, FIXED_WIDTH, FIXED_HEIGHT);
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, dx, dy, width, height);

    const resizedImage = canvas.toDataURL(`image/${outputFormat}`);

    setCustomCanvas(canvas);
    setSelectedImage(resizedImage);
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return alert('파일을 선택해주세요.');
    const file = event.target.files[0];
    setFileName(file.name); // Store file name

    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.style.backgroundColor = '#FFFFFF';

    image.onload = () => {
      imageResizer(image);
      setButtonState(ProcessStage.Uploaded);
    };
  };

  const handleFaceDetector = async () => {
    setButtonState(ProcessStage.Loading);
    if (!customCanvas) return;
    const result = await faceDetector(customCanvas);
    setFaceDetectionResult(result);
    setButtonState(ProcessStage.Detected);

    // Draw keypoints
    const context = customCanvas.getContext('2d');
    if (!context || result.length === 0) return;

    context.fillStyle = '#d25753c7';
    for (const keypoint of result[0].keypoints) {
      const { x, y } = keypoint;
      context.beginPath();
      context.arc(x, y, 5, 0, 2 * Math.PI); // draws a circle
      context.fill();
    }
  };

  const handleImageResize = () => {
    setButtonState(ProcessStage.Loading);
    if (!selectedImage || !faceDetectionResult) return;

    const image = new Image();
    image.src = selectedImage;
    image.style.backgroundColor = '#FFFFFF';

    image.onload = () => {
      imageCropper(image);
      setButtonState(ProcessStage.Resized);
    };
  };

  const imageCropper = (image: HTMLImageElement) => {
    const { keypoints } = faceDetectionResult[0];

    const eyeRight = keypoints.find((point: any) => point.name === 'rightEye');
    const eyeLeft = keypoints.find((point: any) => point.name === 'leftEye');
    const noseTip = keypoints.find((point: any) => point.name === 'noseTip');
    const mouthCenter = keypoints.find((point: any) => point.name === 'mouthCenter');
    const earRight = keypoints.find((point: any) => point.name === 'rightEarTragion');
    const earLeft = keypoints.find((point: any) => point.name === 'leftEarTragion');

    if (!eyeRight || !eyeLeft || !noseTip || !mouthCenter) return alert('얼굴을 찾을 수 없습니다.');
    if (!earRight || !earLeft) return alert('여권 사진의 경우 반드시 귀의 일정 부분 이상이 보여야합니다.');

    // const eyesCenter = {
    //   x: (eyeRight.x + eyeLeft.x) / 2,
    //   y: (eyeRight.y + eyeLeft.y) / 2,
    // };
    const earsCenter = {
      x: (earRight.x + earLeft.x) / 2,
      y: (earRight.y + earLeft.y) / 2,
    };

    const faceWidth = Math.abs(earRight.x - earLeft.x) * 1.15;
    const faceHeight = Math.abs(earsCenter.y - mouthCenter.y) * 3.6;

    const scale = {
      x: image.width / FIXED_WIDTH,
      y: image.height / FIXED_HEIGHT,
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = FIXED_WIDTH;
    canvas.height = FIXED_HEIGHT;
    canvas.style.backgroundColor = '#FFFFFF';
    image.style.backgroundColor = '#FFFFFF';

    const context = canvas.getContext('2d');

    const imageX = Math.abs(faceWidth * scale.x) * 2;
    const imageY = Math.abs(faceHeight * scale.y) * 2;

    const sx = noseTip.x - faceWidth;
    const sy = noseTip.y - faceHeight;
    // Clear previous drawings.
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, sx, sy, imageX, imageY, 0, 0, FIXED_WIDTH, FIXED_HEIGHT);

    const resizedImage = canvas.toDataURL(`image/${outputFormat}`);

    setCustomCanvas(canvas);
    setSelectedImage(resizedImage);
  };

  const handleImageDownload = () => {
    imageDownload(selectedImage, fileName);
    setButtonState(ProcessStage.Resized);
  };

  return (
    <Layout>
      <div className="w-full h-6 flex items-center text-2xl text-slate-600 mt-8 mb-11 ml-8">
        <h1 className="px-4 py-3 bg-slate-200 rounded shadow font-bold">여권 사진 재조합기</h1>
      </div>

      <noscript>여권사진 재조합기, 여권 사진 규격 맞추기, 여권 사진 규격 맞추기 사이트, 여권 사진 사이즈</noscript>
      <div className="flex sm:flex-row gap-6 flex-col justify-center w-fit min-h-80 mx-auto my-2 rounded-xl shadow-lg">
        <CardContent className="flex flex-col gap-6  rounded p-6 min-w-[20rem] min-h-[20rem] max-w-[50%] w-full h-full">
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
              className="text-lg font-semibold w-full box-border p-4 rounded-lg bg-red-300 cursor-pointer break-words line-clamp-2">
              {fileName}
            </label>
            <div className="mt-6">
              <strong>default size:</strong> {Math.round(fileSize.width)} x {Math.round(fileSize.height)}
            </div>
          </div>

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

          <canvas ref={canvasRef} className="m-auto max-w-xl bg-white border-2 border-red-400 rounded shadow" />
          {selectedImage && (
            <div className="flex flex-col">
              <div>
                <strong>Changed to: </strong> {FIXED_WIDTH} x {FIXED_HEIGHT}
              </div>
              <div className="flex flex-col items-center">
                <div className="flex w-full justify-between mt-4">
                  {buttonState === ProcessStage.Loading && (
                    <Button variant="contained" color="primary" fullWidth disabled sx={{ padding: 2 }}>
                      Loading
                    </Button>
                  )}
                  {buttonState === ProcessStage.Uploaded && (
                    <Button
                      variant="contained"
                      color="success"
                      fullWidth
                      onClick={handleFaceDetector}
                      sx={{ padding: 2 }}>
                      Face Detector
                    </Button>
                  )}
                  {buttonState === ProcessStage.Detected && (
                    <Button variant="contained" color="info" fullWidth onClick={handleImageResize} sx={{ padding: 2 }}>
                      Resize
                    </Button>
                  )}
                  {buttonState === ProcessStage.Resized && (
                    <Button
                      variant="contained"
                      color="warning"
                      fullWidth
                      onClick={handleImageDownload}
                      sx={{ padding: 2 }}>
                      Download
                    </Button>
                  )}
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
            <h3 className="font-bold text-2xl m-2 text-slate-600">여권 사진 재조합기 사용 안내 및 주의사항</h3>
            <article className="flex flex-col p-4 ">
              <ul className="font-sans  list-decimal px-4 flex flex-col gap-4 text-slate-600">
                <li className="list-decimal">
                  <strong>여권 사진 재조합기는</strong> 여권 사진 규격에 맞춰 사진을 재조합해주는 도구입니다.
                </li>

                <li className="list-decimal">
                  재조합기 사용 전 배경화면 제거기를 사용해 뒷 배경을 <strong className="text-red-500">제거</strong>할
                  것을 권장합니다.
                  <a
                    href="https://www.adobe.com/kr/express/feature/image/remove-background"
                    target="_blank"
                    rel="noreferrer">
                    <p className="text-blue-500 underline-offset-4 underline">
                      배경화면 제거 웹사이트 링크(Adobe Photoshop Express)
                    </p>
                  </a>
                </li>
                <li className="list-decimal">
                  재조합기를 사용시, 기존 사진의 사이즈를 변경합니다.(413 x 531)px
                  <p className="text-xs text-red-400 mt-1">
                    이때, 원본이 변경되는 것이 아닌, 사이즈가 변경된 복사본이 따로 저장됩니다.
                  </p>
                </li>
                <li className="list-decimal">
                  변경된 사진은 외교부의 여권 사진 규격에 맞춰져 있지만,{' '}
                  <p className="text-red-500">모든 통과 규정을 보장하지 않습니다.</p>
                </li>
                <li className="list-decimal">
                  따라서, 재조합된 사진을 사용해 여권을 신청하시려면,
                  <span className="font-semibold text-red-400">
                    {' '}
                    먼저 외교부의 여권 사진 규격을 확인하시기 바랍니다.
                  </span>
                </li>
                <li className="list-decimal">
                  여권 사진 재조합기를 사용한 사진으로 여권을 신청할 경우 발생하는 문제에 대해서는 책임지지 않습니다.
                </li>
              </ul>
              <p></p>
            </article>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ImageResizer;
