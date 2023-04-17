import Navbar from './components/webUi/navbar/Navbar';
import Sidebar from './components/webUi/sidebar/Sidebar';
import Middle from './components/webUi/middle/Middle';
import QuickLook from './components/webUi/right/QuickLook';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className='main'>
          <Sidebar />
          <Middle />
          <QuickLook />
        </div>
    </div>
  );
}

export default App;
