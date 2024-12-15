export const color = [
  "white",
  "black",
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "pink",
  "purple",
  "brown",
  "gray",
  "cyan",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "red", label: "Red" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "orange", label: "Orange" },
      { value: "pink", label: "Pink" },
      { value: "purple", label: "Purple" },
      { value: "brown", label: "Brown" },
      { value: "gray", label: "Gray" },
      { value: "cyan", label: "Cyan" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 to ₹399" },
      { value: "399-999", label: "₹399 to ₹999" },
      { value: "999-1999", label: "₹999 to ₹1999" },
      { value: "1999-2999", label: "₹1999 to ₹2999" },
      { value: "3999-4999", label: "₹3999 to ₹4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "1-25", label: "1% to 25%" },
      { value: "26-50", label: "26% to 50%" },
      { value: "51-75", label: "51% to 75%" },
      { value: "76-80", label: "76% to 80%" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in-stock", label: "In Stock" },
      { value: "out-of-stock", label: "Out of Stock" },
    ],
  },
  {
    id: "gender",
    name: "Gender",
    options: [
      {value:"kid", label:"Kid"},
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },

    ],
  },
];
