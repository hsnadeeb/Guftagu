import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));
const NotFound = lazy(()=> import('./pages/NotFound'))

const App = () => {
  const user = true; // Replace this with your user authentication logic

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected routes */}
        <Route element={<ProtectRoute user={user}/>}>
                <Route path="/" element={<Home />} />
                <Route path="/chat/:chatID" element={<Chat />} />
                <Route path="/groups" element={<Groups />} />
        </Route>

        {/* Public route */}
        <Route
          path="/login"
          element={
            <ProtectRoute user={!user} redirect="/">
                <Login />
            </ProtectRoute>
          }
        />

        
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
