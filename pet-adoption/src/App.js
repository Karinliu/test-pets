import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PetList from './components/PetList.jsx';
import AddPet from './components/AddPet.jsx';
import EditPet from './components/EditPet';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={PetList} />
      <Route path="/add-pet" component={AddPet} />
      <Route path="/edit-pet" component={EditPet} />
    </BrowserRouter>
  );
}

export default App;
