import { saveAs } from 'file-saver';

const decodeData = data => {
  if (data.split(',')[0].indexOf('base64') >= 0) return atob(data.split(',')[1]);
  return unescape(data.split(',')[1]);
};

const byteArrayFromDecodedData = decodedData => {
  const byteArray = new Uint8Array(decodedData.length);
  for (let i = 0; i < decodedData.length; i++) {
    byteArray[i] = decodedData.charCodeAt(i);
  }
  return byteArray;
};

const imageDownload = (selectedImage?: string | null, outputFormat = 'png') => {
  if (!selectedImage) return;

  const decodedData = decodeData(selectedImage);
  const byteArray = byteArrayFromDecodedData(decodedData);

  const blob = new Blob([byteArray], { type: `image/${outputFormat}` });
  saveAs(blob, `passport-${outputFormat}`);
};

export default imageDownload;

export { decodeData, byteArrayFromDecodedData };
