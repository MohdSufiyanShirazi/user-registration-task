import { HashRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './assets/pages/NavBar';
import AdminNavBar from './assets/admin/AdminNavBar';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  useEffect(() => {
    // Check sessionStorage for user role
    const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
    const customerStatus = sessionStorage.getItem('isCustomer') === 'true';

    setIsAdmin(adminStatus);
    setIsCustomer(customerStatus);
  }, []);

  return (
     <HashRouter>
         {isAdmin && <AdminNavBar/>}
         {isCustomer && <CustomerNavBar/>}
         {!isAdmin  && !isCustomer && <NavBar/>}
     </HashRouter>
  );
}

export default App;


