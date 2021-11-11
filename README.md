# cci_connection_site

## First Step: 
Course Standards for Web Page Design                                                                                       

This assignment introduces the fundamental standards for web page design in the course. In this and all subsequent assignments, the following design standards apply.

Pages must be valid HTML5 standard.  Your pages will be validated by the following tool: http://html5.validator.nu/  .
You must not use site-builder or automatic site generation tools. You must code your  HTML directly, by hand.  
All pages must validate cleanly as HTML5.  
All pages must render sensibly cross-browser (Chrome and Firefox).  
All pages must have full and complete separation of CSS into separate files – only the  link(s) to load the CSS should be present in the HTML document. No style definitions  within the HTML document.  
All pages must have full and complete separation of JavaScript into separate files – only  the link(s) to load should be present in the HTML document. No scripting within the HTML document. This includes inline JavaScript such as onclick.
All resources (CSS, JavaScript, Media) must be locally stored with the web application  (e.g., local copy of JavaScript libraries).  
Each assignment will consider coding efficiency and design choices, which includes  coding elegance or style. Efficiency is required to make the best use of resources (many full pages are viewed on mobile devices). Good code design is required for maintenance, understanding, reusability, and extensibility of applications. Proper indentation for nested elements is just one example. Course staff are the final arbiters on efficiency and design choices in this context.
Page design choices must be sensible for use by a broad audience. Course staff are the final arbiters on sensibility in this context. Ridiculous and laughable branding / inventory may be fine. Ridiculous and laughable site design / implementation is not.  
Even if not explicitly or specifically mentioned in assignment requirements, points may be deducted on an assignment for poor efficiency / (code or user interface) design practices in submissions.

Assignment Description:

In this assignment you will develop four HTML pages, according to the following specifications.

Choose an event / meetup domain and categories of interest to you. You must develop your own unique site with branding, categories, and events representative of that domain. Creativity is highly encouraged.  
You are not allowed to select previously created branding / content. You must create your own. In particular, you must not use any branding / content from (1) the assignment itself; (2) the textbook; or (3) any other students in any of the sections of the course or in previous sections of the course.  
Each of the pages specified must be a standalone, individual HTML page. And not, for example, framed or one single page with main content section visibility switching.  
Each of the pages must be standalone, but must have a common design to preserve the look-and-feel of the site. So, some of the common look-and-feel elements will be repeated across pages. Common look-and-feel elements must render exactly the same, so there are seamless transitions with no jitter between pages for common elements.  
You must conform to the required overall page layout structure.  
Within each of the sections of the overall page layout structure, you may style the content differently than the representative examples (color scheme, alignment, etc.), as long as the illustrated types of content are present and represented in a reasonable and understandable way.  
All of the content must be represented using HTML directly (no JavaScript DOM generation).  
Required Page Structure

All pages must use the following foundational layout structure, including:

Full-width containers of sensible height for (1) page header area, (2) area for navigation elements, (3) page footer area.
Full-width container for the main content area.
pageLayout.png

Page 1 – Home Page

Common content elements described here (navigation, header, footer) also apply to the other pages. This page should provide the following content / functionality:

Filename: index.html  
Logo / primary branding in the header  
Representative links for user-specific navigation (login-in, signup, etc.)
Log in and sign up links are inactive for this stage
The link for the "Start a new connection" must be linked to newConnection.html.
Representative links for general site navigation (home, connections, about, etc.)
Connections link must provide navigation to connections page
Logo image must link to home page  
Representative footer information (copyright, etc.)  
Main content area should provide an introduction and overview to the site. May be more  than simple text.
homepageView.png 

Page 2 – Connections Page

This page should provide the following content / functionality in addition to common content:

Filename: connections.html

At least two categories of connections  
At least three connections per category/topic 
All connection listings should link to the same connection page, as a design placeholder  
Note that within the main content container, category/topic organization may be fancier than a plain list.
catalogView.png

Page 3 – Connection Detail

This page should provide the following content / functionality in addition to common content: (Note: only one connection page is needed as a representative page – not a different one for every item in the connections list)

Filename: connection.html  
Picture of the connection
Connection highlights, including category/topic, host user name, time / date, and location 
Connection detail description  
Buttons to update and delete the connection
“Update” button action should link to the “connections” page  
“Delete” button action should link to the “connections” page  
  

connection.png

Page 4 – New Connection

This page should provide the following content / functionality in addition to common content:

Filename: newConnection.html  
Main content container should provide a form, which can be used to accept information of the new connection
“Create Connection” button action should link to the “connections” page  
newConnection.png

  

 ## Second Stage
 
 In this assignment, you will develop a fully functional web app using the MVC pattern, according to the following specifications:

Correct any errors identified in the selected HTML5 prototype before proceeding. - If your application developed in project 1 has error and not complete it is your responsibility to communicate and coordinate with course staff to help fix those bugs. Keep in mind that all that you are building in this application in stages. It is important that you have a working application for each stage.

All structure, design, and content requirements from the previous assignment are mandatory, unless explicitly updated in this assignment description.

Use JavaScript functions and literal objects to implement the business layer of the application (model).

Use EJS template pages to present the view to the browser.

Use modularized routes to forward the request to the appropriate controller function.

Use modularized controller to control the flow of the application.
MVC_gen.png

1. Create the file structure for your application.

The file structure should follow the MVC pattern. Add app.js to your project directory and initialize the project.

2. Views

Convert existing pages to EJS templates: As an initial step, convert all 4 pages from the first assignment from HTML5 (.html) to EJS (.ejs). This is as simple as make a copy of the file with the ".ejs" extension. Define the url for each view and update the href links accordingly. 
Create partial view templates: We want to centralize the common aspects of the views by creating partials for those common elements and then adding (include) them where we need them.
Separate the common design elements into individual .ejs files.
For each of the 4 main pages
Remove the common design element content from the page
Use the EJS include to re-include that content from the individual files.
Add new view template: If not already part of the project, add the following pages using the required site structure.
about.ejs – provides background and detail about the application site.
contact.ejs – provides contact details for the application site.
edit.ejs -  provides a form for editing an existing connection.
error.ejs -  provides error information.
3. Model

Create data objects: This assignment will use JavaScript literal objects to represent the main data elements being used. You should hard-code a fixed set of connections by creating an array of JavaScript objects in connection.js to represent connections. As in the first assignment, you must have at least 2 categories of connections, with at least 3 connections per category/topic. Each connect object is used to represent a connection in the application. It should include the properties/attributes that define a connection:
connection id– unique identifier for the connection
connection name 
connection topic - this is the category/topic that will be used to select or arrange connection by section or type in the connections view.
details
date 
start time 
end time
host name
image - since we did not cover file upload to server, you may store an image url for this. The image should still be rendered in the view.
Define interface for data manipulation: You model must provide an interface for manipulating the connection objects (perform CRUD operations). You will need to define functions to allow controller module to be able to
get all connections
get the connection identified by id
update the connection identified by id
delete the connection identified by id
You may add other utility functions if you see fit.

Note: It is important to keep the big picture in perspective here. In the future, we will be converting the data storage to a database platform. We will refactor these functions to support database connectivity and query. This will separate the data layer from the application and will allow for easy updates and interaction. 

4. Routes and controllers

Routes: This component is responsible for directing all requests to proper controller function. In your application, create two route modules:
connection route module: include 7 RESTful routes for requests associated with connections.
main route module: include routes for the general site navigation, including home, contact and about. 
Controllers: This component is responsible for handing all requests. In your application, create two controller modules:
connection controller module: include controller functions to handle requests associated with connections.
main controller module: include controller functions to handle requests associated with general site navigation.
For some requests, the controller may simply render the view file, while for others, it will need to query the model to retrieve data, and then pass the data to the view templates. Update the view templates to replace all of the static placeholder information with the dynamic data. For example,  the view that displays all of the connections should handle and display the connections categories and the connections titles/links dynamically. In other words, if you add another connection with a new category, the application will be able to handle that without having to update or change any code.

Remember that HTML code for all pages generated from EJS must still meet the HTML5 validation requirement. 

You can use "view page source code" in your browser to see the rendered HTML response sent by the server for each view.
 To validate view pages launch your application > navigate to the page you wish to validate > right click > view page source > copy all > paste into validator.w3.org 'Validate by Direct Input'.
5. Update Links in the Site to Dispatch Correctly

Each of the places in the site where a user can take an action that uses the dynamic data from this assignment should be updated to make the appropriate GET request with the necessary parameters. Remember that requests for resources such as links should be using GET method. Updates must be made in all appropriate places where action would reasonably be indicated from the first project prototypes. For example: the links to a connection in /connection/index.ejs file will need to be dynamic to load the correct connections.

6. Error handling

Part of handling these request is addressing scenarios when a request comes in that doesn't meet the requirements for these requests. The controller logic should verify and validate each request. For example, if a request comes in with a connection id and that value is not for a connection that exists in the connection database, the controller should gracefully handle it in a way that will allow the user to continue interacting with the application. In this example, displaying the error view would be a valid response. 

## Third Step

In this assignment, you will add new features to your previous web application, according to the following specifications:

Correct any errors identified or partial/missing functionality from the previous assignments. If your application developed in project 2 has error or not complete, it is your responsibility to communicate and coordinate with course staff to help fix the errors. Keep in mind that you are building this application in stages. It is important that you have a working application for each stage.
All structure, design, and content requirements from the previous assignment are mandatory, unless explicitly updated in this assignment description.
Use the MVC pattern
Model:  use Mongoose to integrate a MongoDB database to provide persistent data storage.
View: use EJS pages to present the view to the browser.
Use modularized routes to forward the request to the appropriate controller function.
Use modularized controller to control the flow of the application.
MVC_gen.png

1. Integrate MongoDB as database

For this assignment, the application uses a MongoDB database to store data. Further, it uses Mongoose to integrate the database into the web application. To do so, create a schema and compile a model for connections in your application. Each connection document should include at least the following fields:

_id
connection name 
connection topic
details
date
start time
end time
host name
imageURL: an url to an online image
You may include additional fields to fit your application needs. Your schema should include validation rules on the fields. At minimum, all of the fields must use the required validator. You may choose to use additional validators that make sense to your application.

2. Database creation and population

Create a database script that contains all of the MongoDB queries that you use to (1) create, and (2) populate your database and collection. Save this file as a plain text file (NOT word or RT or PDF or any other fancy document format). Name the file as project3_createDB.txt. Your database should be populated with data according to the same requirements from the previous project (at least two topics of connections, with at least 3 connection per topic/category).

Running the statements in this script should re-create / reset your database to its initial state with initial data (this means that at any point we can revert back to the beginning as a starting point).

3. Update app.js to connect to MongoDB database

4. Update the controller module so that the application stores and accesses data from the MongoDB database.

5. Update the following EJS view templates to implement input validation on the front end

the new connection template 
the edit connection template
Your front-end validation must be consistent with the schema validation.

6. Error handling

You have implemented the basic error handling in Project 2. After integrating database, your app needs to handle more errors. In your controller function, add logic to handle the following errors:

if a request includes an invalid route parameter, for example, the id in the URL is not a valid ObjectId type value, send a 400 error to the user
for a request to insert or update a document in the database, if mongoose validation fails, send a 400 error to the user
for any database operations, if an error other than validation error happens, send a 500 error to the user
