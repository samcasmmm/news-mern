import toast from 'react-hot-toast';

const useShowToast = () => {
  const showSuccess = (message: string) => {
    toast.success(message);
  };

  const showError = (message: string) => {
    toast.error(message);
  };

  const showPromise = <T>(
    promise: Promise<T>,
    options: {
      loading?: string;
      success?: string;
      error?: string;
    } = {}
  ) => {
    const {
      loading = 'Loading...',
      success = 'Success!',
      error = 'Error!',
    } = options;

    return toast.promise(promise, {
      loading,
      success,
      error,
    });
  };

  return { showSuccess, showError, showPromise };
};

export default useShowToast;
