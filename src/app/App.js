import "../App.css";
import { Home } from "../pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "../pages/Navbar/Navbar";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { AllTutorials } from "../pages/Gallery/Tutorials";
import { VideoPlayer } from "../components/VideoPlayer/VideoPlayer";
import { SearchResults } from "../components/searchResults/searchResults";
import { Gallery } from "../components/Gallery/Gallery";
import { SignIn } from "../pages/SignIn/SignIn";
import { Dashboard } from "../components/AdminPage/Dashbord/Dashboard";
import { AddPhotosAndVideos } from "../components/AdminPage/AddPhotosAndVideos/Add";
import { AddAdmins } from "../components/AdminPage/AddAdmins/AddAdmins";
import { NotFound } from "../components/NotFound/NotFound";
import { Redirect } from "react-router";

function App() {
  const isAunthenticated = sessionStorage.getItem("auth_token");

  return (
    <Router>
      <Navigation />
      <div className="main-container mt-5">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/tutorials/:id">
            <VideoPlayer />
          </Route>
          <Route exact path="/search-results">
            <SearchResults />
          </Route>
          <Route exact path="/tutorials">
            <AllTutorials />
          </Route>

          <Route exact path="/contacts">
            <Contact />
          </Route>

          <Route exact path="/gallery">
            <Gallery />
          </Route>

          <Route exact path="/sign-in">
            <SignIn />
          </Route>

          <Route exact path="/admin/dashboard">
            {isAunthenticated ? (
              <>
                <Dashboard />
              </>
            ) : (
              <Redirect to="/sign-in" />
            )}
          </Route>

          <Route exact path="/admin/add-new-admins">
            {isAunthenticated ? (
              <>
                <AddAdmins />
              </>
            ) : (
              <Redirect to="/sign-in" />
            )}
          </Route>

          <Route exact path="/admin/add-photos-and-videos">
            {isAunthenticated ? (
              <>
                <AddPhotosAndVideos />
              </>
            ) : (
              <Redirect to="/sign-in" />
            )}
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
