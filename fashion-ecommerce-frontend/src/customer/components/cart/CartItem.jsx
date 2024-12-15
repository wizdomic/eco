import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { color } from "../product/FilterData";

const CartItem = () => {
  return (
    <div className="p-16 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://imgs.search.brave.com/nZE0dnu5gt15_CqeFyytqlN5EpoBLP1FPXXg0bAt_8Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9vUVU0NUxlQUNZ/eVJkbmJBTGJJVklj/WVBwekE9Lzc3eDg6/Nzk0eDcyNS9maXQt/aW4vNTAweDUwMC9w/cm9qZWN0cy1maWxl/cy84Ni84Njg1Lzg2/ODU2Ni82YzcyMGJl/OC1hZmEzLTQwMDct/YTBhZC1jODdiNDQy/ZjIwMzQuanBn"
            alt="mens_kurta"
          />
        </div>

        <div className="ml-5 space-y-1 ">
          <p className="font-semibold">Trendy Mens Fashion Casual</p>
          <p className="opacity-70"> Size: L,Black</p>
          <p className="opacity-70 mt-2">Seller: CrishThalio Rosario</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-2">
            <p className="font-semibold">$192</p>
            <p className="opacity-50 line-through"> $180</p>
            <p className="text-green-600 font-semibold"> 5% Off </p>
          </div>
        </div>

        <div className="lg:flex items-center lg:space-x-10 pt-4"></div>

        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutline />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">3</span>

          <IconButton>
            <AddCircleOutline />
          </IconButton>
        </div>

        <div>
            <Button sx={{color:"RGB(200 85 253)"}}> Remove </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
