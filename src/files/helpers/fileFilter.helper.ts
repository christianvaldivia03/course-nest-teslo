export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  console.log(file);
  if (!file) return callback(new Error('No file'), false);
  const fileExtension = file.mimetype.split('/')[1];
  const valideExtensions = ['jpg','png',  'jpeg', 'gif'];
    if (!valideExtensions.includes(fileExtension))
        return callback(null, false);
  callback(null, true);
};
