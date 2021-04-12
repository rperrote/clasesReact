import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import EmpleadosList from "./pages/EmpleadosList"
import EmpleadoForm from "./pages/EmpleadoForm"



function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/new" exact>
            <EmpleadoForm />
          </Route>
          <Route path="/:id/edit" exact>
            <EmpleadoForm />
          </Route>
          <Route path="/">
            <EmpleadosList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
