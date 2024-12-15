import { Avatar, Box, Grid2 } from "@mui/material";
import React from "react";
import Rating from '@mui/material/Rating';

const ProductReviewCard = () => {
  return (
    <div>
      <Grid2 container spacing={2} gap={3}>
        <Grid2 item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid2>
        {/* second grid */}
        <Grid2 item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Raam</p>
              <p className="opacity-70"> April 5, 2024</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={.5}/>
          <p>Nice Product , i love this shirt</p>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ProductReviewCard;
