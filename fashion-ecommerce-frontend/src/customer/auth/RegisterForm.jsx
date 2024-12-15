import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../state/auth/Action";
import store from "../../state/store";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt")
  //access the jwt after register
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt,auth.jwt]);


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(register(userData));
    console.log("Form submitted", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* First Name */}
          <Grid item xs={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>

          {/* Password */}
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="new-password"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                backgroundColor: "#9155FD",
                ":hover": { backgroundColor: "#7E49E6" },
                padding: { xs: "0.75rem 0", sm: "1rem 0" }, // Responsive padding
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p> If you have already account ?</p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5"
            size="small"
          >
            {" "}
            LogIn{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
