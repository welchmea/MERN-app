import React from "react";
import { useBackgroundImage } from "../components/useBackgroundImage";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

function HomePage() {
  useBackgroundImage("images/pawel-czerwinski-LAadii3dGQM-unsplash.jpg");
  return (
    <>
      <div className="img-div-main">
        <div className="icon-hover-main-transform" style={{ marginRight: 200, width: 'full'}}>
          <DiMongodb />
        </div>
        <div className="icon-hover-main-transform" style={{ marginLeft: 200, width: 'full'}}>
          <SiExpress />
        </div>
        <div className="icon-hover-main-transform" style={{ marginRight: 200, width: 'full'}}>
          <SiReact />
        </div>
        <div className="icon-hover-main-transform" style={{ marginLeft: 200, width: 'full'}}>
          <SiNodedotjs />
        </div>
      </div>
      <div className="body-text-in-main">
        <h2>Web Development Portfolio Project</h2>
        <article>
          <p className="databasePara">
            There were multiple technologies utilized to build this full-stack
            MERN app.
          </p>
          <p>A MERN stack is made up of MongoDB, Express, React, and Node. </p>
          <ul>
            <li>
              Node is an open source library that allows for running web
              applications outside the browser.
            </li>
            <li>
              MongoDB is a document-oriented database, it provides support for
              storage of JSON documents and allows for efficient queries.{" "}
            </li>
            <li>
              Mongoose is specifically for use with Node.js and provides an
              Object Data Modeling library, for MongoDB.
            </li>
            <li>
              Express provides a framework for building API's while working in
              Node.js. It assists in managing communication between servers and
              routes.
            </li>
            <li>
              React.js is used for the front end, to render the user interface.
              It is a single page application, that downloads the necessary
              files from the server once.
            </li>
          </ul>

          <p>
            {" "}
            The basic building blocks for implementing each component of this
            MERN stack are JavaScript, HTML, CSS, Goggle Fonts, and React icons.
          </p>
          <ul>
            <li>
              JavaScript is an Object-Oriented Programming language that can be
              used to develop both the frontend and backend. It is the language
              used to write React applications.{" "}
            </li>
            <li>
              HTML is the standard language for creating websites, it
              essentially tells the browser how to display the static content.
            </li>
            <li>
              CSS has been utilized as an external stylesheet to style the
              pages.
            </li>
            <li>
              One of the choices for styling is done by importing Google Fonts,
              which is a library of font families.
            </li>
            <li>
              The icons were imported from the react-icon library and rendered
              as components.
            </li>
            <li>
              Images have been optimized to proper specifications in order to
              support efficient load times in the browser.
            </li>
          </ul>

          <p>
            Finally, the backend also utilized REST API. REST is a structural
            style for building an application program interface (API), in this
            case through Express, that uses HTTP requests to perform CRUD
            operations.
          </p>
        </article>
      </div>
    </>
  );
}
export default HomePage;
