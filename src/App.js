import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TitleBar from './Components/TitleBar/TitleBar';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import BookingPage from './Components/BookingPage/BookingPage';
import Login from './Components/Login/Login';
import IntroSlider from './Components/IntroSlider/IntroSlider';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/SignUp/SignUp';
import CommonSignIn from './Components/CommonSignIn/CommonSignIn';
import RoomSelectionPage from './Components/RoomSelectionPage/RoomSelectionPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Notification from './Components/Notification/Notification';

initializeIcons();

function App() {

  return (
    <>
      <Router className="main">
        <TitleBar/>
        <Switch> 
          <Route path="/places/:placeId">
            <BookingPage />
          </Route>
          <Route exact path="/">
            <IntroSlider/>
          </Route>
          <Route path="/login">
            <Login />
            <CommonSignIn/>
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/signup">
            <SignUp />
            <CommonSignIn/>
          </Route>
          <PrivateRoute path="/:placeName/hotels">
            <RoomSelectionPage/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
