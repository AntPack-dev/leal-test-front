import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// import { FaGamepad } from 'react-icons/fa';
// import { Helmet } from "react-helmet";

import Login from '../views/Login';
import Home from '../views/Home/index';

import ResetPassword from '../views/Auth/ResetPassword';
import Page404 from '../views/404/404';


const Routes = () => {
  return (
    <>
      <Router>
        <Switch
        >
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/auth/password-update" component={ResetPassword} />
          <Route path="*" component={Page404} />
          {/* <Route path="/trivia" component={Game} /> */}

          {/* <div style={{ position: 'fixed', bottom: 80, right: 10, cursor: 'pointer', zIndex: '1000' }}>
          <a href='/trivia'>
            <img id="btn-trivia" src={ButtonGame} alt="" />  
          </a>
        </div> */}

        </Switch>
      </Router>

    </>
  );
};

export default Routes;
