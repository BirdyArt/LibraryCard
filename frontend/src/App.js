import './App.scss';
import Navigation from './components/Navigation';
import Footer from'./components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


library.add(faTimes, faEdit, faPlusCircle, faGoogle);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
