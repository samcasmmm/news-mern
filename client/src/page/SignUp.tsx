import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { handleSignUp } from '@/services/users.services';
import { Input, Button } from '@/components';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { error } from 'console';

const SignUp = () => {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    password: 'passwd',
  });
  const navigate = useNavigate();

  const signInMutation = useMutation({ mutationFn: handleSignUp });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  const handleSignInClick = async () => {
    await signInMutation
      .mutateAsync(inputData)
      .then((res) => {
        console.log(res);
        if (signInMutation.isSuccess) {
          navigate('/');
        }
      })
      .catch(async (error) => {
        await toast.error(error?.response.data.message);
      });
  };

  const FormHeading = () => (
    <div className="mb-10 flex flex-col items-center justify-center gap-2">
      <p className="text-2xl font-bold text-emerald-500">
        Signin to Your Account
      </p>
      <div className="h-1 w-12 rounded-full bg-emerald-500" />
    </div>
  );

  const Footer = () => (
    <div className="flex items-center justify-center gap-2 bg-white p-2">
      <p className="p-2 px-4 text-sm font-bold text-black/50 duration-150 hover:text-black">
        <Link to="policy">Privacy Policy</Link>
      </p>
      <div className="h-1 w-1 rounded-full bg-black/80" />

      <p className=" p-2 px-4 text-sm font-bold text-black/50 duration-150 hover:text-black">
        <Link to="policy">Terms & Condition</Link>
      </p>
    </div>
  );

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
        <div className="flex h-screen w-5/6 flex-col items-center justify-center gap-4 bg-white md:w-3/6 lg:w-2/12">
          <FormHeading />
          <Input
            type="text"
            placeholder="name"
            name="name"
            className="rounded-md p-2 font-semibold ring-offset-emerald-400 focus-visible:ring-1 focus-visible:ring-emerald-400 focus-visible:ring-offset-1"
            value={inputData.name}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="email"
            name="email"
            className="rounded-md p-2 font-semibold ring-offset-emerald-400 focus-visible:ring-1 focus-visible:ring-emerald-400 focus-visible:ring-offset-1"
            value={inputData.email}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            className="rounded-md p-2 font-semibold ring-offset-emerald-400 focus-visible:ring-1 focus-visible:ring-emerald-400 focus-visible:ring-offset-1"
            value={inputData.password}
            onChange={handleInputChange}
          />
          <Button
            onClick={handleSignInClick}
            className="w-full rounded-md bg-greenEm font-semibold hover:bg-emerald-600"
          >
            SignUp
          </Button>
          <p className="">
            Don't have account ?{' '}
            <strong className="cursor-pointer text-emerald-500 duration-200 ease-linear hover:text-emerald-700">
              <Link to={'/signIn'}>SignIn</Link>
            </strong>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
