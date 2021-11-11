import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Home } from '../pages/Home/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navigation } from '../pages/Navbar/Navbar';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { AllTutorials } from '../pages/Gallery/Tutorials';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
import { SearchResults } from '../components/searchResults/searchResults';
import { Gallery } from '../components/Gallery/Gallery';
import { SignIn } from '../pages/SignIn/SignIn';
import { Dashboard } from '../components/AdminPage/Dashbord/Dashboard';
import { AddPhotosAndVideos } from '../components/AdminPage/AddPhotosAndVideos/Add';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { AddAdmins } from '../components/AdminPage/AddAdmins/AddAdmins';
// import { SignUp } from '../pages/SignUp/SignUp';
import { NotFound } from '../components/NotFound/NotFound';
import { useSelector } from 'react-redux';



function App() {
  const [ images, setImages ]= useState([]);
  useEffect(() => {
    axios.request('http://127.0.0.1:8000/api/photos')
    .then(response => setImages(response.data))
    .then((err) => console.log(err))
  }, []);

  const isAunthenticated = useSelector(state => state.signin.isAunthenticated);
  console.log(isAunthenticated)
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
          <Gallery imgUrls={images} />
        </Route>

        <Route exact path = "/sign-in">
          <SignIn />
        </Route>

        {/* <Route exact path = "/admin">
          <SignUp />
        </Route> */}
        <Route exact path = "/admin/dashboard">
          <Sidebar />
          <Dashboard />
        </Route>

        <Route exact path = "/admin/add-new-admins">
          <Sidebar />
          <AddAdmins />
        </Route>

        <Route exact path = "/admin/add-photos-and-videos">
          <Sidebar />
          <AddPhotosAndVideos />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
