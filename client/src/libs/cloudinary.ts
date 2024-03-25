// useCloudinary.ts
import { Cloudinary } from '@cloudinary/url-gen';
import { useEffect, useState } from 'react';

const useCloudinary = () => {
  const [cloudinaryInstance, setCloudinaryInstance] =
    useState<Cloudinary | null>(null);

  useEffect(() => {
    const initializeCloudinary = async () => {
      try {
        const CLOUD_NAME = await import.meta.env.VITE_CLOUDINARY_NAME;
        const API_KEY = await import.meta.env.VITE_CLOUDINARY_API_KEY;
        const SECRET_KEY = await import.meta.env.VITE_CLOUDINARY_API_SECRET;
        const cloud = new Cloudinary({
          cloud: {
            cloudName: CLOUD_NAME,
            apiKey: API_KEY,
            apiSecret: SECRET_KEY,
          },
        });
        setCloudinaryInstance(cloud);
      } catch (error) {
        console.error('Error initializing Cloudinary:', error);
      }
    };

    initializeCloudinary();

    return () => {};
  }, []);

  return cloudinaryInstance;
};

export default useCloudinary;
