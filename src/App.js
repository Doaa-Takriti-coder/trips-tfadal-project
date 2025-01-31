import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // قمنا بتغيير Router إلى BrowserRouter
import AddTripTab  from "./pages/add-trip-tab"
import Layout from './Layout'; // تخطيط التطبيق
import TripsTab  from "./pages/TripsTab"
function App() {
  return (
    <Router> {/* استخدام BrowserRouter */}
      <Layout> {/* الهيكل العام */}
        <Routes> {/* تعديل هنا من Switch إلى Routes */}
          <Route path="/" element={<AddTripTab />} /> {/* استخدم element بدلاً من component */}
          <Route path="/trips" element={<TripsTab />} /> {/* استخدم element بدلاً من component */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
