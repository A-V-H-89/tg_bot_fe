import { useEffect } from 'react';
import './App.css';


function App() {
  useEffect(() => {
    tg.ready();
  }, [])



  return (
    <div className="App">
      work properly
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
