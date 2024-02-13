import * as faceapi from 'face-api.js';

const MODEL_URL = '/models';

export const loadModels = async () => {
  await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
  await faceapi.loadFaceLandmarkModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
};

export const getDescriptor = async (image) => {
  return faceapi
    .detectSingleFace(image)
    .withFaceLandmarks()
    .withFaceDescriptor();
};

export const drawLandmarks = (canvas, descriptor) => {
  faceapi.draw.drawDetections(canvas, descriptor);
  faceapi.draw.drawFaceLandmarks(canvas, descriptor);
};
