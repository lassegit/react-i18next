import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="frontpage.title" t={t} components={[<code />]} />
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('frontpage.learn')}
        </a>
      </header>
    </div>
  );
}

export default App;
