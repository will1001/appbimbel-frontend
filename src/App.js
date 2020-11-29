import { HashRouter, Switch, Route } from 'react-router-dom'

//components
import HomeSoal from './pages/HomeSoal'
import AddForm from './pages/AddForm'
import EditForm from './pages/EditForm'

import './App.css';

function App() {
  return (
    <div>
      <HashRouter basename="/">
         <Switch>
          <Route path="/add_soal" children={<AddForm />} />
          <Route path="/edit_soal/:id" children={<EditForm />} />
          <Route path="/" exact children={<HomeSoal />} />
        </Switch>
       </HashRouter>
      
    </div>
  );
}

export default App;
