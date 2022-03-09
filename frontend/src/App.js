import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import DeliveryScreen from './screens/DeliveryScreen'
import ContactScreen from './screens/ContactScreen'
import { useDispatch, useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import TrackingScreen from './screens/TrackingScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (<BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div className="brand">
         <p> <Link  to="/">
            Arafy
          </Link></p>
        </div>
        <div >
        <Link className="link"to="/contact"><i class="far fa-comments fa-lg"></i>Contact</Link>
        {userInfo ? (
          <Link className="link"to="/delivery"><i class="fas fa-truck-pickup fa-lg"></i>Delivery</Link>
):''}
        {userInfo ? (
          <Link className="link" to="/tracking"><i class="fas fa-search-location fa-lg"></i>Tracking</Link>
):''}
          {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>
                      SignOut
                    </Link>
                </ul>
              </div>
            ) : (
              <Link className="link" to="/signin"><i class="fas fa-user"></i>Sign In</Link>
            )}
{userInfo ? (
          ''
):<Link className="link" to="/register"><i class="fas fa-user"></i>SignUp</Link>}
        </div>
      </header>
      <main>
      <Route path="/contact" component={ContactScreen} ></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/register" component={RegisterScreen} ></Route>
      <Route path="/signin" component={SigninScreen} ></Route>
      <Route path="/delivery" component={DeliveryScreen} ></Route>
      <Route path="/tracking" component={TrackingScreen} ></Route>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App; 