import './App.css';
import CustomSidebar from '../../../frontend/src/Components/CustomSidebar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <CustomSidebar />
    </Router>
  );
}

export default App;