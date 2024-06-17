import React from 'react';
import './LogoutScreen.css';

function LogoutScreen({ onLogout }) {
  return (
    <div className="logoutScreen">
      {/* <h1>Logout</h1> */}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default LogoutScreen;
