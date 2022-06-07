import './App.css';
import ButtonChange from './components/ButtonChange';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import { DataProvider } from './context/DataContext';


function App() {
  return (

    <DataProvider>
        <div className="container">
          <Pagina1/>
          <Pagina2/>
          <ButtonChange/>
        </div>
    </DataProvider>
    
  );
}

export default App;
