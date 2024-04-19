import React from "react";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

function HomePage() {
  return (
    <>
      <div className="img-div-main">
        <div
          className="icon-hover-main-transform"
          style={{ marginRight: 200, width: "full", fontSize: 40 }}
        >
          <DiMongodb />
        </div>
        <div
          className="icon-hover-main-transform"
          style={{ marginLeft: 200, width: "full", fontSize: 40 }}
        >
          <SiExpress />
        </div>
        <div
          className="icon-hover-main-transform"
          style={{ marginRight: 200, width: "full", fontSize: 40 }}
        >
          <SiReact />
        </div>
        <div
          className="icon-hover-main-transform"
          style={{ marginLeft: 200, width: "full" , fontSize: 40}}
        >
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
            <ul>
              Frontend: Emphasis is on the user experience
              <li>
                React is a JavaScript library that is used to build single page
                applications (SPA) to render the user interface (UI).
              </li>
            </ul>

            <ul>
              Backend: Focuses on producing the functionality of the application
              <li>
                Node.js is a server side, open source, cross-platform runtime
                environment for JavaScript. It allows a developer to utilize
                JavaScript outside of a browser, meaning they can build their
                backend without having to learn a new programming language.
              </li>
              <li>
                MongoDB is a NoSQL, document oriented database. It stores data
                in Collections vs. the traditional Tables that one might see in
                a Relational Database Management System (RDBMS). A document in
                this context is defined by key-value pairs (JSON-like). There
                are no schemas defining the data. This unstructured format
                provides flexibility as data within each Collection can have
                varying fields.{" "}
                <li>
                  Mongoose is built on top of Node.js's MongoDB driver. If the
                  developer prefers to maintain a schema-like approach to data
                  storage, Mongoose is a provision for that capability. In this
                  context it is referred to as a Object Data Model (ODM).
                </li>
              </li>
              <li>
                Express is another framework that is built on top of Node.js. It
                supports request handling with Middleware and HTTP methods when
                building APIs.
              </li>
            </ul>
          </ul>

          <p>
            It is also important to mention that this application demonstrates a
            RESTful style architecture.
            <ul>
              REST Stands for: Representational State Transfer.
              <li>
                This is a common approach to development that is essentially a
                set of guidelines that define how two computers communicate.
                <ul>i.e How Client and Server 'talk'</ul>
              </li>
              <li>
                The client sends a request and the server sends a response.
                <ul>
                  Request: HTTP Methods that are equivalent to CRUD
                  <li>A client sends the operation (PUT, POST, GET, DELETE) to endpoint on the server</li>
                  <li>This can include Headers and Parameters</li>
                  <li>
                    If there is a 500 status code error, the Client can retry
                    the request (GET, PUT, and DELETE are idempotent)
                  </li>
                  Response: Typically returned as JSON data
                  <li>First line will return a proper HTTP status code</li>
                  <li>
                    HTTP Status Codes: 200 - success, 400 - client side error, 500 -
                    server side error
                  </li>
                  <li>
                    If there is a huge amount of data being returned from the
                    server use pagination (limit and offset parameters)
                  </li>
                </ul>
              </li>
              <li>
                The benefits of a REST API are:
                <ul>
                  <li>Simple and Standardized</li>
                  <li>
                    Scalable and Stateless Stateless: Server DOES NOT store
                    client's data and vice-versa, Request/Response are
                    independent.
                  </li>
                  <li>High Performance due to caching support.</li>
                </ul>
              </li>
            </ul>
          </p>
        </article>
      </div>
    </>
  );
}
export default HomePage;
