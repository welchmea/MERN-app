import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useBackgroundImage } from "../components/useBackgroundImage";
import { pictures } from "../data/products";

function GalleryPage() {
  useBackgroundImage("images/resource-database-hkQKyGX5W1o-unsplash.jpg");
  return (
    <>
      <div className="body-text-in-main" >
        <h2>Gallery</h2>
        <h3>
          <p>
            A collection of photos displayed using React Carousel.
          </p>
        </h3>
        <article>
          <Carousel>
            {pictures.map((key) => (
              <div>
                <img style={{}} src={key.original} alt={key.description} />
                <p>{key.description}</p>
              </div>
            ))}
          </Carousel>
        </article>
      </div>
    </>
  );
}
export default GalleryPage;
