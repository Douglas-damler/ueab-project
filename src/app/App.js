import '../App.css';
import { Home } from '../pages/Home/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navigation } from '../pages/Navbar/Navbar';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { AllTutorials } from '../pages/Gallery/Tutorials';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
import { SearchResults } from '../components/searchResults/searchResults';
import { Gallery } from '../components/Gallery/Gallery';
import { imgUrls } from '../links/images';
import { SignIn } from '../pages/SignIn/SignIn';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/tutorials/:id">
          <VideoPlayer />
        </Route>
        <Route exact path = "/search-results">
          <SearchResults />
        </Route>
        <Route exact path="/tutorials">
          <AllTutorials />
        </Route>

        <Route exact path="/contacts">
          <Contact />
        </Route>

        <Route exact path="/gallery">
          <Gallery imgUrls={imgUrls} />
        </Route>

        <Route exact path = "/sign-in">
          <SignIn />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
