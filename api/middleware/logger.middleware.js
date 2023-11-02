import fs from 'fs';
import path from 'path';
const HttpLogger = (req, res, next) => {
  const logData = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  // Define the log folder
  const logFolder = './logger';

  // Create the "logger" folder if it doesn't exist
  if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
  }

  // Get the current date in YYYYMMDD format
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');

  // Define the log file name using the current date
  const logFileName = `request-${currentDate}.log`;

  // Construct the full log file path
  const logFilePath = path.join(logFolder, logFileName);

  // Append the log data to the log file
  fs.appendFile(logFilePath, logData, (err) => {
    if (err) {
      console.error('Error logging request:', err);
    }
  });

  next();
};

export default HttpLogger;
