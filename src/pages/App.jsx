import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Servicos from './Servicos';
import DadosPaciente from './DadosPaciente';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Servicos" component={Servicos} />
        <Route path="/dados-paciente/:id" component={DadosPaciente} />
      </Switch>
    </Router>
  );
};

export default App;
