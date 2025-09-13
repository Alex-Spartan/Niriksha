import React, { useState } from 'react';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  FileText,
  Download,
  Filter,
  Search
} from 'lucide-react';

interface ComplianceItem {
  id: string;
  title: string;
  description: string;
  status: 'compliant' | 'warning' | 'non-compliant';
  dueDate: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
}

const complianceItems: ComplianceItem[] = [
  {
    id: '1',
    title: 'KYC Documentation Review',
    description: 'Monthly review of client KYC documents and updates',
    status: 'compliant',
    dueDate: '2025-01-15',
    category: 'Client Onboarding',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Risk Management Framework',
    description: 'Quarterly assessment of risk management policies',
    status: 'warning',
    dueDate: '2025-01-20',
    category: 'Risk Management',
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Trade Surveillance Report',
    description: 'Weekly surveillance report submission to exchange',
    status: 'non-compliant',
    dueDate: '2025-01-10',
    category: 'Surveillance',
    priority: 'high'
  },
  {
    id: '4',
    title: 'Financial Reporting',
    description: 'Monthly financial statements and regulatory filings',
    status: 'compliant',
    dueDate: '2025-01-25',
    category: 'Financial',
    priority: 'high'
  },
  {
    id: '5',
    title: 'Client Grievance Handling',
    description: 'Review and resolution of client complaints',
    status: 'warning',
    dueDate: '2025-01-18',
    category: 'Client Services',
    priority: 'medium'
  }
];

export const ComplianceModule: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusIcon = (status: ComplianceItem['status']) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'non-compliant':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
    }
  };

  const getStatusBadge = (status: ComplianceItem['status']) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'compliant':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'warning':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'non-compliant':
        return `${baseClasses} bg-red-100 text-red-800`;
    }
  };

  const getPriorityBadge = (priority: ComplianceItem['priority']) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (priority) {
      case 'high':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'medium':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'low':
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const filteredItems = complianceItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...Array.from(new Set(complianceItems.map(item => item.category)))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Compliance Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Compliance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Compliant</p>
              <p className="text-2xl font-bold text-green-600">
                {complianceItems.filter(item => item.status === 'compliant').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Warnings</p>
              <p className="text-2xl font-bold text-yellow-600">
                {complianceItems.filter(item => item.status === 'warning').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Non-Compliant</p>
              <p className="text-2xl font-bold text-red-600">
                {complianceItems.filter(item => item.status === 'non-compliant').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Due This Week</p>
              <p className="text-2xl font-bold text-blue-600">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search compliance items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Compliance Items List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Compliance Items</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredItems.map((item) => (
            <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {getStatusIcon(item.status)}
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    <div className="flex items-center space-x-4 mt-3">
                      <span className={getStatusBadge(item.status)}>
                        {item.status.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className={getPriorityBadge(item.priority)}>
                        {item.priority.toUpperCase()} PRIORITY
                      </span>
                      <span className="text-sm text-gray-500">{item.category}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Due Date</p>
                  <p className="text-sm font-medium text-gray-900">{item.dueDate}</p>
                  <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};