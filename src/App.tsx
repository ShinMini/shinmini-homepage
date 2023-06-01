import Navbar from './components/Navbar';

import { auth } from './lib/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  container: `max-w-4xl mx-auto p-4 text-center`,
  button: `bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3`,
  buttonOutline: `border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-600 font-bold py-2 px-4 rounded w-1/3`,
  input: `border border-gray-400 p-2 rounded`,
  error: `text-red-500 text-xs italic`,
  success: `text-green-500 text-xs italic`,
};

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.container}>
      <Navbar />
      <h1 className="text-4xl font-bold">Hello World</h1>

      <div className="mt-4 flex flex-col justify-center">
        <button className={style.button}>Button</button>
        <button className={style.buttonOutline}>Button</button>

        <div className="mt-4">
          <input className={style.input} placeholder="Input" />

          <div className="mt-4">
            <p className={style.error}>Error</p>
            <p className={style.success}>Success</p>

            <div className="mt-4">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
