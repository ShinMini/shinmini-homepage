import { useAppSelector } from '@hooks/useRedux';
import Loading from './pages/LoadingPage';

const se = {
  container: `w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-30 z-50`,
  toast: `w-full max-w-sm bg-white rounded-lg shadow-lg p-4 animate-bounce flex justify-center items-center flex-col`,
  message: `text-gray-800 text-sm font-semibold`,
  error: `text-red-500 text-sm`,
};

const ToastEvent = () => {
  const { isLoading, message, error, display } = useAppSelector(state => state.toast);

  if (display) {
    if (isLoading) {
      return (
        <div className={se.container}>
          <Loading />
        </div>
      );
    } else {
      return (
        <div className={se.container}>
          <div className={se.toast}>
            {error ? <p className={se.error}>{error}</p> : <p className={se.message}>{message}</p>}
          </div>
        </div>
      );
    }
  }

  return <></>;
};

export default ToastEvent;
