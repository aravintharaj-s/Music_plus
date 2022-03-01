import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Register';
import Signin from './pages/Signin';
import Page404 from './pages/Page404';
import ParticleBackground from './components/ParticleBackground'


function App() {
  return (
    <>
      <Router>
              <Switch>
                <Route exact path='/'  component={Home} />
                <Route path='/signup' component={Signup}/>
                <Route path='/signin' component={Signin}/>
                <Route component={Page404}/>
                {/* <Route render={() => <Redirect to="/" />} /> */}
              </Switch>
      </Router>
    </>
    
  );
}

export default App;
