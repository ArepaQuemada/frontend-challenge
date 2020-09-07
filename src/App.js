import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PageCarousel from './components/PageCarousel';
import TopSell from './components/TopSell';
import FormNews from './components/FormNews';
import Footer from './components/Footer';

export const ItemsCartContext = React.createContext(0);

function App() {

  const [ itemsCart, updateItemsCart ] = useState(JSON.parse(localStorage.getItem('value')))

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(itemsCart))
  }, [itemsCart])

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
