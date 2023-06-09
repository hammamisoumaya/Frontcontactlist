import './App.css';
import {Routes,Route} from 'react-router-dom'
import AddContact from './Components/AddContact/AddContact';
import ListContact from './Components/ListContact/ListContact';
import Navbar from './Components/Navbar/NavContact';
import UpdateContact from './Components/UpdateContact/UpdateContact';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
<Route path='/' element={ <Home/>}/>
<Route path='/list' element={ <ListContact/>} />
<Route path='/add' element={<AddContact/>} />
<Route path='/update/:id' element={ <UpdateContact/>}/>

</Routes>
    </div>
  );
}

export default App;
