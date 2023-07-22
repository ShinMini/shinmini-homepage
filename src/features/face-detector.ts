import '@mediapipe/face_detection';
import '@tensorflow/tfjs-core';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import * as faceDetection from '@tensorflow-models/face-detection';
import { MediaPipeFaceDetectorTfjsModelConfig } from '@tensorflow-models/face-detection';

const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
const detectorConfig = {
  runtime: 'tfjs',
  maxFaces: 1,
} satisfies MediaPipeFaceDetectorTfjsModelConfig;

/**
 * @description - The createDetector method creates a MediaPipeFaceDetector instance.
* The estimateFaces method accepts both image and video in many formats, including: 
@param  tf.Tensor3D - A tf.Tensor3D of shape [1, height, width, 3] containing the pixels of the image or video frame.
@param  HTMLVideoElement @param  HTMLImageElement @param  HTMLCanvasElement 
- A HTMLVideoElement or HTMLImageElement or HTMLCanvasElement or an image URL string. 
@param {Tensor3D} Tensor3D - A tf.Tensor3D of shape [1, height, width, 3] containing the pixels of the image or video frame.

If you want more options, you can pass in a second estimationConfig parameter.
@param estimationConfig - is an object that defines {MediaPipeFaceDetector} specific {configurations} for MediaPipeFaceDetectorTfjsEstimationConfig:
* @params flipHorizontal: Optional. Defaults to false. When image data comes from camera, the result has to flip horizontally.

& @example 
  const estimationConfig = {flipHorizontal: false};
  const faces = await detector.estimateFaces(image, estimationConfig);
**/
const faceDetector = await faceDetection.createDetector(model, detectorConfig);

export default faceDetector;
