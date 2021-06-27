import AboutUs from "./pages/AboutUs";
import GlobalStyled from './components/GlobalStyled'
import ContactUs from "./pages/ConstactUs";
import OurWork from "./pages/OurWork"
import Nav from "./components/Nav";
import {Switch, Route} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";


function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Nav />
      <Switch>
        <Route path="/" exact >
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>  
      </Switch> 
    </div>
  );
}

export default App;
