import React, { useState, useEffect } from 'react';
import Signup from './pages/Signup';
import MainDb from './pages/MainDb';

export default function App() {
  const [tenant, setTenant] = useState(null);

  // Keep the user logged in upon hard browser refreshes
  useEffect(() => {
    const saved = localStorage.getItem('active_tenant');
    if (saved) {
      setTenant(JSON.parse(saved));
    }
  }, []);

  const handleLoginSuccess = (tenantData) => {
    localStorage.setItem('active_tenant', JSON.stringify(tenantData));
    setTenant(tenantData);
  };

  const handleLogout = () => {
    localStorage.removeItem('active_tenant');
    setTenant(null);
  };

  return (
    <>
      {!tenant ? (
        <Signup onLoginSuccess={handleLoginSuccess} />
      ) : (
        <MainDb tenant={tenant} onLogout={handleLogout} />
      )}
    </>
  );
}