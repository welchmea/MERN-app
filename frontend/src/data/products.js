//'use strict';

// Define a JavaScript object with arrays of products, their company names, and prices:
const products = [
  { company: "AGYM", product: "Spinning Cat Scratcher Ball", price: 52.99 },
  { company: "Jasonwell", product: "Foldable Dog Pool", price: 27.25 },
  { company: "Expawlorer", product: "Dog Fence Window", price: 30.5 },
  { company: "Lollimeow", product: "Capsule Pet Travel Backpack", price: 59.0 },
  { company: "Drool'd", product: "Cat Hamster Wheel", price: 349.75 },
];

// Allow exporting of the object to other functions:
//module.exports.products = products;
export default products;

export const pictures = [
  {
    original: "/images/winding-river-black-white-vietnam.jpg",
    thumbnail: "images/winding-river-black-white-vietnam.jpg",
    description: `Winding River (2022)`,
  },
  {
    original: "/images/black-white-mount-hood-summit.jpeg",
    thumbnail: "images/black-white-mount-hood-summit.jpeg",
    description: `Black and white image of Mount Hood (2020)`,
  },
  {
    original: "/images/buildings-black-white.jpeg",
    thumbnail: "images/buildings-black-white.jpeg",
    description: `Downtown Missouri (2021)`,
  },
  {
    original: "/images/church-midnight-sun-iceland.jpeg",
    thumbnail: "images/church-midnight-sun-iceland.jpeg",
    description: `Black Church Iceland (2019)`,
  },
  {
    original: "/images/city-buildings-vietnam.jpeg",
    thumbnail: "images/city-buildings-vietnam.jpeg",
    description: `Vietnam (2019)`,
  },
  {
    original: "/images/devils-knob-clearing.jpeg",
    thumbnail: "images/devils-knob-clearing.jpeg",
    description: `Devil's Knob (2019)`,
  },
  {
    original: "/images/devils-knob-morning-fog.jpeg",
    thumbnail: "images/devils-knob-morning-fog.jpeg",
    description: `Devil's Knob (2019)`,
  },
  {
    original: "/images/dusk-mountain-side.jpeg",
    thumbnail: "images/dusk-mountain-side.jpeg",
    description: `Mount Hood at Dusk (2018)`,
  },
  {
    original: "/images/sepia-tropical-vietnam.jpeg",
    thumbnail: "images/sepia-tropical-vietnam.jpeg",
    description: `Vietnam Spring (2018)`,
  },

  {
    original: "images/rice-paddies-vietnam.jpeg",
    thumbnail: "images/rice-paddies-vietnam.jpeg",
    description: `Vietnam Spring Rice Paddies (2018)`,
  },
];

// Display the object in a table in the terminal console to confirm it works:
// https://developer.mozilla.org/en-US/docs/Web/API/Console/table
//console.table(products);
