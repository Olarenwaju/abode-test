import './App.css';
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Sidebar/>
      <div className='main-container'>
        <Header />
        <MainContent />
      </div>
      
    </div>
  );
}

export default App;
