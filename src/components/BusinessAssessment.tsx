import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target,
  BarChart3,
  PieChart,
  Activity,
  Award
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadialBarChart, RadialBar } from 'recharts';

const performanceData = [
  { month: 'Jul', revenue: 45, clients: 120, trades: 2400 },
  { month: 'Aug', revenue: 52, clients: 135, trades: 2800 },
  { month: 'Sep', revenue: 48, clients: 142, trades: 2600 },
  { month: 'Oct', revenue: 61, clients: 158, trades: 3200 },
  { month: 'Nov', revenue: 55, clients: 167, trades: 2900 },
  { month: 'Dec', revenue: 67, clients: 178, trades: 3500 },
];

const kpiData = [
  { name: 'Revenue Growth', value: 85, fill: '#3b82f6' },
  { name: 'Client Retention', value: 92, fill: '#10b981' },
  { name: 'Compliance Score', value: 96, fill: '#8b5cf6' },
  { name: 'Operational Efficiency', value: 78, fill: '#f59e0b' },
];

const segmentData = [
  { segment: 'Retail', clients: 145, revenue: 35 },
  { segment: 'HNI', clients: 28, revenue: 45 },
  { segment: 'Corporate', clients: 12, revenue: 20 },
];

export const BusinessAssessment: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Business Assessment</h2>
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Last 6 Months</option>
            <option>Last Year</option>
            <option>Last 2 Years</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-blue-600">₹67L</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+22% from last month</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Clients</p>
              <p className="text-3xl font-bold text-green-600">178</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+6.7% growth</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Trades</p>
              <p className="text-3xl font-bold text-purple-600">3,500</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+20.7% increase</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Revenue/Client</p>
              <p className="text-3xl font-bold text-orange-600">₹37.6K</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+14.2% improvement</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Client Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} name="Revenue (₹L)" />
              <Line yAxisId="right" type="monotone" dataKey="clients" stroke="#10b981" strokeWidth={3} name="Clients" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Performance Indicators</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={kpiData}>
              <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {kpiData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                <span className="text-sm text-gray-600">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Segmentation */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Segmentation Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={segmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="segment" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="clients" fill="#3b82f6" name="Clients" />
            <Bar yAxisId="right" dataKey="revenue" fill="#10b981" name="Revenue (₹L)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Business Health Score */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Business Health Score</h3>
              <p className="text-3xl font-bold text-green-600">87/100</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Financial Performance</span>
              <span className="text-sm font-medium text-green-600">92/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Client Satisfaction</span>
              <span className="text-sm font-medium text-blue-600">85/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Operational Efficiency</span>
              <span className="text-sm font-medium text-yellow-600">78/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Revenue Growth</p>
                <p className="text-xs text-gray-600">22% increase this month</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Client Acquisition</p>
                <p className="text-xs text-gray-600">11 new clients this month</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Trading Volume</p>
                <p className="text-xs text-gray-600">20% increase in trades</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Improvement Areas</h3>
          <div className="space-y-4">
            <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-sm font-medium text-gray-900">Operational Efficiency</p>
              <p className="text-xs text-gray-600 mt-1">Consider automating routine processes to improve efficiency scores</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <p className="text-sm font-medium text-gray-900">Client Diversification</p>
              <p className="text-xs text-gray-600 mt-1">Focus on acquiring more corporate clients to balance portfolio</p>
            </div>
            
            <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
              <p className="text-sm font-medium text-gray-900">Technology Upgrade</p>
              <p className="text-xs text-gray-600 mt-1">Invest in advanced trading platforms to stay competitive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};