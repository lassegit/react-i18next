import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

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
      <footer>
        <p>{t('footer.title')}</p>
        <p>{t('footer.copyright')}</p>
      </footer>
    </div>
  );
}

export default App;
