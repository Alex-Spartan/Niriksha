import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { ComplianceModule } from './components/ComplianceModule';
import { SurveillanceModule } from './components/SurveillanceModule';
import { ReportsModule } from './components/ReportsModule';
import { BusinessAssessment } from './components/BusinessAssessment';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

export type ActiveModule = 'dashboard' | 'compliance' | 'surveillance' | 'reports' | 'assessment';

function App() {
  const [activeModule, setActiveModule] = useState<ActiveModule>('dashboard');

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'compliance':
        return <ComplianceModule />;
      case 'surveillance':
        return <SurveillanceModule />;
      case 'reports':
        return <ReportsModule />;
      case 'assessment':
        return <BusinessAssessment />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          {renderActiveModule()}
        </main>
      </div>
    </div>
  );
}

export default App;