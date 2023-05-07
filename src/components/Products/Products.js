import React, { useEffect, useState } from 'react'
import './Products.css';
import Filters from '../Filters/Filters';



function Products({ data = [] }) {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(()=>{
        setProducts(data)
    }, [data])


    useEffect(()=>{
        setFilteredProducts(products)
    }, [products])


    const handleFilter = (filters) => {
        const filteredByPrice = products.filter(
          (product) => (filters.minPrice === '' || product.price >= filters.minPrice) && (filters.maxPrice === '' || product.price <= filters.maxPrice)
        );
        const filteredByBrand = filteredByPrice.filter(
          (product) => filters.brand === '' || product.brand.toLowerCase().includes(filters.brand.toLowerCase())
        );
        const filteredByColor = filteredByBrand.filter(
          (product) => filters.colors.length === 0 || filters.colors.includes(product.color)
        );
        setFilteredProducts(filteredByColor);
      };

    const renderProduct = (product) => {
        const { id, title, originalPrice, price, discountPercentage, rating, thumbnail, colors, brand } = product;
        return (
            <div key={id} className="productContainer">
                <div className="productImageContainer">
                    <img src={thumbnail} alt={title} className="productImage" />
                </div>
                <div className="productDetails">
                    <div className="productTitle">{title}</div>
                    <div className="productRating">{rating}⭐</div>
                    <div className="productPrice">
                        <span className="finalPrice">₹{price}</span>
                        <span className="originalPrice">₹{originalPrice}</span>
                        <span className="discountPercentage">{discountPercentage}% off</span>
                    </div>
                </div>
            </div>
        );
    };

   


    return (
        <div className='productsPage'>
            <div className='filtersContainer'>
            <Filters data={products} handleFilter={handleFilter} />
            </div>
            <div className='allProducts'>
                {filteredProducts.map(product => renderProduct(product))}
            </div>
        </div>
    )
}

export default Products