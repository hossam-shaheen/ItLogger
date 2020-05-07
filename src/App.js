import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Search from './components/layout/Search';
import FloatIcons from './components/layout/FloatIcons';
import M from 'materialize-css';
import Logs from './components/logs/Logs';
import EditLog from './components/logs/EditLog';
import AddLog from './components/logs/AddLog';
import AddTechs from './components/techs/AddTechs';
import ViewTechs from './components/techs/ViewTechs';
import { store } from './data/store';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <Search />
      <div className="container">
        <Logs />
      </div>
      <AddLog />
      <EditLog />
      <AddTechs />
      <ViewTechs />
      <FloatIcons />
    </Provider>
  );
}

export default App;
