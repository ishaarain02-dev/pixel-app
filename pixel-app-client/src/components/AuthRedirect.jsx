import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function AuthRedirect() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '16px',
        color: '#666'
      }}>
        Loading...
      </div>
    );
  }

  // If authenticated, redirect to dashboard
  // If not authenticated, redirect to login
  return isAuthenticated() ? 
    <Navigate to="/dashboard" replace /> : 
    <Navigate to="/login" replace />;
}

export default AuthRedirect;
