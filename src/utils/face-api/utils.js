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

export const drawLandmarks = (picture, canvas, descriptor) => {
  faceapi.matchDimensions(canvas, picture);

  const result = faceapi.resizeResults(descriptor, {
    height: picture.height,
    width: picture.width
  });

  const drawBox = new faceapi.draw.DrawBox(result.detection.box);
  const drawLandmarks = new faceapi.draw.DrawFaceLandmarks(result.landmarks);

  drawBox.draw(canvas);
  drawLandmarks.draw(canvas);
};
