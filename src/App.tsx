import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';

import { Routes } from 'routes';

interface IAppProps {
  store: Store;
  storePersistor: Persistor;
}

export const App: React.FC<IAppProps> = ({ store, storePersistor }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading ...</div>} persistor={storePersistor}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};
