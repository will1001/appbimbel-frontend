import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import HomeSoal from './pages/HomeSoal'
import FormSoal from './pages/FormSoal'

import './App.css';

function App() {
  return (
    <div>
      <Router>
         <Switch>
          <Route path="/buat_soal">
            <FormSoal />
          </Route>
          <Route path="/">
            <HomeSoal />
          </Route>
        </Switch>
       </Router>
      
    </div>
  );
}

export default App;
