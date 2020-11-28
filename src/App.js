import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//components
import HomeSoal from './pages/HomeSoal'
import AddForm from './pages/AddForm'
import EditForm from './pages/EditForm'

import './App.css';

function App() {
  return (
    <div>
      <Router>
         <Switch>
          <Route path="/add_soal" children={<AddForm />} />
          <Route path="/edit_soal/:id" children={<EditForm />} />
          <Route path="/">
            <HomeSoal />
          </Route>
        </Switch>
       </Router>
      
    </div>
  );
}

export default App;
