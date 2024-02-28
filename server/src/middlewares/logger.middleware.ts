import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

const LOG_FOLDER_PATH =
    process.env.NODE_ENV !== 'production' ? './src/log' : './dist/log';

const httpLogger = async (req: Request, res: Response, next: NextFunction) => {
    const CURRENT_DATE = new Date()
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, '_');

    const LOG_DATA = `${new Date().toISOString()} - ${req.method} -> ${req.url}\n`;

    try {
        if (!fs.existsSync(LOG_FOLDER_PATH)) {
            fs.mkdirSync(LOG_FOLDER_PATH);
        }

        const logFileName = `Request_${CURRENT_DATE}.log`;
        const logFilePath = path.join(LOG_FOLDER_PATH, logFileName);

        await fs.promises.appendFile(logFilePath, LOG_DATA);
    } catch (err) {
        console.error('Error Logging Request:', err);
    }

    next();
};

export default httpLogger;
