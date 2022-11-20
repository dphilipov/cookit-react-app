import appwrite from '../config/appwrite';

function useImagePreview(imageId, quality) {
  return appwrite.storage.getFilePreview(
    imageId,
    undefined,
    undefined,
    undefined,
    quality
  );
}

export default useImagePreview;
