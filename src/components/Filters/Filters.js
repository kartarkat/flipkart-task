import React, { useState } from 'react';

function Filters({ data, handleFilter }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [colors, setColors] = useState([]);

  const filterColors = ['white', 'grey', 'pink', 'yellow', 'black', 'brown', 'violet'];
  const priceFilter = {
    min: [0, 500, 1000, 1500, 2000, 2500],
    max: [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500]
  };

  const handleMinPriceChange = (e) => {
    // if(e.target.value)
    setMinPrice(parseInt(e.target.value));
    handleFilter({ minPrice: parseInt(e.target.value), maxPrice, brand, colors });
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
    handleFilter({ minPrice, maxPrice: parseInt(e.target.value), brand, colors });
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    handleFilter({ minPrice, maxPrice, brand: e.target.value, colors });
  };

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    let updatedColors = [...colors];
    if (e.target.checked) {
      updatedColors.push(selectedColor);
    } else {
      updatedColors = updatedColors.filter((color) => color !== selectedColor);
    }
    setColors(updatedColors);
    handleFilter({ minPrice, maxPrice, brand, colors: updatedColors });
  };

  return (
    <div>
      <div className="title">Filters</div>
      <div className="priceContainer">
        <select value={minPrice} onChange={handleMinPriceChange}>
          <option value="">Min Price</option>
          {priceFilter.min.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
        <select value={maxPrice} onChange={handleMaxPriceChange}>
          <option value="">Max Price</option>
          {priceFilter.max.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      <div className="brandContainer">
        <input type="text" placeholder="Search Brand" value={brand} onChange={handleBrandChange} />
      </div>
      <div className="colorContainer">
        {filterColors.map((color) => (
          <div key={color}>
            <input type="checkbox" value={color} checked={colors.includes(color)} onChange={handleColorChange} />
            <span>{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
