import React from 'react';

const categories = [
  { name: "Men's Clothing", icon: '👔' },
  { name: "Women's Clothing", icon: '👗' },
  { name: "Kid's & Youth Clothing", icon: '👕' },
  { name: 'Hats', icon: '🧢' },
  { name: 'Accessories', icon: '👜' },
  { name: 'Signs & Banners', icon: '📃' },
  { name: 'Home & Living', icon: '🏠' },
];

const App = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>Clothing</li>
          <li>Brands</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids & Babies</li>
          <li>Hats & Caps</li>
          <li>Embroidery</li>
          <li>Accessories</li>
          <li>Home & Living</li>
          <li>Groups</li>
          <li>Gifts</li>
        </ul>
      </nav>

      <div className="breadcrumb">
        <span>HOME {'>'} CUSTOM {'>'} PRODUCTS</span>
      </div>

      <h2 className="title">Custom All Products</h2>
      <h3 className="subtitle">Our Range</h3>

      <div className="card-container">
        {categories.map((category, index) => (
          <div key={index} className="card">
            <div className="icon">{category.icon}</div>
            <div className="card-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

