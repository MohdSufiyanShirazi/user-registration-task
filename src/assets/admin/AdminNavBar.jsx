import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers.jsx';
import AdminLogout from './AdminLogout';
import Api from '../api/Api';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <div className="navbar-header">
          <h1>Admin Dashboard</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/admin/home" className="nav-link">Home</Link></li>
          <li><Link to="/admin/view-users" className="nav-link">View Users</Link></li>
           <li><Link to="/admin/api" className="nav-link">API </Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </nav>

      <div className="admin-content">
        <Routes>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/view-users" element={<ViewUsers />} />
          <Route path="/admin/logout" element={<AdminLogout />} />
          <Route path="/admin/api" element={<Api />} />
        </Routes>
      </div>
    </div>
  );
}
