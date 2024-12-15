import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../addressCard/AddressCard";
import { LastPage } from "@mui/icons-material";

const DeliveryAddressForm = () => {

const handleSubmit = (e) =>{
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);

}



  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-3 cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>

                {/* firstname */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required={true}
                    id="firstName"
                    label="firstName"
                    name="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                {/* lastname */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required={true}
                    id="lastName"
                    label="lastName"
                    name="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                {/* address */}
                <Grid item xs={12}>
                  <TextField
                    required={true}
                    id="address"
                    label="address"
                    name="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>

                {/* city */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required={true}
                    id="city"
                    label="city"
                    name="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                {/* state/province/region */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required={true}
                    id="state"
                    label="state"
                    name="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                {/* Zip/Postal Code */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required={true}
                    id="zip"
                    label="zip"
                    name="Zip/Postal Code"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required={true}
                    id="phoneNumber"
                    label="phoneNumber"
                    name="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                {/* Button */}
                <Grid item xs={12} sm={6}>
                   <Button
              sx={{ mt: 2, py:1.5, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
              type="submit"
            >
              Deliver Here
            </Button>
                </Grid>

              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
