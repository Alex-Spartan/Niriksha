import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "./pages/components/ThemeSwitcher";
import UserProfile from "./components/UserProfile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Compliance from "./pages/Compliance/Compliance";
import Surveillance from "./pages/Surveillance/Surveillance";
import Reporting from "./pages/Reporting/Reporting";
import Settings from "./pages/Settings/Settings";

function NavBar() {
  const location = useLocation();
  
  const menu = {
    Dashboard: "dashboard",
    Compliance: "compliance",
    Surveillance: "surveillance",
    Reporting: "reporting",
  };

  const isActive = (path: string) => {
    if (path === "dashboard") {
      return location.pathname === "/" || location.pathname === "/dashboard";
    }
    return location.pathname === `/${path}`;
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                👁️ Niriksha
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {Object.entries(menu).map(([name, path]) => (
                <Link
                  key={name}
                  to={`/${path}`}
                  className={`${
                    isActive(path)
                      ? "border-blue-500 text-gray-900 dark:text-white"
                      : "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-white"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <ThemeSwitcher />
            <UserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class">
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <NavBar />

          <main className="py-10">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/surveillance" element={<Surveillance />} />
                <Route path="/reporting" element={<Reporting />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
