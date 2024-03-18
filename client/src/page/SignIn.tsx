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

  const Slider = () => (
    <div className="relative h-screen flex-1">
      <Carousel autoSlide autoSlideInterval={3000}>
        {slides.map((el, i) => (
          <img
            src={el}
            alt=""
            className=" z-[2] h-screen w-full flex-1 bg-center"
            key={i}
          />
        ))}
      </Carousel>
    </div>
  );

  const slides = [
    'https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg?w=1380&t=st=1710784473~exp=1710785073~hmac=97e9bd4cb985a68481616ec67f373549f4b14375d18c40ed3cd5fe129bc258f5',
    'https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg?w=1380&t=st=1710784432~exp=1710785032~hmac=e22aa8aa6eedcf97d2941dde8c264934ed80f731946ab97af49f6fbe4ea52dd4',
    'https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg?w=1380&t=st=1710784487~exp=1710785087~hmac=e96d610d5db0a11fc2ec256e81dd314dde198f4de20b2d36338b75d1c04e60f0',
    'https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg?t=st=1710784506~exp=1710788106~hmac=763f28d0058dd3c88c6e9a376687114b59cf443c79a0af98f915f234376079a6&w=1380',
  ];

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Slider />
      <FormComponent />
    </div>
  );
};

export default SignIn;
