import { useTheme } from './context/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import Card from './components/Card';
import './index.css';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Layout>
        <div className="py-8 space-y-8">
          {/* Welcome Card */}
          <Card title="Welcome to Task Manager">
            <div className={`p-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <p className="mb-4">
                This is a task management application built with React and Tailwind CSS.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm">
                  Current mode: {darkMode ? 'Dark' : 'Light'}
                </span>
              </div>
            </div>
          </Card>

          {/* Task Manager Section */}
          <Card title="Task Management">
            <TaskManager />
          </Card>

          {/* API Section (if using) */}
          {/* <Card title="API Data">
            <ApiDataSection />
          </Card> */}
        </div>
      </Layout>
    </div>
  );
}

export default App;