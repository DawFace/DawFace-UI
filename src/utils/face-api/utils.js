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
    width: picture.width,
  });

  const drawBox = new faceapi.draw.DrawBox(result.detection.box);

  drawBox.draw(canvas);
};

export const loadReferences = async (data) => {
  return await Promise.all(
    data.map(async (user) => {
      const img = await faceapi.fetchImage(user.pictureUrl);

      const fullFaceDescription = await faceapi
        .detectSingleFace(img)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!fullFaceDescription) {
        throw new Error(`no faces detected for ${user.name}`);
      }

      const faceDescriptors = [fullFaceDescription.descriptor];
      return new faceapi.LabeledFaceDescriptors(
        `${user.name} ${user.firstName}`,
        faceDescriptors
      );
    })
  );
};

export const createFaceMatcher = (references, maxDescriptorDistance) => {
  return new faceapi.FaceMatcher(references, maxDescriptorDistance);
};
