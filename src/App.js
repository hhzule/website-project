import Nav from './Components/Nav';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import About from './Components/About'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Router>
//         <Switch>
//           <Route component={About} path="/about"></Route>
//           <Route exact path='/'>
//             <Body />
//           </Route>

//         </Switch>

//       </Router>



//       <Footer />

//     </div>
//   );
// }

// export default App;
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Body />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
