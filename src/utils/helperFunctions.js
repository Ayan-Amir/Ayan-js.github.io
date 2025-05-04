export const getFormDataFile = file => {
  if (!file) {
    console.error('No file provided for upload');
    return null;
  }

  const formData = new FormData();
  formData.append('file', file);
  return formData;
};
