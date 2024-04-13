import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useBackgroundImage } from "../components/useBackgroundImage";

const pictures = [
  {
    original: "images/black-white-mount-hood-summit.jpeg",
    thumbnail: "images/black-white-mount-hood-summit.jpeg",
    description: `Black and white image of Mount Hood (2020)`,
  },
  {
    original: "images/blue-sky-with-clouds.jpeg",
    thumbnail: "images/blue-sky-with-clouds.jpeg",
    description: `Blue Sky in Washington State (2021)`,
  },
  {
    original: "images/enchantments-leavenworth-colchuck-lake.jpeg",
    thumbnail: "images/enchantments-leavenworth-colchuck-lake.jpeg",
    description: `Enchantments Forest (2021)`,
  },
  {
    original: "images/iceland-coastline-winter-snow-sunset-2.jpeg",
    thumbnail: "images/iceland-coastline-winter-snow-sunset-2.jpeg",
    description: `Iceland coastline in the winter (2019)`,
  },
  {
    original: "images/iceland-kirkjufell-western-peninsula-dusk-.jpeg",
    thumbnail: "images/iceland-kirkjufell-western-peninsula-dusk-.jpeg",
    description: `Iceland Kirkjufell Mountain (2019)`,
  },
  {
    original: "images/washington-state-winter-sunset-airplane-view.jpeg",
    thumbnail: "images/washington-state-winter-sunset-airplane-view.jpeg",
    description: `Sunset from an airplane (2019)`,
  },
  {
    original: "images/vietnam-water-buffalo-rice-terraces.jpeg",
    thumbnail: "images/vietnam-water-buffalo-rice-terraces.jpeg",
    description: `Water Buffalo on rice terraces (2018)`,
  },
  {
    original: "images/vietnam-homestay-locals-carrying-wood-cooking-fire.jpeg",
    thumbnail: "images/vietnam-homestay-locals-carrying-wood-cooking-fire.jpeg",
    description: `Vietnam Spring (2018)`,
  },
  {
    original: "images/red-rose-closeup-water-drops.jpeg",
    thumbnail: "images/red-rose-closeup-water-drops.jpeg",
    description: `Red Roses (2022)`,
  },

  {
    original: "images/mount-rainier-backcountry-snowy-summit-summer.jpeg",
    thumbnail: "images/mount-rainier-backcountry-snowy-summit-summer.jpeg",
    description: `Mount Rainier backcountry (2018)`,
    originalHeight: "900px",
  },
];
function GalleryPage() {
  useBackgroundImage("images/pawel-czerwinski-pa-_g6gR_CM-unsplash.jpg");
  return (
    <>
      <div className="body-text-in-main" style={{ backgroundColor: "black" }}>
        <h2>Gallery</h2>
        <h3>
          <p>
            A collection of photos displayed using React image gallery import.
          </p>
        </h3>
        <article>
          <Carousel>
            {pictures.map((key) => (
              <div>
                <img src={key.original} alt={key.description} />
                <p style={{color: 'white'}}>{key.description}</p>
              </div>
            ))}
          </Carousel>
        </article>
      </div>
    </>
  );
}
export default GalleryPage;
