import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import ToolBar from "./components/ToolBar";
import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./store/auth/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  return (
    <div className="App">
      <ToolBar />
      <Switch>
        <Route path="/post/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
