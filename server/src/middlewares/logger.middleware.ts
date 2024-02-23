import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

const LOG_FOLDER_PATH = process.env.LOG_FOLDER_PATH || 'log';

const httpLogger = async (req: Request, res: Response, next: NextFunction) => {
    const LOG_DATA = `${new Date().toISOString()} - ${req.method} -> ${req.url}\n`;

    try {
        if (!fs.existsSync(LOG_FOLDER_PATH)) {
            fs.mkdirSync(LOG_FOLDER_PATH);
        }

        const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const logFileName = `Request_${currentDate}.log`;
        const logFilePath = path.join(LOG_FOLDER_PATH, logFileName);

        await fs.promises.appendFile(logFilePath, LOG_DATA);
    } catch (err) {
        console.error('Error Logging Request:', err);
    }

    next();
};

export default httpLogger;
