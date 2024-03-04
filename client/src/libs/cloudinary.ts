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
        const cloud = new Cloudinary({ cloud: { cloudName: CLOUD_NAME } });
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
