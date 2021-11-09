import { publicRoutes } from ".";
import store from "../store/store";
import secureStorage from "../util/secureStorage";
const routeGuard = async (props) => {
  // const token = await store.getState().authReducer.token
  const token = secureStorage.getItem("token");
  let next = {
    isAllowed: true,
    newLocation: "/",
  };
  if (!!token) {
    return next;
  } else {
    console.log(props.children.props.location.pathname);
    let actualPath = props.children.props.location.pathname.split("/");
    if (publicRoutes.includes(actualPath[1])) {
      return next;
    } else {
      next.isAllowed = false;
      return next;
    }
  }
};

export default routeGuard;
