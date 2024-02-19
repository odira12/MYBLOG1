
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Switch>
  
      <Route exact path="/">
          <Home/>
          </Route>

     <Route path = "/Form">
      <Form/>

     </Route>

     {/* <Route path ="/BlogDetails/:id">
      <BlogDetails/>
      </Route>  
      
      <Route path="*">
      <NotFound/>
  </Route> */}
      </Switch>

      </div>

    </div>
    </Router>
  );
}




export default App;

