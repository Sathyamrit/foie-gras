import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  
  const menuCategories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' }
  ];
  
  const menuItems = {
    starters: [
      {
        name: 'Artisanal Cheese Platter',
        description: 'Selection of premium cheeses served with honey, nuts, and artisan bread',
        price: 16,
        tags: ['vegetarian']
      },
      {
        name: 'Crispy Calamari',
        description: 'Tender calamari rings, lightly battered and served with aioli',
        price: 14,
        tags: ['seafood']
      },
      {
        name: 'Roasted Beet Salad',
        description: 'Marinated beets with goat cheese, arugula, and balsamic reduction',
        price: 12,
        tags: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Beef Carpaccio',
        description: 'Thinly sliced raw beef with truffle oil, capers, and shaved parmesan',
        price: 18,
        tags: ['signature']
      }
    ],
    mains: [
      {
        name: 'Filet Mignon',
        description: '8oz grass-fed beef tenderloin with red wine reduction, served with seasonal vegetables',
        price: 36,
        tags: ['signature', 'gluten-free']
      },
      {
        name: 'Roasted Chicken Breast',
        description: 'Free-range chicken with herb butter, mashed potatoes, and sautéed greens',
        price: 28,
        tags: []
      },
      {
        name: 'Braised Lamb Shank',
        description: 'Slow-cooked with rosemary and red wine, served with polenta',
        price: 34,
        tags: ['signature']
      },
      {
        name: 'Duck Confit',
        description: 'Crispy duck leg confit with cherry sauce and roasted fingerling potatoes',
        price: 32,
        tags: []
      }
    ],
    seafood: [
      {
        name: 'Seared Scallops',
        description: 'Pan-seared sea scallops with cauliflower puree and brown butter sauce',
        price: 34,
        tags: ['gluten-free']
      },
      {
        name: 'Grilled Salmon',
        description: 'Wild-caught salmon with lemon-dill sauce and asparagus',
        price: 30,
        tags: ['gluten-free']
      },
      {
        name: 'Lobster Risotto',
        description: 'Creamy risotto with butter-poached lobster and parmesan',
        price: 38,
        tags: ['signature']
      },
      {
        name: 'Cioppino',
        description: 'San Francisco-style seafood stew with clams, mussels, fish, and shrimp in tomato broth',
        price: 32,
        tags: []
      }
    ],
    vegetarian: [
      {
        name: 'Wild Mushroom Risotto',
        description: 'Creamy risotto with assorted wild mushrooms and truffle oil',
        price: 24,
        tags: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Roasted Vegetable Tart',
        description: 'Seasonal vegetables and goat cheese in a flaky pastry shell with balsamic glaze',
        price: 22,
        tags: ['vegetarian']
      },
      {
        name: 'Eggplant Parmesan',
        description: 'Layers of eggplant, tomato sauce, and cheese, baked to perfection',
        price: 20,
        tags: ['vegetarian']
      },
      {
        name: 'Cauliflower Steak',
        description: 'Roasted cauliflower with romesco sauce and herb salsa',
        price: 18,
        tags: ['vegan', 'gluten-free']
      }
    ],
    desserts: [
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar crust',
        price: 10,
        tags: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: 12,
        tags: ['vegetarian', 'signature']
      },
      {
        name: 'Tiramisu',
        description: 'Coffee-soaked ladyfingers with mascarpone cream and cocoa',
        price: 10,
        tags: ['vegetarian']
      },
      {
        name: 'Seasonal Fruit Tart',
        description: 'Buttery pastry shell filled with pastry cream and fresh seasonal fruits',
        price: 11,
        tags: ['vegetarian']
      }
    ],
    drinks: [
      {
        name: 'Signature Cocktails',
        description: 'Ask your server about our seasonal craft cocktails',
        price: 14,
        tags: []
      },
      {
        name: 'Wine Selection',
        description: 'Extensive list of wines by the glass or bottle',
        price: 12,
        tags: ['price per glass']
      },
      {
        name: 'Craft Beer',
        description: 'Selection of local and imported craft beers',
        price: 8,
        tags: []
      },
      {
        name: 'Non-Alcoholic Selections',
        description: 'Artisanal sodas, fresh juices, and mocktails',
        price: 6,
        tags: ['non-alcoholic']
      }
    ]
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Experience the essence of culinary artistry with our seasonal offerings</p>
        </div>
      </div>
      
      <section className="section menu-content">
        <div className="container">
          <div className="menu-tabs">
            {menuCategories.map(category => (
              <button 
                key={category.id}
                className={`menu-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="menu-items">
            {menuItems[activeCategory].map((item, index) => (
              <div className="menu-item" key={index}>
                <div className="menu-item-header">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-price">${item.price}</span>
                </div>
                <p className="item-description">{item.description}</p>
                <div className="item-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className={`tag tag-${tag}`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section menu-note">
        <div className="container">
          <div className="note-box">
            <h3>A Note from Our Chef</h3>
            <p>
              Our menu changes with the seasons to capture the freshest ingredients at their peak. 
              We source locally whenever possible and maintain close relationships with our farmers and suppliers.
              If you have any dietary restrictions or allergies, please inform your server, and we will be happy to accommodate your needs.
            </p>
            <div className="chef-signature">Chef Maria Rossi</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;