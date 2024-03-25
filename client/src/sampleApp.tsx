import ThemeSwitcher from './components/ThemeSwitcher';
import Loader from './components/common/Loader';
import { Button } from './components/ui/button';
import useShowToast from './utils/Toast';

const SApp = () => {
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
    const promise = saveSettings(false);

    showPromise(promise, {
      loading: 'Saving...',
      success: 'Settings saved!',
      error: 'Could not save.',
    });
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center gap-5 bg-slate-100 transition-all duration-300 ease-in-out dark:bg-slate-800">
        <Button
          size={'lg'}
          onClick={() => showSuccess('worked')}
          className="bg-teal-600 hover:bg-teal-700 dark:text-white"
        >
          Success
        </Button>
        <Button
          size={'lg'}
          variant={'destructive'}
          onClick={() => showError('Error')}
          className="dark:bg-red-500"
        >
          Error
        </Button>
        <Button size={'lg'} variant={'default'} onClick={handlePromiseClick}>
          Promise
        </Button>
        <ThemeSwitcher />
        <Loader size="md" Color="teal" />
      </div>
    </>
  );
};

export default SApp;
