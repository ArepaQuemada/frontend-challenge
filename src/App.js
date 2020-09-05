import React from 'react';
import Header from './components/Header';
import PageCarousel from './components/PageCarousel';
import FormNews from './components/FormNews';

function App() {
  return (
    <div className="App">
      <Header />
      <PageCarousel />    
      <FormNews />
    </div>
  );
}

export default App;
