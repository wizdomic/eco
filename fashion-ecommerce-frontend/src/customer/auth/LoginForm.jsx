import { Button, Grid, TextField, Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../state/auth/Action";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    error: authError,
    user,
  } = useSelector((state) => state.auth);

  React.useEffect(() => {
    console.log("User state updated:", user);
    if (user?.jwt) {
      console.log("Redirecting to dashboard");
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData)); // Dispatch login action with userData
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
          {authError && (
            <Grid item xs={12}>
              <Alert severity="error">{authError}</Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={isLoading}
              sx={{
                backgroundColor: "#9155FD",
                ":hover": { backgroundColor: "#7E49E6" },
                padding: { xs: "0.75rem 0", sm: "1rem 0" },
              }}
            >
              {isLoading ? "Logging In..." : "LogIn"}
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>Do not have an account?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
          >
            Create An Account/Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
