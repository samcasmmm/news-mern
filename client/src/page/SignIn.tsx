import { Button } from '@/components';
import { useState } from 'react';

const SignIn = () => {
  const [inputData, setInputData] = useState({
    email: 'admin@gmail.com',
    password: 'passwdd',
  });

  const handleSignUp = async () => {
    try {
      // ...
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <input
          type="text"
          placeholder="email"
          name="email"
          className="rounded-md p-2"
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          className="rounded-md p-2"
        />
        <Button onClick={handleSignUp}>SignIn</Button>
      </div>
    </div>
  );
};

export default SignIn;
