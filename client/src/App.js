import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Calendar from "./pages/Calendar";
import NoMatch from "./pages/NoMatch";
import Upload from './pages/Upload.js';
// import Gallery from './pages/Gallery.js';
import Header from './components/Header/Header';
import Gallery from './pages/Gallery.js';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import AlertComponent from './components/AlertComponent/AlertComponent';
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ContactsContextProvider from "./components/ContactsContextProvider";
import "./App.css";
// import Quotes from "../src/components/Quotes/Quote.js";
// import NoteList from "./pages/NoteList";




function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>

            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>

            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>

            <Route exact path="/home" component={Home} />

            <Route path="/" exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>


            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/posts/:id" component={Detail} />
            {/* <Route exact path="/gallery" component={Gallery} />             */}

            <Route exact path="/gallery" component={Gallery} />
            <Route component={Upload} path="/upload" />

            <ContactsContextProvider>
              <Route exact path="/contacts" component={Contacts} />
              <Route path="/add" component={AddContact} />
              <Route path="/:id" component={EditContact} />
            </ContactsContextProvider>

            <Route component={NoMatch} />

          </Switch>

          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
