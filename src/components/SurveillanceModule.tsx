import React, { useState } from 'react';
import { 
  Eye, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Clock,
  Filter,
  Search,
  MoreVertical
} from 'lucide-react';

interface SurveillanceAlert {
  id: string;
  type: string;
  clientId: string;
  clientName: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
  timestamp: string;
  status: 'open' | 'investigating' | 'resolved';
  tradeValue: number;
}

const surveillanceAlerts: SurveillanceAlert[] = [
  {
    id: 'SA001',
    type: 'Unusual Volume',
    clientId: 'CL001247',
    clientName: 'Rajesh Kumar',
    description: 'Client traded 500% above average daily volume',
    severity: 'high',
    timestamp: '2025-01-08 14:30:00',
    status: 'open',
    tradeValue: 2500000
  },
  {
    id: 'SA002',
    type: 'Price Manipulation',
    clientId: 'CL002156',
    clientName: 'Priya Sharma',
    description: 'Potential wash trading detected in RELIANCE',
    severity: 'high',
    timestamp: '2025-01-08 13:45:00',
    status: 'investigating',
    tradeValue: 1800000
  },
  {
    id: 'SA003',
    type: 'Concentration Risk',
    clientId: 'CL003789',
    clientName: 'Amit Patel',
    description: 'Client position exceeds 5% of total portfolio in single stock',
    severity: 'medium',
    timestamp: '2025-01-08 12:15:00',
    status: 'open',
    tradeValue: 950000
  },
  {
    id: 'SA004',
    type: 'Timing Anomaly',
    clientId: 'CL004321',
    clientName: 'Sunita Gupta',
    description: 'Trades executed just before major news announcement',
    severity: 'high',
    timestamp: '2025-01-08 11:30:00',
    status: 'resolved',
    tradeValue: 3200000
  },
  {
    id: 'SA005',
    type: 'Velocity Check',
    clientId: 'CL005678',
    clientName: 'Vikram Singh',
    description: 'High frequency trading pattern detected',
    severity: 'medium',
    timestamp: '2025-01-08 10:45:00',
    status: 'investigating',
    tradeValue: 750000
  }
];

export const SurveillanceModule: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getSeverityBadge = (severity: SurveillanceAlert['severity']) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (severity) {
      case 'high':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'medium':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'low':
        return `${baseClasses} bg-green-100 text-green-800`;
    }
  };

  const getStatusBadge = (status: SurveillanceAlert['status']) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'open':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'investigating':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'resolved':
        return `${baseClasses} bg-green-100 text-green-800`;
    }
  };

  const filteredAlerts = surveillanceAlerts.filter(alert => {
    const matchesSeverity = selectedSeverity === 'all' || alert.severity === selectedSeverity;
    const matchesStatus = selectedStatus === 'all' || alert.status === selectedStatus;
    const matchesSearch = alert.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.clientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSeverity && matchesStatus && matchesSearch;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Surveillance Dashboard</h2>
        <div className="flex items-center space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Configure Rules
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Export Alerts
          </button>
        </div>
      </div>

      {/* Surveillance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Open Alerts</p>
              <p className="text-2xl font-bold text-red-600">
                {surveillanceAlerts.filter(alert => alert.status === 'open').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Investigating</p>
              <p className="text-2xl font-bold text-yellow-600">
                {surveillanceAlerts.filter(alert => alert.status === 'investigating').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Resolved Today</p>
              <p className="text-2xl font-bold text-green-600">
                {surveillanceAlerts.filter(alert => alert.status === 'resolved').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Clients Flagged</p>
              <p className="text-2xl font-bold text-blue-600">
                {new Set(surveillanceAlerts.map(alert => alert.clientId)).size}
              </p>
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
                placeholder="Search by client name, ID, or alert type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Severities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="open">Open</option>
              <option value="investigating">Investigating</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Surveillance Alerts List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Active Surveillance Alerts</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredAlerts.map((alert) => (
            <div key={alert.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-medium text-gray-900">{alert.type}</h4>
                      <span className={getSeverityBadge(alert.severity)}>
                        {alert.severity.toUpperCase()}
                      </span>
                      <span className={getStatusBadge(alert.status)}>
                        {alert.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{alert.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span><strong>Client:</strong> {alert.clientName} ({alert.clientId})</span>
                      <span><strong>Value:</strong> {formatCurrency(alert.tradeValue)}</span>
                      <span><strong>Time:</strong> {alert.timestamp}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Investigate
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <MoreVertical className="w-4 h-4" />
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