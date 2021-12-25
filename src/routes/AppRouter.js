import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Home } from "../components/challenge/Home";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { login } from "../actions/auth";
import Loading from "../components/Loading";
import { ListarQuestion } from "../actions/questionAction";
import { Profile } from "../components/challenge/Profile";
import { LeaderBoard } from "../components/challenge/LeaderBoard";
import { Dev } from "../components/challenge/Dev";
import { Game } from "../components/challenge/Game";
import AddQ from "../components/challenge/AddQ";

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLooggedIn, setsIsLoogedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setsIsLoogedIn(true);
        dispatch(ListarQuestion(user.uid));
      } else {
        setsIsLoogedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <Loading />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLooggedIn}
          />

          <PrivateRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isLooggedIn}
          />

          <PrivateRoute
            exact
            path="/profile"
            component={Profile}
            isAuthenticated={isLooggedIn}
          />

          <PrivateRoute
            exact
            path="/leaderboard"
            component={LeaderBoard}
            isAuthenticated={isLooggedIn}
          />

          <PrivateRoute
            exact
            path="/dev"
            component={Dev}
            isAuthenticated={isLooggedIn}
          />

          <PrivateRoute
            exact
            path="/game"
            component={Game}
            isAuthenticated={isLooggedIn}
          />

          <PrivateRoute
            exact
            path="/addQ"
            component={AddQ}
            isAuthenticated={isLooggedIn}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
