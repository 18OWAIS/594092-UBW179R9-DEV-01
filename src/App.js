// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import './App.css'


//importing files all our files here
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Loginplentro';
import Loginngo from './components/Loginngo'
import Signup1 from './components/Signup1';
import Signup2 from './components/Signup2';
import NgoDetails from './components/NgoDetails';
import Details from './components/Details';
import Dashboard from './components/Dashboard';
import StripeContainer from './components/StripeContainer';
import Messenger from './components/messanger/Messanger';

//making router files
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Nav/>
      
      <Route path="/home" >
      <Home />
      </Route>


      <Route path="/ngoDetails/:id">
        <NgoDetails />
      </Route>

      <Route path="/details/:id">
        <Details />
      </Route>


      <Route path="/login/plentropist">
        <Login />
      </Route>

      <Route path="/login/ngo">
        <Loginngo />
      </Route>

      <Route path="/register1">
        <Signup1 />
      </Route>

      <Route path="/dashboard/:id">
        <Dashboard />
      </Route>

      

      <Route path="/register2">
        <Signup2 />
      </Route>
  
      <Route path="/payment">
        <StripeContainer/>
      </Route>

      <Route path="/messenger/:id">
        <Messenger />
      </Route>
      

    </>
  );
}

export default App;

// // import logo from './logo.svg';
// // import './App.css';
// import React from 'react'
// import './App.css'

// // import { loadStripe } from "@stripe/stripe-js";

// //importing files all our files here
// import Nav from './components/Nav';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Login from './components/Login';
// import Signup1 from './components/Signup1';
// import Signup2 from './components/Signup2';
// import NgoDetails from './components/NgoDetails';
// import Details from './components/Details';
// import Dashboard from './components/Dashboard';


// //making router files
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {


//   return (
//     <>
//       <Nav/>
      
//       <Route path="/home" >
//       <Home />
//       </Route>

//       <Route path="/add-details" >
//       <NgoDetails />
//       </Route>


//       <Route path="/about">
//         <About />
//       </Route>

//       <Route path="/contact">
//         <Contact />
//       </Route>

//       <Route path="/login">
//         <Login />
//       </Route>

//       <Route path="/register1">
//         <Signup1 />
//       </Route>

//       <Route path="/register2">
//         <Signup2 />
//       </Route>

//       <Route path="/details">
//         <Details/>
//       </Route>
     
//       <Route path="/dashboard">
//         <Dashboard />
//       </Route>
      
//       <Route path="/details">
//         <Details />
//       </Route>

//      </>
//   );
// }

// export default App;
