import React from "react";
import Addresscard from "../addressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-10">Delivery Address</h1>
        <Addresscard />
      </div>

      <div className="py-8">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item sx={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70"
                  alt="mens fashion"
                />

                <div className="ml-5 space-y-2">
                  <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5 opacity-60">
                    <span>Color: Pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: Wizdomic</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span> Rate And Review</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
