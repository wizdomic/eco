import axios from "axios";
import  {api_based_url}  from "../../config/apiConfig";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";
import { useDispatch } from "react-redux";

// Register
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${api_based_url}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message || "An error occurred"));
  }
};

// Login
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(
      `${api_based_url}/auth/signin`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      }
    );

    // Log the full response object for inspection
    console.log("Full API Response:", response);
    console.log("API Response Data:", response.data);

    // Check for the JWT in the response
    if (response.data && response.data.jwt) {
      localStorage.setItem("jwt", response.data.jwt); // Store JWT properly
      dispatch(loginSuccess(response.data));
    } else {
      throw new Error("JWT not found in response.");
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "An error occurred";
    dispatch(loginFailure(errorMessage));
  }
};


// Get User
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = () => async (dispatch) => {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    dispatch(getUserFailure("No JWT token found"));
    return;
  }

  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${api_based_url}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message || "An error occurred"));
  }
};

// Logout
export const logout = () => {
  return (dispatch) => {
    // Clear user data and trigger logout
    localStorage.clear();
    dispatch({ type: LOGOUT, payload: null });
  };
};
