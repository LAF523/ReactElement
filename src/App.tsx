import { RouterProvider } from 'react-router-dom';
import React from 'react';
import router from './routes';
import store from '@/stores';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  );
}

export default App;
