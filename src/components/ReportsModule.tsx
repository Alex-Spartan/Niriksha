import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  Eye,
  Share,
  Clock,
  CheckCircle
} from 'lucide-react';

interface Report {
  id: string;
  title: string;
  type: string;
  description: string;
  generatedDate: string;
  status: 'generated' | 'pending' | 'scheduled';
  size: string;
  format: 'PDF' | 'Excel' | 'CSV';
}

const reports: Report[] = [
  {
    id: 'RPT001',
    title: 'Daily Compliance Report',
    type: 'Compliance',
    description: 'Daily summary of compliance status and violations',
    generatedDate: '2025-01-08',
    status: 'generated',
    size: '2.4 MB',
    format: 'PDF'
  },
  {
    id: 'RPT002',
    title: 'Weekly Surveillance Summary',
    type: 'Surveillance',
    description: 'Weekly analysis of surveillance alerts and investigations',
    generatedDate: '2025-01-07',
    status: 'generated',
    size: '1.8 MB',
    format: 'Excel'
  },
  {
    id: 'RPT003',
    title: 'Monthly Business Assessment',
    type: 'Business',
    description: 'Comprehensive monthly business performance analysis',
    generatedDate: '2025-01-01',
    status: 'generated',
    size: '5.2 MB',
    format: 'PDF'
  },
  {
    id: 'RPT004',
    title: 'Client Activity Report',
    type: 'Client',
    description: 'Detailed client trading activity and behavior analysis',
    generatedDate: '2025-01-08',
    status: 'pending',
    size: '-',
    format: 'CSV'
  },
  {
    id: 'RPT005',
    title: 'Risk Management Report',
    type: 'Risk',
    description: 'Risk exposure analysis and mitigation recommendations',
    generatedDate: '2025-01-10',
    status: 'scheduled',
    size: '-',
    format: 'PDF'
  }
];

const reportTemplates = [
  { id: 1, name: 'Daily Compliance Summary', category: 'Compliance' },
  { id: 2, name: 'Weekly Surveillance Report', category: 'Surveillance' },
  { id: 3, name: 'Monthly P&L Statement', category: 'Financial' },
  { id: 4, name: 'Client Onboarding Report', category: 'Client' },
  { id: 5, name: 'Trade Settlement Report', category: 'Operations' },
  { id: 6, name: 'Regulatory Filing Report', category: 'Compliance' },
];

export const ReportsModule: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [showNewReportModal, setShowNewReportModal] = useState(false);

  const getStatusBadge = (status: Report['status']) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'generated':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'scheduled':
        return `${baseClasses} bg-blue-100 text-blue-800`;
    }
  };

  const getStatusIcon = (status: Report['status']) => {
    switch (status) {
      case 'generated':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'scheduled':
        return <Calendar className="w-4 h-4 text-blue-600" />;
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesType = selectedType === 'all' || report.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || report.status === selectedStatus;
    return matchesType && matchesStatus;
  });

  const types = ['all', ...Array.from(new Set(reports.map(report => report.type)))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Reports & Analytics</h2>
        <button 
          onClick={() => setShowNewReportModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <FileText className="w-4 h-4" />
          <span>Generate New Report</span>
        </button>
      </div>

      {/* Report Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Generated</p>
              <p className="text-2xl font-bold text-green-600">
                {reports.filter(report => report.status === 'generated').length}
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
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {reports.filter(report => report.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-blue-600">
                {reports.filter(report => report.status === 'scheduled').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Reports</p>
              <p className="text-2xl font-bold text-purple-600">{reports.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Statuses</option>
            <option value="generated">Generated</option>
            <option value="pending">Pending</option>
            <option value="scheduled">Scheduled</option>
          </select>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Available Reports</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredReports.map((report) => (
            <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {getStatusIcon(report.status)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-medium text-gray-900">{report.title}</h4>
                      <span className={getStatusBadge(report.status)}>
                        {report.status.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        {report.format}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{report.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span><strong>Type:</strong> {report.type}</span>
                      <span><strong>Generated:</strong> {report.generatedDate}</span>
                      {report.size !== '-' && <span><strong>Size:</strong> {report.size}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {report.status === 'generated' && (
                    <>
                      <button className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800 p-2 hover:bg-green-50 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <Share className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  {report.status === 'pending' && (
                    <span className="text-sm text-yellow-600 font-medium">Processing...</span>
                  )}
                  {report.status === 'scheduled' && (
                    <span className="text-sm text-blue-600 font-medium">Scheduled</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Report Modal */}
      {showNewReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate New Report</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Report Template</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  {reportTemplates.map(template => (
                    <option key={template.id} value={template.id}>
                      {template.name} ({template.category})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="date" 
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="date" 
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="pdf">PDF</option>
                  <option value="excel">Excel</option>
                  <option value="csv">CSV</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button 
                onClick={() => setShowNewReportModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowNewReportModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};