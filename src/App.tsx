import React from 'react';
import Header from './commons/Header';
import Sidebar from './commons/Sidebar';
import Main from './pages/Posts';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;
