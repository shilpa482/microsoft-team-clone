import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import Login from "./Login/Login";
import Home from './components/Home';
import Room from './components/Room';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      
        {!user ? (     
          <Login />
        ) : (
         
            <Router>
            <Header />
            <div className="app__bod">
              <Sidebar />
              <Switch>
              
                <Route path="/room/:roomId" exact component={Chat} />
                 
              </Switch>
        <Switch>
        <Route path="/join/:otherPeerId">
          <Room />
        </Route>
        <Route path="/create">
          <Room />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
            </div>
          </Router>
         
        )}
     
    </div>
  );
}
function AppContainer() {
  const theme = createMuiTheme({
    palette: { type: 'dark' },
    
  });

  return (
    <ThemeProvider theme={theme}>
      
      <Container style={{ marginTop: 10, marginBottom: 10 }} maxWidth="md">
      
        <App />
      </Container>
    </ThemeProvider>
  );
}


export default App;
