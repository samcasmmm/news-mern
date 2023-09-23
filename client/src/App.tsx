import React from 'react';
import { Button } from './components/ui/button';
import toast from 'react-hot-toast';

const App = () => {
  return (
    <>
      <div className='flex w-full h-screen items-center justify-center'>
        <Button size={'lg'} onClick={() => toast.success('worked')}>
          Hello
        </Button>
      </div>
    </>
  );
};

export default App;
