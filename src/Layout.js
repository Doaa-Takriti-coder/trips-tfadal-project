import React from 'react';
import { NavLink } from 'react-router-dom'; // التأكد من استخدام Link من react-router-dom

function Layout({ children }) {
  return (
    <div className="layout-container">
      <header className="header">
        <nav>
          <ul>
            <li><NavLink  to="/" end>Add Trip</NavLink ></li> {/* رابط الصفحة الرئيسية */}
            <li><NavLink  to="/trips">Trips</NavLink ></li> {/* رابط صفحة الرحلات */}
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {children} {/* محتوى الصفحات */}
      </main>
    </div>
  );
}

export default Layout;
