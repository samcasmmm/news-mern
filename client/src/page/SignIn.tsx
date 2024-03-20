import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { handleSignIn } from '@/services/users.services';
import { Input, Button } from '@/components';

const SignIn = () => {
  const [inputData, setInputData] = useState({
    email: 'admin@gmail.com',
    password: 'passwd',
  });

  const signInMutation = useMutation({ mutationFn: handleSignIn });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  const handleSignInClick = () => {
    signInMutation.mutateAsync(inputData);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
        <div className="flex h-screen w-5/6 flex-col items-center justify-center gap-4 bg-white md:w-3/6 lg:w-2/12">
          <div className="mb-10 flex flex-col items-center justify-center gap-2">
            <p className="text-2xl font-bold text-emerald-500">
              Signin to Your Account
            </p>
            <div className="h-1 w-12 rounded-full bg-emerald-500" />
          </div>
          <Input
            type="text"
            placeholder="email"
            name="email"
            className="rounded-md p-2 ring-offset-emerald-400 focus-visible:ring-1 focus-visible:ring-emerald-400 focus-visible:ring-offset-1"
            value={inputData.email}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            className="rounded-md p-2 ring-offset-emerald-400 focus-visible:ring-1 focus-visible:ring-emerald-400 focus-visible:ring-offset-1"
            value={inputData.password}
            onChange={handleInputChange}
          />
          <Button
            onClick={handleSignInClick}
            className="w-3/6 rounded-full bg-greenEm"
          >
            SignIn
          </Button>
          <p className="">
            Don't have account ?{' '}
            <strong className="cursor-pointer text-emerald-500 duration-200 ease-linear hover:text-emerald-700">
              SignUp
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
