import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  console.log({ i18n });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans>
            Edit <code>src/App.tsx</code> and save to reload.
          </Trans>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('frontpage.learn')}
        </a>
      </header>
    </div>
  );
}

export default App;
