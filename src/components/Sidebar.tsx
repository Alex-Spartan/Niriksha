import React from 'react';
import { 
  BarChart3, 
  Shield, 
  Eye, 
  FileText, 
  TrendingUp,
  Settings,
  HelpCircle
} from 'lucide-react';
import { ActiveModule } from '../App';

interface SidebarProps {
  activeModule: ActiveModule;
  setActiveModule: (module: ActiveModule) => void;
}

const menuItems = [
  { id: 'dashboard' as ActiveModule, label: 'Dashboard', icon: BarChart3 },
  { id: 'compliance' as ActiveModule, label: 'Compliance', icon: Shield },
  { id: 'surveillance' as ActiveModule, label: 'Surveillance', icon: Eye },
  { id: 'assessment' as ActiveModule, label: 'Business Assessment', icon: TrendingUp },
  { id: 'reports' as ActiveModule, label: 'Reports', icon: FileText },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeModule, setActiveModule }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Niriksha</h2>
            <p className="text-xs text-gray-500">Broker Compliance Suite</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium">Help & Support</span>
        </button>
      </div>
    </div>
  );
};