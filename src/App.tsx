import React from 'react';
import SignIn from './pages/SignIn';
import GlobalStyles from './styles/global';
import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App = () => (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyles />
    </>
)

export default App;
