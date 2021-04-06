import React from 'react';
import SignIn from './pages/SignIn';
import GlobalStyles from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

const App = () => (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyles />
    </>
)

export default App;
