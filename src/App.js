import React, { useState } from 'react';
import Header from './components/Header';
import PageCarousel from './components/PageCarousel';
import TopSell from './components/TopSell';
import FormNews from './components/FormNews';
import Footer from './components/Footer';

export const ItemsCartContext = React.createContext('');

function App() {

  const [ itemsCart, updateItemsCart ] = useState(0);

  return (
    <div className="App">
      <ItemsCartContext.Provider value={[ itemsCart, updateItemsCart ]}>
        <Header itemsCart={itemsCart} />
        <PageCarousel />
        <TopSell />
        <FormNews />
        <Footer />
      </ItemsCartContext.Provider>
    </div>
  );
}

export default App;
