import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { Authcontext } from './context/AuthProvider';
import { setLocalStorage } from './Utils/LocalStorage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(Authcontext);

  useEffect(() => {
    setLocalStorage();
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      if (userData.role === 'employee') {
        setLoggedInUserData(userData.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'tilak@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user && <Login handlelogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeuser={setUser} />}
      {user === 'employee' && <EmployeeDashboard changeuser={setUser} data={loggedInUserData} />}
    </>
  );
};

export default App;
