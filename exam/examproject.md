# Exam project

- [Exam project](#exam-project)
  - [Dates](#dates)
  - [Overview:](#overview)
  - [Report](#report)
  - [Project delivery](#project-delivery)
  - [Technology allowed](#technology-allowed)
      - [Backend:](#backend)
      - [Frontend:](#frontend)
      - [Layout:](#layout)
  - [Functional requirements](#functional-requirements)
    - [AJAX and REST API](#ajax-and-rest-api)
    - [Login](#login)
    - [Data items](#data-items)
    - [Data collection display](#data-collection-display)
    - [Validation](#validation)
    - [Layout](#layout-1)
    - [Additional features](#additional-features)
  - [Grading](#grading)
  - [Help and plagiarism](#help-and-plagiarism)

## Dates
| Date   |        |              |
| ------ | ------ | ------------ |
| 12.04. | start  |              |
| 28.04. | report | **deadline** |
| 09.06. | code   | **deadline** |

## Overview:
For the exam project you are required to design and implement a complete web application, frontend and backend.

You are free to chose what kind of application you implement, but restrictions apply to both [technology that you may use](#technology-allowed) and there is some [required functionality](#functional-requirements).

## Report
2 weeks after the start of the project, you have to hand in a report describing the application that you want to implement.
The report must contain the following:

1. What does the application do?
2. What data is stored in files/ database?
3. An initial layout for your page.
   The initial layout can be created as a static HTML page, or simply as an image (e.g. you can use PowerPoint).

The report does not need to include all provided functionality, and you can change specific functionality, data and page layout. 
However, the overall theme for the page is binding.

*The report need to be uploaded to your roups github repository.*

## Project delivery
On the final delivery you should hand in your complete code, and a README.md markdown file.
Your code should also include a SQLite database or files including example data.

The `README.md` file should contain the following sections:

- How to run: e.g. 
    > Start the application by running `app.py` in the application folder.
- Instructions for testing, e.g. `username` and `password` for existing users.
- List of all functionality: List all implemented functionality, to make sure all your work is taken into account. For example
    * Preferences are stored in a cookie and present if the user revisits the page.
    * New categories can be added on the category pages. 
      * An Icon and color can be chosen for the category.
    * If the user tries to register a password with less than 5 characters, an Error is displayed.

## Technology allowed
You may only use the frameworks listed below. If you are unsure if something is allowed, please ask on Discord.

#### Backend:
Your web server should be Flask. Data should be stored either in an SQLite database or on files.
You may use the Flask-login plugin, but that is not required. If you do so, note it in your README.md.
If you want to use a Object-Relational-Mapper (ORM), you may use SQLAlchemy.

You cannot use Flask-forms.

#### Frontend:
The frontend should be either pure JS or Vue.
You may use plugins like Vuex or Vue-Router in Vue.
You may use the Lodash JS library.
You may use all buildin JS APIs.
You may use use either Vue version 2 or 3.

You are not allowed to use a different JS Framework like React.

#### Layout:
You can either use plain CSS or Bootstrap.
If you copy CSS files from the web, e.g. `reset.css` or `normalize.css`, you must specify this in the README.md. If specified, it will not count as plagiarism.

Note that there are specific functional requirements when using Bootstrap.

## Functional requirements
The following are the functional requirements which build the bases for grading your project.
You can omit some features, but this will effect grading.

### AJAX and REST API

You are free to implement a Single page application (SPA) or an application with multiple routes using Flask templates.

However, some part of your application needs to be implemented using AJAX calls.
The endpoints receiving these AJAX calls should be structured according to the principles of a REST API.

For maximum score, your application must be well-organized and separated into components, or base templates, ...

### Login
Your application should allow login and registration of new users.
Users should be stored in the database or on file.

You should enforce some reasonable restrictions on passwords.

### Data items
Besides users, the database or files should contain at least two types of data objects, e.g. two tables. 
The application should allow to add, delete, and update some of the data stored.

Some of these operations should require specific authorization, e.g., not every user is allowed to delete every item.

### Data collection display
The frontend must contain functionality to display a collection of items.
There should be functionality to **filter**, or **sort**.
*Preferences on sorting or filtering should be stored*, to be present when the user revisits the site. (May be stored in cookies or similar.)

### Validation
Forms for login, registration, adding and updating data items should be validated.
Validation should be done both in JS and on the server side.
If validation fails, a meaningful error message must be displayed.

Similar, if AJAX requests fail, due to server side validation, meaningful errors should be displayed.

### Layout
You should use semantic HTML tags where it makes sense.

- Some elements should be displayed using a flexbox.
- Some elements should use absolute positioning.
- The layout of your page should be fluid, i.e. adjust to different browser window sizes.

*If you use plain CSS your layout should at least adjust to window sizes between 1800px and 800px.*

*If you use bootstrap, your layout should be responsive adjusting also to phone sized displays, e.g. 375px.*


### Additional features
You are expected to implement additional, more complex features.

Examples for more complex features can be:
- Storage and handling images uploaded by the user.
- Storage and display of dates.
- Good use of vue components
- Good use of vue router

## Grading
The submitted project code builds the main basis for the grading.

Additionally, you will have to showcase your application in a short presentation.

Your application should be well tested and working.
All functionality should be error free, including JS code.
The presence of **dysfunctional or unused code** will give a penalty. Remove such code before you submit.

For grading Firefox version 111 will be used. 
To avoid compatibility errors it is recommended to test your application on that browser.

The following table gives a rough overview of grading criteria.
The points given to different criteria may change!

| Project report                              | 5%  |
| ------------------------------------------- | --- |
| **Project code**                        | **95%** |
| Log in works	| 3 |
| Register user	| 3 |
| JS Form validation	| 5 |
| Sort or search possible	| 3 |
| Sort or search stored	| 4 |
| Update, delete working	| 3 |
| AJAX request used	| 3 |
| Fluid layout	| 5 |
| Absolute used	| 2 |
| Flex used	| 2 |
| Semantic tags	| 2 |
| Phone layout (bootstrap)	| 5 |
| Layout extra	| 3 |
| Components	| 5 |
| Data stored, updated, deleted	| 6 |
| Rest API	| 6 |
| Server side validation	| 5 |
| Errors displayed	| 5 |
| Authentication	| 5 |
| Access control	| 5 |
| Extra feature	| 15 |


## Help and plagiarism
You need to write the application code yourself, or within the group.

Note that this should not stop you from helping each other.
As long as you do not write code for your fellow students, but help them debug or design 
a certain functionality, it is not considered plagiarism.

We will also continue labs and offer help.
