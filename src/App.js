import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";

import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import firebase from "./firebase";
import { setUser } from "./redux/actions/user_action";

function App() {
  let history = useHistory();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    //user의 상태를 지켜봄
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      // const dispatch = useDispatch(function)
      // const state = useSelector(state => state.state)
      //로그인이 된 상태
      if (user) {
        history.push("/");
        dispatch(setUser(user));
      } else {
        history.push("/login");
      }
    });
  }, [dispatch, history]);
  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    );
  }
}

export default App;
