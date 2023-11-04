import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './pages/Main';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;
