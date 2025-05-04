import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchUser } from '../actions';

import ProtectedRoute from './ProtectedRoute';
import Landing from './Landing';
import SurveyNew from './SurveyNew';
import AppLayout from './AppLayout';
import Surveys from './Surveys';
import Header from './Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Landing />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path='/surveys' element={<Surveys />} />
            <Route path='/survey/new' element={<SurveyNew />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
