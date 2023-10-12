/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useState } from 'react';
import { Card, CardContent, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import imageDownload from '@src/pages/featureList/passport-resizer/utils/image-resizer';
import faceDetector from '@src/pages/featureList/passport-resizer/utils/face-detector';
import { Face } from '@tensorflow-models/face-detection';
enum ProcessStage {
  Uploaded = 'Uploaded',
  Detected = 'Detected',
  Resized = 'Resized',
}

const FIXED_WIDTH = 413;
const FIXED_HEIGHT = 531;

const PassportResizer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<'png' | 'jpeg'>('jpeg');
  const [fileName, setFileName] = useState('클릭해서 이미지 업로드');
  const [fileSize, setFileSize] = useState({ width: FIXED_WIDTH, height: FIXED_HEIGHT });
  const [resizedImageSize, setResizedImageSize] = useState({ width: FIXED_WIDTH, height: FIXED_HEIGHT });
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

    context.fillStyle = '#fff';
    context.fill();
    context.drawImage(image, dx, dy, width, height);

    const resizedImage = canvas.toDataURL(`image/${outputFormat}`);

    setCustomCanvas(canvas);
    setResizedImageSize({ width, height });
    setSelectedImage(resizedImage);
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return alert('파일을 선택해주세요.');
    const file = event.target.files[0];
    setFileName(file.name); // Store file name

    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = () => {
      imageResizer(image);
      setButtonState(ProcessStage.Uploaded);
    };
  };

  const handleFaceDetector = async () => {
    if (!customCanvas) return;
    const result = await faceDetector(customCanvas);
    setFaceDetectionResult(result);
    setButtonState(ProcessStage.Detected);

    // Draw keypoints
    const context = customCanvas.getContext('2d');
    if (!context || result.length === 0) return;

    context.fillStyle = '#FF0000'; // red color
    for (const keypoint of result[0].keypoints) {
      const { x, y } = keypoint;
      context.beginPath();
      context.arc(x, y, 5, 0, 2 * Math.PI); // draws a circle
      context.fill();
    }
  };

  const handleImageResize = () => {
    if (!selectedImage || !faceDetectionResult) return;

    const image = new Image();
    image.src = selectedImage;

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

    // Calculate the center of the face.
    const eyesY = Math.abs(eyeRight.y + eyeLeft.y) / 2;

    // Calculate the new dimensions.
    const eyesDistance = Math.abs(eyeRight.x - eyeLeft.x);
    const eyeFromNose = Math.abs(eyesY - noseTip.y);
    const headFromNose = eyeFromNose * 4.5;
    const headFromMouth = Math.abs(mouthCenter.y - noseTip.y) * 3;

    const faceWidth = eyesDistance * 1.5;
    const faceHeight = headFromMouth + headFromNose;

    const imageMargin = {
      sx: Math.abs(noseTip.x - faceWidth / 2 - 30),
      sy: Math.abs(noseTip.y - headFromNose / 2 - 40),
    };

    const newWidth = faceWidth + imageMargin.sx * 2;
    const newHeight = faceHeight + imageMargin.sy * 2;

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = FIXED_WIDTH;
    canvas.height = FIXED_HEIGHT;

    const context = canvas.getContext('2d');

    const mx = Math.abs(FIXED_WIDTH / 2 - noseTip.x) / 2;
    const my = Math.abs(FIXED_HEIGHT / 2 - noseTip.y) / 2;

    const sx = noseTip.x - 180 - mx;
    const sy = noseTip.y - 200 - my;

    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#fff';
    context.drawImage(image, sx, sy, newWidth, newHeight, sx, sy, FIXED_WIDTH, FIXED_HEIGHT);

    const resizedImage = canvas.toDataURL(`image/${outputFormat}`);

    setCustomCanvas(canvas);
    setSelectedImage(resizedImage);
  };

  const handleImageDownload = () => {
    imageDownload(selectedImage, fileName);
    setButtonState(ProcessStage.Resized);
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

        <canvas ref={canvasRef} className={`mt-4 w-full h-full ${buttonState === ProcessStage.Resized && 'hidden'}`} />
        {selectedImage && (
          <img
            src={selectedImage}
            alt="resized"
            className={`mt-4 w-full h-full ${buttonState !== ProcessStage.Resized && 'hidden'}`}
          />
        )}
        {selectedImage && (
          <div className="flex flex-col">
            <div>
              <strong>Change Dimensions to: </strong> {Math.round(resizedImageSize.width)} x{' '}
              {Math.round(resizedImageSize.height)}
            </div>
            <div className="flex flex-col items-center">
              <div className="flex w-full justify-between mt-4">
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
              여권 사진 규격 안내
              <span className="ml-4 text-blue-500 underline-offset-4 underline text-sm">(외교부 규격 참조)</span>
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
            <h4 className="mb-2 text-lg">
              여권 사진 재조합기
              <strong> 사용 주의사항</strong>
            </h4>
            <ul className="font-sans  list-decimal px-4 flex flex-col gap-1 text-slate-600">
              <li className="list-decimal">여권 사진 규격에 맞춰 사진을 재조합해주는 도구입니다.</li>
              <li className="list-decimal">
                재조합기를 사용시, 기존 사진의 사이즈를 변경합니다.(413 x 531)px
                <p className="text-xs text-red-400 mt-1">
                  이때, 원본이 변경되는 것이 아닌, 사이즈가 변경된 복사본이 따로 저장됩니다.
                </p>
              </li>
              <li className="list-decimal">변경된 사진은 외교부의 여권 사진 규격에 맞지 않을 수 있습니다.</li>
              <li className="list-decimal">
                따라서, 재조합된 사진을 사용해 여권을 신청하시려면, 먼저 외교부의 여권 사진 규격을 확인하시기 바랍니다.
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
  );
};

export default PassportResizer;
