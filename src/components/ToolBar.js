import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccessToken, selectProfile } from "../store/auth/selectors";
import { logout } from "../store/auth/actions";
import { useDispatch } from "react-redux";
export default function ToolBar() {
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);
  const profile = useSelector(selectProfile);
  return (
    <div>
      <NavLink
        to="/"
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        Home
      </NavLink>{" "}
      {!token ? (
        <NavLink
          to="/login"
          activeStyle={{
            fontWeight: "bold",
            color: "black",
          }}
        >
          Login
        </NavLink>
      ) : (
        <div>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <div> welcome {profile.name}</div>
        </div>
      )}{" "}
    </div>
  );
}
