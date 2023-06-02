import Navbar from './components/Navbar';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './lib/firebase/firebase';

const style = {
  container: `max-w-4xl mx-auto p-4`,
  input: `border border-gray-400 p-2 rounded `,
  error: `text-red-500 text-xs italic hidden`,
  success: `text-green-500 text-xs italic hidden`,
  cardContainer: `border border-gray-400 p-2 rounded mt-2 flex flex-col`,
};

function App() {
  useAuthState(auth);

  return (
    <div className={style.container}>
      <Navbar />
      <h1 className="text-4xl font-bold m-3 from-slate-400 to-slate-700">Hello ShinMini!</h1>

      <div className="mt-4 flex flex-col justify-center">
        <div className="mt-4">
          <form className="flex">
            <input className="border border-gray-400 p-2 rounded flex-grow mr-2" placeholder="Title" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3">
              Submit
            </button>
          </form>

          <div className="mt-4">
            <p className={style.error}>Error</p>
            <p className={style.success}>Success</p>

            <div className={style.cardContainer}>
              <div className="flex justify-between">
                <div className="text-blue-500">
                  <span className="font-bold text-black">Last Message:</span> Hello World!
                  <span className="text-gray-400"> - 3 days ago</span>
                </div>
                <div className="flex">
                  <button className="text-green-500 hover:text-green-600 ml-2">Save</button>
                  <button className="text-blue-500 hover:text-blue-600 ml-2">Edit</button>
                  <button className="text-red-500 hover:text-red-600 ml-2">Delete</button>
                </div>
              </div>

              <div className="mt-2">
                <textarea className="border border-gray-400 p-2 rounded w-full" placeholder="Message" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
