import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { handleSignIn } from '@/services/users.services';
import { Input, Button } from '@/components/ui'; // Assuming Input and Button are components from '@/components/ui'

const SignIn = () => {
  const [inputData, setInputData] = useState({
    email: 'admin@gmail.com',
    password: 'passwd',
  });

  const signInMutation = useMutation({mutationFn:handleSignIn});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData(prevInputData => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  const handleSignInClick = () => {
    signInMutation.mutateAsync(inputData);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white w-5/6 h-screen flex items-center justify-center flex-col">
        <Input
          type="text"
          placeholder="email"
          name="email"
          className="rounded-md p-2 focus-visible:ring-1 ring-offset-emerald-400 focus-visible:ring-emerald-400 focus-visible:ring-offset-1"
          value={inputData.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          className="rounded-md p-2 focus-visible:ring-1 ring-offset-emerald-400 focus-visible:ring-emerald-400 focus-visible:ring-offset-1"
          value={inputData.password}
          onChange={handleInputChange}
        />
        <Button onClick={handleSignInClick} className='bg-greenEm w-3/6 rounded-full'>
          SignIn
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
