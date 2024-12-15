import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { Button } from "@mui/material";

const HomeSectionCardCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = data.slice(0, 40).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  const maxIndex = items.length - 1;

  const slidePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const slideNext = () => {
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 text-center">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={{
            0: { items: 1 },
            720: { items: 3 },
            1024: { items: 5.5 },
          }}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          key={activeIndex}  // Force re-render on index change
        />
        {activeIndex < maxIndex && (
          <Button
            className="z-50"
            variant="contained"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
        {activeIndex > 0 && (
          <Button
            className="z-50"
            variant="contained"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCardCarousel;