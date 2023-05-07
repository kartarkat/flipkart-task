import './App.css';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([])

  const PRODUCTS_URL = 'https://mocki.io/v1/b0031a32-f304-4718-be8d-8fad11247e21'

  const response = {"products":[{"id":46,"title":"women's shoes","description":"Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber","price":769,"originalPrice":1699,"discountPercentage":54,"rating":4.14,"stock":72,"brand":"IELGY fashion","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/46/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/46/1.webp","https://i.dummyjson.com/data/products/46/2.jpg","https://i.dummyjson.com/data/products/46/3.jpg","https://i.dummyjson.com/data/products/46/4.jpg","https://i.dummyjson.com/data/products/46/thumbnail.jpg"],"colors":["white","grey"]},{"id":47,"title":"Sneaker shoes","description":"Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women","price":1759,"originalPrice":2799,"discountPercentage":37,"rating":4.19,"stock":50,"brand":"Synthetic Leather","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/47/thumbnail.jpeg","images":["https://i.dummyjson.com/data/products/47/1.jpg","https://i.dummyjson.com/data/products/47/2.jpg","https://i.dummyjson.com/data/products/47/3.jpg","https://i.dummyjson.com/data/products/47/thumbnail.jpeg"],"colors":["white","pink"]},{"id":48,"title":"Women Strip Heel","description":"Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped","price":2219,"originalPrice":3699,"discountPercentage":40,"rating":4.02,"stock":25,"brand":"Sandals Flip Flops","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/48/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/48/1.jpg","https://i.dummyjson.com/data/products/48/2.jpg","https://i.dummyjson.com/data/products/48/3.jpg","https://i.dummyjson.com/data/products/48/4.jpg","https://i.dummyjson.com/data/products/48/thumbnail.jpg"],"colors":["yellow","black"]},{"id":49,"title":"Chappals & Shoe Ladies Metallic","description":"Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals","price":1289,"originalPrice":4299,"discountPercentage":70,"rating":4.72,"stock":107,"brand":"Maasai Sandals","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/49/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/49/1.jpg","https://i.dummyjson.com/data/products/49/2.jpg","https://i.dummyjson.com/data/products/49/3.webp","https://i.dummyjson.com/data/products/49/thumbnail.jpg"],"colors":["brown"]},{"id":50,"title":"Women Shoes","description":"2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes","price":1809,"originalPrice":3299,"discountPercentage":45,"rating":4.33,"stock":46,"brand":"Arrivals Genuine","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/50/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/50/1.jpeg","https://i.dummyjson.com/data/products/50/2.jpg","https://i.dummyjson.com/data/products/50/3.jpg"],"colors":["black"]},{"id":56,"title":"Sneakers Joggers Shoes","description":"Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New","price":2089,"originalPrice":3799,"discountPercentage":45,"rating":4.38,"stock":6,"brand":"Sneakers","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/56/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/56/1.jpg","https://i.dummyjson.com/data/products/56/2.jpg","https://i.dummyjson.com/data/products/56/3.jpg","https://i.dummyjson.com/data/products/56/4.jpg","https://i.dummyjson.com/data/products/56/5.jpg","https://i.dummyjson.com/data/products/56/thumbnail.jpg"],"colors":["black","white"]},{"id":57,"title":"Loafers for men","description":"Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.","price":470,"discountPercentage":10.91,"rating":4.91,"stock":20,"brand":"Rubber","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/57/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/57/1.jpg","https://i.dummyjson.com/data/products/57/2.jpg","https://i.dummyjson.com/data/products/57/3.jpg","https://i.dummyjson.com/data/products/57/4.jpg","https://i.dummyjson.com/data/products/57/thumbnail.jpg"],"colors":["black"]},{"id":58,"title":"formal offices shoes","description":"Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber","price":5700,"originalPrice":6200,"discountPercentage":12,"rating":4.41,"stock":68,"brand":"The Warehouse","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/58/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/58/1.jpg","https://i.dummyjson.com/data/products/58/2.jpg","https://i.dummyjson.com/data/products/58/3.jpg","https://i.dummyjson.com/data/products/58/4.jpg","https://i.dummyjson.com/data/products/58/thumbnail.jpg"],"colors":["black"]},{"id":59,"title":"Spring and summershoes","description":"Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;","price":2000,"discountPercentage":8.71,"rating":4.33,"stock":137,"brand":"Sneakers","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/59/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/59/1.jpg","https://i.dummyjson.com/data/products/59/2.jpg","https://i.dummyjson.com/data/products/59/3.jpg","https://i.dummyjson.com/data/products/59/4.jpg","https://i.dummyjson.com/data/products/59/thumbnail.jpg"],"colors":["black","yellow"]},{"id":60,"title":"Stylish Casual Jeans Shoes","description":"High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable","price":1580,"discountPercentage":7.55,"rating":4.55,"stock":129,"brand":"Sneakers","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/60/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/60/1.jpg","https://i.dummyjson.com/data/products/60/2.jpg","https://i.dummyjson.com/data/products/60/3.jpg","https://i.dummyjson.com/data/products/60/thumbnail.jpg"],"colors":["violet","white"]}]}

  async function fetchData() {
    try {
      const response = await fetch(PRODUCTS_URL)
      const jsonData = await response.json();
      setProducts(jsonData?.products || response?.products)
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


