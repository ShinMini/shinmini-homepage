import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import HomePage from '@src/pages/home/HomePage';

import MemoPage from '@src/pages/memo/MemoPage';

import FeatureListPage from '@src/pages/featureList/featureListPage';
import PassportResizer from '@src/pages/featureList/passport-resizer/PassportResizer';

import LoginPage from '@src/pages/login/LoginPage';
import SignUpPage from '@pages/login/SignUpPage';
import FindMyPage from '@pages/login/FindMyPage';

import LoadingPage from '@src/pages/LoadingPage';
import ErrorPage from '@src/pages/ErrorPage';
import App from '@src/App';
import TermsScreen from '@src/pages/terms/TermsScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/feats" element={<FeatureListPage />} />
      <Route path='/terms' element={<TermsScreen />} />
      <Route path="/feats/passport-resizer" element={<PassportResizer />} />
      <Route path="/memo" element={<MemoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/find-my" element={<FindMyPage />} />
    </Route>,
  ),
);

function ReactRouterProvider() {
  return <RouterProvider router={router} fallbackElement={<LoadingPage />} />;
}

export { router, ReactRouterProvider };
