import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Register';
import Signin from './pages/Signin';


function App() {
  return (
    <Router>
            <Switch>
              <Route exact path='/'  component={Home} />
              <Route path='/signup' component={Signup}/>
              <Route path='/signin' component={Signin}/>
              <Route render={() => <Redirect to="/" />} />
            </Switch>
    </Router>
  );
}

export default App;
