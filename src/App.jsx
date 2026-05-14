import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Login from './pages/Login';
import ExecutiveDashboard from './pages/ExecutiveDashboard';
import EmployeePerformance from './pages/EmployeePerformance';
import KPIAnalytics from './pages/KPIAnalytics';
import FinancialAnalytics from './pages/FinancialAnalytics';
import AIReportsCenter from './pages/AIReportsCenter';
import ManagerialTasks from './pages/ManagerialTasks';
import SystemSettings from './pages/SystemSettings';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<ExecutiveDashboard />} />
        <Route path="employees" element={<EmployeePerformance />} />
        <Route path="kpi-analytics" element={<KPIAnalytics />} />
        <Route path="finance" element={<FinancialAnalytics />} />
        <Route path="reports" element={<AIReportsCenter />} />
        <Route path="tasks" element={<ManagerialTasks />} />
        <Route path="settings" element={<SystemSettings />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
