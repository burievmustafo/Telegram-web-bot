
import { useCallback, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Cart from './components/cart/cart'
import Home from './pages/Home/Home'
import CourseDetails from './pages/CourseDetails/CourseDetails'
import {getData} from './constants/db'
const courses = getData();

const telegram = window.Telegram.WebApp;



const App = () => {
  const [cartItems, setcartItems] = useState([])
  const location = useLocation();

  useEffect(() => {
    telegram.ready();
  }, []);

  const onAddItem = item => {
    const existItem = cartItems.find(x => x.id === item.id);
    
    
    if (existItem) {
      const newData = cartItems.map(x => x.id === item.id ? {...existItem, qty: existItem.qty + 1} : x); 
      setcartItems(newData)
  }
    else {
      const newData = [...cartItems, {...item, qty: 1}];
      setcartItems(newData)
    }
  }

  const onRemoveItem = item => {
    const existItem = cartItems.find(x => x.id === item.id);

    if (existItem.qty === 1) {
      const newData = cartItems.filter(x => x.id !== existItem.id);
      setcartItems(newData)
    } else {
      const newData = cartItems.map(x => x.id === item.id ? {...existItem, qty: existItem.qty - 1} : x); 
      setcartItems(newData)
    }

  }

  const onCheckout = () => {
    telegram.MainButton.text = "Sotib olish";
    telegram.MainButton.show();
  }

  const onSendData = useCallback(()  => 
  {
    const queryID = telegram.initDataUnsafe?.query_id;
    if (queryID){
      fetch('https://your-backend-server.com/web-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          queryID,
          cartItems,
        }),
      });
    } else{
      telegram.sendData(JSON.stringify({ products: cartItems, queryID: queryID }));
    }
    
  }, [cartItems]);
  useEffect(() => {
    telegram.onEvent('mainButtonClicked', onSendData);

    return () => {
      telegram.offEvent('mainButtonClicked', onSendData);
    }
  }, [onSendData]);




  return (
    <>
    {/* Faqat bosh sahifada Cart ko'rsatish */}
    {location.pathname === '/' && (
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
    )}

    <Routes>
      <Route 
        path="/" 
        element={
          <Home 
            courses={courses} 
            onAddItem={onAddItem} 
            onRemoveItem={onRemoveItem} 
          />
        } 
      />
      <Route 
        path="/course/:id" 
        element={
          <CourseDetails 
            courses={courses} 
            onAddItem={onAddItem}
            cartItems={cartItems}
          />
        } 
      />
    </Routes>
    </>
  );
}

export default App;
