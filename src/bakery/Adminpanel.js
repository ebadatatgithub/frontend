import React from 'react';
import './AdminPanel.css';


const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/bakery">Bakery Items</a></li>
        </ul>
      </nav>
      <div className="content">
        


      </div>
    </div>
  );
};

export default AdminPanel;
