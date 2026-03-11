import { HashRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './assets/pages/NavBar';
import AdminNavBar from './assets/admin/AdminNavBar';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    // Check sessionStorage for user role
    const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
    const userStatus = sessionStorage.getItem('isUser') === 'true';

    setIsAdmin(adminStatus);
    setIsUser(userStatus);
  }, []);

  return (
     <HashRouter>
         {isAdmin && <AdminNavBar/>}
  
         {!isAdmin && !isUser && <NavBar/>}
     </HashRouter>
  );
}

export default App;


