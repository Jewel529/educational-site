
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Instructor from './components/Instructor/Instructor';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import JoinTeam from './components/Jointeam/JoinTeam';

function App() {
  return (
    <div className="main-section" >
      <BrowserRouter>
        {/* header navigation always show even page are changed */}
        <Header></Header>

        <Switch>
          <Route exact path="/">
            {/* default home page will be showed if any router will not selected.that*/}
            <Home></Home>
          </Route>
          <Route exact path="/home">

            <Home></Home>
          </Route>
          <Route exact path="/about">
          <About></About>
           </Route>

          <Route exact path="/services">
            <Services></Services>
          </Route>

          <Route exact path="/instructors">
            <Instructor></Instructor>
          </Route>
          <Route exact path="/join">
            <JoinTeam></JoinTeam>
          </Route>

          <Route exact path="*">
            {/* 404 page will be showed */}
            <NotFound></NotFound>
          </Route>

        </Switch>
        {/* Footer sectionalways show even page are changed */}
        <Footer></Footer>





      </BrowserRouter>

    </div>
  );
}

export default App;
