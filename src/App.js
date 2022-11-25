import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import './App.css';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Header />
      <SolarSystem />
      <Missions />
    </div>
  );
}

export default App;
