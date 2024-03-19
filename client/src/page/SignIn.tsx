import { Button } from '@/components';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { handleSignIn } from '@/services/users.services';
import { Input } from '@/components/ui/input';
import Carousel from '@/components/Carousel';

const SignIn = () => {
  const [inputData, setInputData] = useState({
    email: 'admin@gmail.com',
    password: 'passwd',
  });

  const signInMutation = useMutation({
    mutationFn: handleSignIn,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  const FormComponent = () => (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <div className="flex flex-1 flex-col items-center justify-center bg-red-400 p-4">
        <Input
          type="text"
          placeholder="email"
          name="email"
          className="rounded-md p-2"
          value={inputData.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          className="rounded-md p-2"
          value={inputData.password}
          onChange={handleInputChange}
        />
        <Button onClick={() => signInMutation.mutateAsync(inputData)}>
          SignIn
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <FormComponent />
    </div>
  );
};

export default SignIn;
