
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddEmployeeComponent from './Components/AddEmployeeComponent';
import UpdateEmployee from './Components/UpdateEmployee';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employees" component={AddEmployeeComponent}></Route>
            <Route path="/update-employees/:id" component={UpdateEmployee}></Route>
            <Route path="/view-employees/:id" component={ViewEmployeeComponent}></Route>
           
          </Switch>
          
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
