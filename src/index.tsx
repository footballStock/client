import React from 'react';
import {createRoot} from 'react-dom/client';
import {RecoilRoot} from 'recoil';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import './styles/tailwind.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
