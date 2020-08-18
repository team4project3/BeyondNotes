import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Calendar from "./pages/Calendar";
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from "./utils/GlobalState";
import NoteList from "./pages/NoteList";
import Upload from './pages/Upload.js';
import Gallery from './pages/Gallery.js';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import AlertComponent from './components/AlertComponent/AlertComponent'; 
import Contacts from "./components/Contacts";
import "./App.css";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ContactsContextProvider from "./components/ContactsContextProvider";
import Quotes from "../src/components/Quotes/Quote.js";



function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <div> 
      {/* <ContactsContextProvider> */}
        <StoreProvider>
          {/* <ContactsContextProvider> */}
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/home" component={Home} />
            <Route path="/" exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route exact path="/calendar" component={Calendar}/>

            <Route exact path="/contacts" component={Contacts} /> 
            <Route path="/add" component={AddContact} />
            <Route path="/:id" component={EditContact} /> 

            <Route exact path="/notelist" component={NoteList} />

            <Route exact path="/posts/:id" component={Detail} />
            <Route exact path="/gallery" component={Gallery} />            
            <Route component={Upload} path="/upload" />
          <Route component={NoMatch} />
          </Switch>

          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
          {/* </ContactsContextProvider>  */}
        </StoreProvider>
        {/* </ContactsContextProvider> */}
      </div>
    </Router>
  );
}

export default App;
