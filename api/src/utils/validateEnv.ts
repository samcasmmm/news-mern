import { cleanEnv, str, port } from 'envalid';

function validateEnv(): void {
  try {
    cleanEnv(process.env, {
      NODE_ENV: str({
        choices: ['development', 'production'],
      }),
      PORT: port({ default: 9001 }),
      MONGO_PATH: str(),
      MONGO_USER: str(),
      MONGO_PASSWORD: str(),
      SECRET_KEY: str(),
    });
    console.log('Validate ENV');
  } catch (error) {
    console.error('Invalid ENV:', error);
  }
}

export default validateEnv;
