import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { UserTypeSelection } from './components/UserTypeSelection';
import { LandingPage } from './pages/LandingPage';
import { RegistrationForm } from './components/forms/RegistrationForm';
import { LandlordDashboard } from './pages/LandlordDashboard';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/get-started" element={<UserTypeSelection />} />
            <Route path="/register/:userType" element={<RegistrationForm />} />
            <Route path="/landlord" element={<LandlordDashboard />} />
            <Route path="/tenant" element={
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold">Tenant Dashboard (Coming Soon)</h1>
              </div>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;