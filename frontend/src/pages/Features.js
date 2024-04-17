import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { useBackgroundImage } from "../components/useBackgroundImage";

function FeaturePage() {
  useBackgroundImage("images/krzysztof-kowalik-9pFK1FR_5KQ-unsplash.jpg");
  return (
    <>
      <div className="img-div-main">
        <p>
          “Design creates culture. Culture shapes values. Values determine the
          future.”
        </p>
        <p>— Robert L. Peters, Graphic Designer</p>
      </div>
      <div className="body-text-in-main">
        <h2>Web Development Concepts</h2>

        <nav className="concepts">
          <a href="#servers">Web Servers</a>
          <a href="#frontdesign">Front End Design</a>
          <a href="#images">Optimizing Images</a>
          <a href="#cascade">Cascading Style Sheets</a>
          <a href="#forms">Forms</a>
          <a href="#dom">DOM</a>
        </nav>

        <article id="servers">
          <h3>Web Servers</h3>

          <p>
            A Web server stores the data used to build the website. For example
            this application has files in the form of CSS, JavaScript, and HTML.
            The web server storing copies of these files is Heroku. The platform
            storing the data files connects to the internet and supports the
            exchange of data amongst devices.
          </p>

          <p>
            As this application uses a RESTful style API, it will organize
            resources into a set of unique URI's that differentiate services on
            the server
            <ul>
              URI: Uniform Resource Identifer
              <li>URN</li>
              <li>URL: Most websites utilize this</li>
              The components of the URL web file are:
              <li>schema - HTTPS:</li>
              <li>subdomain - //web-dev-mern-bef2b172b674</li>
              <li>host domain - herokuapp.com</li>
              <li>resources - /feature-page</li>
              Best URI Practices: Standardized
              <li>forward slashes indicate hierarchy </li>
              <li>plural nouns for branches</li>
              <li>begin with lower case</li>
              <li>no file extensions</li>
              <li>hyhens for multiple words</li>
            </ul>
          </p>
        </article>
        <article id="frontdesign">
          <h3>
            Front End Design
            <a href="#top">
              <i>
                <BsArrowUpShort />
              </i>
            </a>
          </h3>
          <p>
            {" "}
            Frontend design marries the technical aspects of a product with the
            visual or interactive components. There is an entire industry,
            usability engineering, centered around researching, adapting, and
            creating products that are easier to use. A familiar example is
            using certain colors or images to make an aesthetically appealing
            website. Then, giving your website a clear way to navigate to the
            rest of the site, ensures people will feel comfortable using your
            site. This helps to create a positive association and increases the
            probability they will return.
          </p>

          <p>
            {" "}
            <ul>
              The five "E"s of usability are:
              <li>
                {" "}
                <em>Effective:</em> Whether the user achieves their goal.
              </li>
              <li>
                <em>Efficient:</em> How quickly a user achieves their goals.
              </li>
              <li>
                {" "}
                <em>Easy to Navigate:</em> The user should not have a hard time
                determining how to use the product.
              </li>
              <li>
                <em>Error-Free:</em> The user should accomplish their
                end-results with minimal errors. If there are errors, they have
                been anticipated by the developer.
              </li>
              <li>
                <em>Enjoyable:</em> The product should be engaging to the user,
                and leave them wanting to use it again.
              </li>
            </ul>
          </p>
        </article>

        <article id="images">
          <h3>
            Optimizing Images
            <a href="#top">
              <i>
                <BsArrowUpShort />
              </i>
            </a>
          </h3>
          <p>
            <strong>The major specifications for images on the web are:</strong>
          </p>
          <ul>
            <li>Descriptive file name</li>
            <li>Small file size</li>
            <li>Exact dimensions</li>
            <li>Correct file format</li>
            <li>Reduced resolution</li>
            <li>Color mode</li>
          </ul>
          <p>
            A descriptive file name will include who, what, when, and where.
            This is to help search engines locate and display your photos.
            Making the file size as small as it can go, while still displaying
            the image properly, will help with page load times. Other ways to
            ensure the quality of your images, are by choosing the correct file
            format, discussed more below, considering the resolution of the
            device that the image will be displayed, and choosing the correct
            color mode.
          </p>

          <p>
            <ul>
              File formats:
              <li>
                <em>JPG: </em>these types of files are used for photography,
                they can compress into smaller sizes, and remain rectangular.
              </li>
              <li>
                <em>WebP: </em>these files are similar to JPG, except
                transparent backgrounds can be applied to this format.{" "}
              </li>
              <li>
                <em>SVG: </em>this is known as scalable vector graphics, they
                are marked with XML, and are typically for two-dimensional
                graphics.
              </li>
              <li>
                <em>PNG: </em>best for biomorphic shapes and line art, and solid
                colors.
              </li>
              <li>
                <em>GIF: </em> typically seen for use with short videos.
              </li>
            </ul>
          </p>
        </article>

        <article id="cascade">
          <h3>
            Cascading Style Sheets
            <a href="#top">
              <i>
                <BsArrowUpShort />
              </i>
            </a>
          </h3>
          <p>
            {" "}
            Stylesheets are used for a variety of reasons. One is to
            differentiate sites, which enables better branding. From a business
            standpoint, this is an essential tool to make your site standout.
            Another reason to use stylesheets is to improve usability. Going
            back to the 5 E's of usability, stylesheets can assist in
            accomplishing these goals by improving the readability and
            navigation.
          </p>
        </article>

        <article id="forms">
          <h3>
            Forms
            <a href="#top">
              <i>
                <BsArrowUpShort />
              </i>
            </a>
          </h3>
          <p>
            There are six major goals when creating accessible forms. The first
            goal is to ensure that the user is able to understand exactly how to
            fill out the form. This could be done by the use of visual
            placeholders, or sound for those who do not have vision. The second
            goal is to show the user which fields are required. This is
            typically accomplished through certain design aspects like asterisks
            or use of color schemes to indicate which fields have to be filled
            in before the form can be submitted. The third goal is to help the
            user know where to begin. This is done through the use of the
            autofocus attribute. Another benefit of autofocus is that it helps
            people who may not have access to a keyboard. The fourth goal is to
            ensure the entire form can be filled out with only the use of the
            keyboard. The fifth goal is to add tab indexing to the forms, so
            that a logical order is followed as the user fills in the spaces.
            The final goal is to make sure there are validation responses that
            match the site's style. This is so that the user can legibly
            understand whether the form was submitted correctly.{" "}
          </p>

          <p>
            The major tags utilized on a form are: form, label, input, select
            with options, textarea, and button. The form tag attributes are
            action and method. The value given to action, which is either a
            relative URL or an absolute URL, indicates where the form should be
            directed. The method is either the HTTP method, POST or GET. The
            label attribute tag is for, this is where the description of the
            input field should go. The for attribute matches the input ID. The
            input tag attributes are type and name. Input is how the form
            receives data from the user. The type attribute is to indicate what
            the style is of data that is being entered. For example, radio type
            is a style of data where the user selects one option in a given
            list. The name attribute is for the server recognition. It helps the
            server locate where the data you have specified is on your page. The
            attribute for select with options is name. The value="" in option is
            sent with the name="" to indicate to the server the choice the user
            made. The text area has many attributes to help style this portion
            of the form. The ID attribute is attached to the text area's own
            label. This is to be able to associate the user's input with the
            correct portion of the form. Required could be one attribute used,
            or the placeholder attribute could be used to describe the
            appropriate length of text. The button performs the action specified
            in the form tag. The necessary attribute tag is type.{" "}
          </p>

          <p>
            {" "}
            The major form style requirements are: the size of the input fields,
            color schemes and text to indicate required or valid input, and
            adequate labels. Input fields need to accommodate a couple of
            important factors. One factor, is visibility. Two, is that they
            should be large enough for the various sizes of people's hands. This
            is to help with accessibility if they are trying to fill out a form
            on a phone. Forms should be styled in a way, that clearly indicates
            to the user, what is a label, what is an input field, what is a
            button, and where else they can navigate to from the current page.
            This can be accomplished one way, through use of colors and text.
            Color schemes work very well by capitalized on familiar
            associations. For example, red is typically used for error, stop, or
            bad. So a form can be styled with red when a user enters invalid
            input. Font and font-size need to be adjusted for readability and be
            able to accommodate varying levels of vision. Finally, labels should
            be placed in a way that clearly indicate which field they belong to.
            Ensuring your form has adequate labels will help the user breeze
            through the form without any unnecessary troubles.
          </p>
        </article>

        <article id="dom">
          <h3>
            Testing DOM Changes
            <a href="#top">
              <i>
                <BsArrowUpShort />
              </i>
            </a>
          </h3>
          <p>
            DOM, or Document Object Model, allows a web page to be manipulated.
            Developers can use JavaScript and Express to update DOM because it has
            tools that allow for greater efficiency and stronger programs.
            JavaScript is defaulted to synchronous programming, but has the
            capability for asynchronous programming. Asynchronous programming is
            more efficient, as each line of code does not have to wait to be run
            until the previous line of code has finished. Express has a feature
            called middlewares, which are functions that correspond to the
            request-response cycle.{" "}
          </p>
        </article>
      </div>
    </>
  );
}
export default FeaturePage;
