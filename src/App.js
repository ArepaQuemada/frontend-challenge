import React from 'react';
import Header from './components/Header';
import PageCarousel from './components/PageCarousel';
import TopSell from './components/TopSell';
import FormNews from './components/FormNews';

function App() {
  return (
    <div className="App">
      <Header />
      <PageCarousel />
      <TopSell />    
      <PageCarousel />    
      <FormNews />
    </div>
  );
}

export default App;
