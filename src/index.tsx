import React from 'react';
import {createRoot} from 'react-dom/client';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import './styles/tailwind.css';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </QueryClientProvider>,
);
