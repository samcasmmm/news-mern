import fs from 'fs';
const HttpLogger = (req, res, next) => {
  const logData = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  // Create the "logger" folder if it doesn't exist
  const logFolder = './logger';
  if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
  }

  // Append the log to "request.log" within the "logger" folder
  fs.appendFile('./logger/request.log', logData, (err) => {
    if (err) {
      console.error('Error logging request:', err);
    }
  });

  next();
};

export default HttpLogger;
