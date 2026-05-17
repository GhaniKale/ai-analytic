import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Frontend from './pages/Frontend';
import Edukasi from './pages/Edukasi';
import Rekrutmen from './pages/Rekrutmen';
import Selling from './pages/Selling';
import Login from './pages/Login';
import ExecutiveDashboard from './pages/ExecutiveDashboard';
import EmployeePerformance from './pages/EmployeePerformance';
import KPIAnalytics from './pages/KPIAnalytics';
import FinancialAnalytics from './pages/FinancialAnalytics';
import AIReportsCenter from './pages/AIReportsCenter';
import ManagerialTasks from './pages/ManagerialTasks';
import SystemSettings from './pages/SystemSettings';
import Notifications from './pages/Notifications';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontend />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/rekrutmen" element={<Rekrutmen />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<ExecutiveDashboard />} />
          <Route path="employees" element={<EmployeePerformance />} />
          <Route path="kpi-analytics" element={<KPIAnalytics />} />
          <Route path="finance" element={<FinancialAnalytics />} />
          <Route path="reports" element={<AIReportsCenter />} />
          <Route path="tasks" element={<ManagerialTasks />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<SystemSettings />} />
        </Route>
      </Routes>
      <ChatWidget />
    </>
  );
}

export default App;
