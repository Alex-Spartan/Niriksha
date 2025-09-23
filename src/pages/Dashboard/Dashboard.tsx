
const Dashboard = () => {
  // Sample data - in a real app, this would come from your API
  const dashboardData = {
    businessHealthScore: 85,
    pendingComplianceTasks: 12,
    openAlerts: 3,
    clientCount: 247,
    revenue: {
      current: 1250000,
      change: 8.5
    },
    compliance: {
      completed: 8,
      total: 12,
      items: [
        {
          title: "KYC Documentation Update",
          completed: true,
          priority: "high" as const,
          dueDate: null
        },
        {
          title: "SEBI Annual Filing",
          completed: false,
          priority: "high" as const,
          dueDate: "Dec 30, 2025"
        },
        {
          title: "Risk Management Report",
          completed: true,
          priority: "medium" as const,
          dueDate: null
        },
        {
          title: "Client Grievance Report",
          completed: false,
          priority: "medium" as const,
          dueDate: "Jan 15, 2026"
        },
        {
          title: "Audit Trail Verification",
          completed: true,
          priority: "low" as const,
          dueDate: null
        },
        {
          title: "Market Data Compliance",
          completed: false,
          priority: "high" as const,
          dueDate: "Jan 5, 2026"
        },
        {
          title: "Employee Training Records",
          completed: true,
          priority: "medium" as const,
          dueDate: null
        },
        {
          title: "System Security Audit",
          completed: false,
          priority: "high" as const,
          dueDate: "Dec 28, 2025"
        },
        {
          title: "Transaction Monitoring Setup",
          completed: true,
          priority: "high" as const,
          dueDate: null
        },
        {
          title: "Client Communication Records",
          completed: true,
          priority: "low" as const,
          dueDate: null
        },
        {
          title: "Regulatory Capital Report",
          completed: true,
          priority: "medium" as const,
          dueDate: null
        },
        {
          title: "Anti-Money Laundering Check",
          completed: true,
          priority: "high" as const,
          dueDate: null
        }
      ]
    },
    upcomingDeadlines: [
      {
        title: "SEBI Quarterly Filing",
        description: "Submit quarterly business report to SEBI",
        dueDate: "December 30, 2025",
        daysLeft: 17,
        urgency: "urgent" as const
      },
      {
        title: "System Security Audit",
        description: "Complete annual security audit and documentation",
        dueDate: "December 28, 2025",
        daysLeft: 15,
        urgency: "urgent" as const
      },
      {
        title: "Market Data Compliance Review",
        description: "Review and update market data usage compliance",
        dueDate: "January 5, 2026",
        daysLeft: 23,
        urgency: "soon" as const
      },
      {
        title: "Client Grievance Report",
        description: "Prepare and submit monthly client grievance summary",
        dueDate: "January 15, 2026",
        daysLeft: 33,
        urgency: "normal" as const
      },
      {
        title: "Risk Assessment Update",
        description: "Annual risk assessment and mitigation plan update",
        dueDate: "February 1, 2026",
        daysLeft: 50,
        urgency: "normal" as const
      }
    ]
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Monitor your brokerage performance and compliance status
        </p>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        
        {/* Business Health Score */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Business Health Score</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{dashboardData.businessHealthScore}%</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${dashboardData.businessHealthScore}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Pending Compliance Tasks */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Compliance</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{dashboardData.pendingComplianceTasks}</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
              <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Tasks requiring attention</p>
        </div>

        {/* Open Alerts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Open Alerts</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{dashboardData.openAlerts}</p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM7 7h10v10H7V7z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Critical issues to resolve</p>
        </div>

        {/* Client Count */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Clients</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{formatNumber(dashboardData.clientCount)}</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Total registered clients</p>
        </div>

        {/* Revenue Snapshot */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(dashboardData.revenue.current)}</p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">+{dashboardData.revenue.change}%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
          </div>
        </div>

      </div>

      {/* Compliance Status Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Compliance Checklist */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Compliance Status</h2>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
              {dashboardData.compliance.completed}/{dashboardData.compliance.total} Complete
            </span>
          </div>
          
          <div className="space-y-4">
            {dashboardData.compliance.items.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  item.completed 
                    ? 'bg-green-100 dark:bg-green-900' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  {item.completed ? (
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    item.completed 
                      ? 'text-gray-500 dark:text-gray-400 line-through' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {item.title}
                  </p>
                  {item.dueDate && !item.completed && (
                    <p className="text-xs text-red-600 dark:text-red-400">Due: {item.dueDate}</p>
                  )}
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  item.priority === 'high' 
                    ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                    : item.priority === 'medium'
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}>
                  {item.priority.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Overall Progress</span>
              <span>{Math.round((dashboardData.compliance.completed / dashboardData.compliance.total) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(dashboardData.compliance.completed / dashboardData.compliance.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Upcoming Deadlines</h2>
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          <div className="space-y-4">
            {dashboardData.upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-r-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">{deadline.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    deadline.urgency === 'urgent' 
                      ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                      : deadline.urgency === 'soon'
                      ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                      : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  }`}>
                    {deadline.daysLeft} days left
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{deadline.description}</p>
                <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Due: {deadline.dueDate}
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="mt-6">
            <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              View All Compliance Requirements
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
