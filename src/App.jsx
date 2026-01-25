
import { useCallback, useEffect, useState } from 'react';
import './App.css'
import Card from './components/card/card'
import Cart from './components/cart/cart'
import {getData} from './constants/db'
const courses = getData();

const telegram = window.Telegram.WebApp;



const App = () => {
  const [cartItems, setcartItems] = useState([])

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
      telegram.sendData(JSON.stringify(cartItems));
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
    <h1 className='heading'>Sammi kurslar</h1>
    <Cart cartItems={cartItems} onCheckout={onCheckout} />

    <div className="cards__container">
      {courses.map(course => (
        <Card key={course.id} course={course} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
      ))}

    </div>
    
    </>
  );
}

export default App;
