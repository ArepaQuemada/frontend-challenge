import React, { useState } from 'react';
import Header from './components/Header';
import PageCarousel from './components/PageCarousel';
import TopSell from './components/TopSell';
import FormNews from './components/FormNews';

export const ArticleContext = React.createContext('');

function App() {

  const [ articles, updateArticles ] = useState(0);

  return (
    <div className="App">
      <ArticleContext.Provider value={[ articles, updateArticles ]}>
        <Header articles={articles} />
        <PageCarousel />
        <TopSell />
        <FormNews />
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
