import fs from 'fs';
import path from 'path';
const HttpLogger = (req, res, next) => {
  const logData = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  const logFolder = './logger';

  if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
  }

  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');

  const logFileName = `request-${currentDate}.log`;

  const logFilePath = path.join(logFolder, logFileName);

  fs.appendFile(logFilePath, logData, (err) => {
    if (err) {
      console.error('Error logging request:', err);
    }
  });

  next();
};

export default HttpLogger;
