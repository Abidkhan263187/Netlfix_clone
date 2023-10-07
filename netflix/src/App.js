
import StartNetflix from '../src/component/StartNetflix';
import './App.css';
import { useEffect, useState } from 'react';
import { Home } from './component/Pages/Home';
import { Allroutes } from './component/Routes/Allroutes';
function App() {
  const [load, setload] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setload(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      {load && <div className="loading">
        <StartNetflix />
      </div> }
      <Allroutes/>


    </div>
  );
}

export default App;
