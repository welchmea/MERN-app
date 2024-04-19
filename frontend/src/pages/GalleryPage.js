import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { pictures } from "../data/products";

function GalleryPage() {
  return (
    <>
      <div className="body-text-in-main" >
        <h2>Gallery</h2>
        <h3>
          <p>
            A collection of photos displayed using React Carousel.
          </p>
        </h3>
        <div className="">
          <Carousel className="carousel-style" showArrows={true} showThumbs={false} showStatus={true}>
            {pictures.map((key) => (
              <div>
                <img style={{}} src={key.original} alt={key.description} />
                <p>{key.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default GalleryPage;
