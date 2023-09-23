import { Button } from './components/ui/button';
import useShowToast from './utils/Toast';

const App = () => {
  const { showSuccess, showError, showPromise } = useShowToast();

  const saveSettings = (isSuccess: boolean) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isSuccess) {
          resolve('Settings saved successfully');
        } else {
          reject('Could not save settings');
        }
      }, 2000);
    });
  };

  const handlePromiseClick = () => {
    const promise = saveSettings(true);

    showPromise(promise, {
      loading: 'Saving...',
      success: 'Settings saved!',
      error: 'Could not save.',
    });
  };

  return (
    <>
      <div className='flex w-full h-screen items-center justify-center gap-5 bg-slate-100'>
        <Button
          size={'lg'}
          onClick={() => showSuccess('worked')}
          className='bg-teal-600 hover:bg-teal-700'
        >
          Success
        </Button>
        <Button
          size={'lg'}
          variant={'destructive'}
          onClick={() => showError('Error')}
        >
          Error
        </Button>
        <Button size={'lg'} onClick={handlePromiseClick}>
          Promise
        </Button>
      </div>
    </>
  );
};

export default App;
