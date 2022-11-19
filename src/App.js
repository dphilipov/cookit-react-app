import './App.scss';
import { Navigation } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navigation>
        <Outlet />
      </Navigation>
    </div>
  );
}

export default App;
