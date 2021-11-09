import axios from "../../util/axios-auth";
import { SIGN_IN } from "../actionTypes";
import secureStorage from "../../util/secureStorage";

export const logIn = (user) => async (dispatch, getState) => {
  const { data } = await axios.post("/user-management/login/user", {
    email: user.email,
    password: user.password,
  });
  await secureStorage.setItem("token", data.result[0].token);
  await secureStorage.setItem("userId",data.result[0]._id)  
  await dispatch({ type: SIGN_IN, payload: data.result[0] });
};
