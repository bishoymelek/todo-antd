import React from 'react';
import ReactDom from 'react-dom';

import 'assets/styles/styles.css';
import { store, persistor } from 'store';
import { App } from 'App';

const targetHTMLElement = document.getElementById('root');

ReactDom.render(
  <App store={store} storePersistor={persistor} />,
  targetHTMLElement
);
