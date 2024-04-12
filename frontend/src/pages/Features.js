import React from "react";
import { BsArrowUpShort } from "react-icons/bs";

function FeaturePage() {
  return (
    <>
      <h2>Web Development Concepts</h2>

      <nav className="concepts">
        <a href="#servers">About Web Servers</a>
        <a href="#frontdesign">Front End Design</a>
        <a href="#images">Optimizing Images</a>
        <a href="#cascade">Cascading Style Sheets</a>
        <a href="#forms">Forms</a>
        <a href="#express">Express</a>
        <a href="#dom">DOM</a>
      </nav>

      <article id="servers">
        <h3>About Web Servers</h3>
        <p>
          {" "}
          This page was created using an IDE, Visual Studio Code (VS). The
          starting point was to open Finder on a MacBook Air. Navigate to
          Documents, and create a new folder titled: CS 290. Add the subfolder:
          a1-welchmea. Then in VS, open the folder. Add a new file to
          a1-welchmea, called index.html. HTML tags were then added to the file,
          along with text. Once the file was saved, it was opened in a web
          browser by clicking on the file in Finder. An index.html file is
          typically the default homepage of a website, when no other requests
          are made to the server. In this case, it is just a local file on my
          computer. It was opened in a web browser through a default setting.
        </p>

        <p>
          {" "}
          The file will be added to a web server. Before this occurs, in the
          browser, navigate to the Web Developer tools. Click on the Network
          tab, find Name, and locate the index.html file that was created. Here
          you will also find the names main.js and main.css. The only name that
          has the status, as OK (200), is the index.html. The other two are
          showing ERR_FILE_NOT_FOUND (404).
        </p>

        <p>
          {" "}
          The file has now been added to the OSU engineering web server. Again,
          navigate to the Web Developer tools, click on the Network tab. Look
          under Name and see that there is a new name, favicon.ico. The status
          is OK (200). The favicon.ico has status OK because the file has been
          successfully added to the web server, and the web server is displaying
          the representative icon for its page. The reason main.js and main.css
          are showing status 404 is that the files in which they would be
          located have not been created or added to the web server.
        </p>

        <p>
          {" "}
          The components of the URL web file are:
          <strong>schema - </strong> HTTPS:
          <strong>subdomain - </strong> `//web.engr`
          <strong>host domain - </strong> oregonstate.edu
          <strong>resources - </strong> /~welchmea/a1-welchmea/
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
          creating products that are easier to use. Frontend design is one of
          the tools that is used to accomplish this goal. A familiar example is
          using certain colors or images to make an aesthetically appealing
          website. Then, giving your website a clear way to navigate to the rest
          of the site, ensures people will feel comfortable using your site.
          This helps to create a positive association and increases the
          probability they will return.
        </p>

        <p>
          {" "}
          <strong>The five "E"s of usability are:</strong>
        </p>
        <dl>
          <dt>
            <em>Effective:</em>
          </dt>
          <dd>Whether the user achieves their goal.</dd>
          <dt>
            <em>Efficient:</em>
          </dt>
          <dd>How quickly a user achieves their goals.</dd>
          <dt>
            <em>Easy to Navigate:</em>
          </dt>
          <dd>
            The user should not have a hard time determining how to use the
            product.{" "}
          </dd>
          <dt>
            <em>Error-Free:</em>
          </dt>
          <dd>
            The user should accomplish their end-results with minimal errors. If
            there are errors, they have been anticipated by the developer.
          </dd>
          <dt>
            <em>Enjoyable:</em>
          </dt>
          <dd>
            The product should be engaging to the user, and leave them wanting
            to use it again.
          </dd>
        </dl>

        <p>
          {" "}
          Page layout tags are essentially meaningful descriptions of the
          different sections of your content. They are used inside the body
          tags. So, they relate to the visual part of your content.
          Stylistically, they divide the content by blocks, with a new line
          added before and after. They are a new feature of HTML 5. The purpose
          of creating these semantic tags is to make it easier for screen
          readers and search engines to process the developer's content.
          Previously, the tags were generic and did not provide any clarity as
          to the type of content contained therein.{" "}
        </p>

        <p>
          {" "}
          Anchors can be used in a navigation tag to link from one page to
          another. If used in this context, the syntax is nesting href="URL"
          between the opening anchor tag. A text between the opening and closing
          anchor tags acts as a description of the link, and will appear as a
          button on the page telling the user where they will be directed if
          they click on that link. Anchors can also be used in texts to link
          from content to content, either on the same page or external sites. To
          use an anchor in this way, the same syntax of href="URL" will apply,
          but an attribute ID will need to be added to the desired linked
          element, as well as adding #idattribute to the end of the URL.
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
          A descriptive file name will include who, what, when, and where. This
          is to help search engines locate and display your photos. Making the
          file size as small as it can go, while still displaying the image
          properly, will help with page load times. Another way to help with
          load times is to crop the photo to the exact dimensions. Consider
          where the image will be displayed, the image should be wholly visible
          to the user without having to scroll. Other ways to ensure the quality
          of your images, are by choosing the correct file format, discussed
          more below, considering the resolution of the device that the image
          will be displayed, and choosing the correct color mode. Color mode is
          based on the file format of the image. RGB is for .PNG, .JPG, .SVG,
          while WebP and Indexed are for .GIF.
        </p>

        <p>
          <strong>File formats:</strong>
        </p>
        <p>
          <em>JPG: </em>these types of files are used for photography, they can
          compress into smaller sizes, and remain rectangular.
        </p>
        <p>
          <em>WebP: </em>these files are similar to JPG, except transparent
          backgrounds can be applied to this format.{" "}
        </p>
        <p>
          <em>SVG: </em>this is known as scalable vector graphics, they are
          marked with XML, and are typically for two-dimensional graphics.
        </p>
        <p>
          <em>PNG: </em>best for biomorphic shapes and line art, and solid
          colors.
        </p>
        <p>
          <em>GIF: </em> typically seen for use with short videos
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
          Stylesheets are used for a variety of reasons. One is to differentiate
          sites, which enables better branding. From a business standpoint, this
          is an essential tool to make your site standout. Another reason to use
          stylesheets is to improve usability. Going back to the 5 E's of
          usability, stylesheets can assist in accomplishing these goals by
          improving the readability and navigation. Readability contributes to
          effectiveness and efficiency, while navigation clearly contributes to
          ease of navigation.
        </p>

        <p>
          There are five ways to incorporate different styles into an HTML file.
          Adjusting style through external files is the most widely used. Since
          the style parameters are only required to be entered once, it is the
          most efficient. The stylesheet is linked inside the head tags at the
          top of a file, and it will apply to all pages on the site that are
          linked to that stylesheet. Another way to import specific .css styles,
          would be to import it directly on the .css file. The remaining options
          are typically used to make single style changes, as they are added
          directly to the HTML file. For example, you could embed the style
          change between style tags or directly inline with the tag. The other
          two options are a bit more complicated, those are JavaScript template
          literals and regular JavaScript.{" "}
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
          goal is to show the user which fields are required. This is typically
          accomplished through certain design aspects like asterisks or use of
          color schemes to indicate which fields have to be filled in before the
          form can be submitted. The third goal is to help the user know where
          to begin. This is done through the use of the autofocus attribute.
          Another benefit of autofocus is that it helps people who may not have
          access to a keyboard. The fourth goal is to ensure the entire form can
          be filled out with only the use of the keyboard. The fifth goal is to
          add tab indexing to the forms, so that a logical order is followed as
          the user fills in the spaces. The final goal is to make sure there are
          validation responses that match the site's style. This is so that the
          user can legibly understand whether the form was submitted correctly.{" "}
        </p>

        <p>
          The major tags utilized on a form are: form, label, input, select with
          options, textarea, and button. The form tag attributes are action and
          method. The value given to action, which is either a relative URL or
          an absolute URL, indicates where the form should be directed. The
          method is either the HTTP method, POST or GET. The label attribute tag
          is for, this is where the description of the input field should go.
          The for attribute matches the input ID. The input tag attributes are
          type and name. Input is how the form receives data from the user. The
          type attribute is to indicate what the style is of data that is being
          entered. For example, radio type is a style of data where the user
          selects one option in a given list. The name attribute is for the
          server recognition. It helps the server locate where the data you have
          specified is on your page. The attribute for select with options is
          name. The value="" in option is sent with the name="" to indicate to
          the server the choice the user made. The text area has many attributes
          to help style this portion of the form. The ID attribute is attached
          to the text area's own label. This is to be able to associate the
          user's input with the correct portion of the form. Required could be
          one attribute used, or the placeholder attribute could be used to
          describe the appropriate length of text. The button performs the
          action specified in the form tag. The necessary attribute tag is type.{" "}
        </p>

        <p>
          {" "}
          The major form style requirements are: the size of the input fields,
          color schemes and text to indicate required or valid input, and
          adequate labels. Input fields need to accommodate a couple of
          important factors. One factor, is visibility. Two, is that they should
          be large enough for the various sizes of people's hands. This is to
          help with accessibility if they are trying to fill out a form on a
          phone. Forms should be styled in a way, that clearly indicates to the
          user, what is a label, what is an input field, what is a button, and
          where else they can navigate to from the current page. This can be
          accomplished one way, through use of colors and text. Color schemes
          work very well by capitalized on familiar associations. For example,
          red is typically used for error, stop, or bad. So a form can be styled
          with red when a user enters invalid input. Font and font-size need to
          be adjusted for readability and be able to accommodate varying levels
          of vision. Finally, labels should be placed in a way that clearly
          indicate which field they belong to. Ensuring your form has adequate
          labels will help the user breeze through the form without any
          unnecessary troubles.
        </p>
      </article>

      <article id="express">
        <h3>
          Express
          <a href="#top">
            <i>
              <BsArrowUpShort />
            </i>
          </a>
        </h3>
        <p>
          Node is a publicly available platform, otherwise known as
          open-sourced, that allows developer's everywhere to contribute to its
          maintenance. It is not platform dependent, allowing it to be a
          portable system, being able to be utilized on Windows, macOS, or
          Linux. JavaScript is the language used by Node. Previously, JavaScript
          could only be used in a browser. Node allowed JavaScript to be run
          outside a browser, which expanded developer capabilities. There are
          thousands of packages available on Node, npm is a package manager and
          installer specifically for Node. Express is a web framework for Node,
          it is used to help build applications. These three technologies make
          the process of server-side development more efficient, by allowing the
          developer to capitalize on already available programs, thus preventing
          them from having to always start from scratch. Express allows a
          developer who is already familiar with JavaScript, capitalize on their
          already established skills to work on the frontend, as well as the
          backend.
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
          Developers use JavaScript and Express to update DOM because it has
          tools that allow for greater efficiency and stronger programs.
          JavaScript is defaulted to synchronous programming, but has the
          capability for asynchronous programming. Asynchronous programming is
          more efficient, as each line of code does not have to wait to be run
          until the previous line of code has finished. Express has a feature
          called middlewares, which are functions that correspond to the
          request-response cycle.{" "}
        </p>
      </article>
    </>
  );
}
export default FeaturePage;
