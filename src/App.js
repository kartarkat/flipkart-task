import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([])

  const PRODUCTS_URL = 'https://mocki.io/v1/b0031a32-f304-4718-be8d-8fad11247e21'

  async function fetchData() {
    try {
      const response = await fetch(PRODUCTS_URL)
      const jsonData = await response.json();
      setProducts(jsonData?.products)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  if (!products) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="App">
        <Products data={products} />
    </div>
  );
}

export default App;
