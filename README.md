# Project Name

Redux Feedback Loop Master

## Description

The Redux Feedback Loop Master is an application that takes in user feedback through a rating system set up within the application. The user can also add comments and review all ratings and comments following completion of the survey. The user path ends with a confirmation, thanking the user for their submission. 

This application includedes six page components that has routes to one another based on the user path included in the application instructions. 

The feedback submitted through this application is being stored in a SQL database. 

## Approach
The approach I took with this application was starting with the databse set up in SQL. After the DB was set up, I created my page components, adding content, ratings and the functionality needed for each question, and then set up routes to each compenent within my App.js file. 

Once my pages were set up and each component was following the correct path upon button click, I set up my reducer functions within my Index.js to capture the inputs for each page and set up my GET request within my router file. This is where I ran into some issues as I initially declared my states as empty arrays, but I was not able to capture my comment inputs. This took quite some time to resolve, but I ended up finding a solution by declaring my initial state for the ratings with a integer and my "comments" state as an empty string. I also had to update my buttonClick functions to send an alert if a rating wasn't selected from the dropdowns using a conditional. It seems like there could be a more simplified solution to this, but once I had my conditional working, I was ready to move on to the next step. 

The next step I took was setting up my application to send inputs to the SQL database using an Axios post request to get the data to database and advance to next page on button click within my Review.js component. 

Once I had the basic functionality of my application working and I was able to store feedback into the database, I added the option for the user to go back and update their inputs on the survey and then I also applied material UI styling on the buttons. 

## Prerequisites

- Nodemon
- React 
- Redux
- React-Router-Dom
- React-Redux
- Redux-Logger
- Express
- Body-Parser
- Postico
- Postgres
- Material UI

## Installation
1. If you don't have Nodemon installed, install it globally within your terming using the command "npm install nodemon --global
2. Run "npm install" in terminal
3. Run "npm install react-router-dom to add react-router to your project, then set up your import within your application files
4. Run "npm install redux react-redux to connect react and redux together, then set up your import within your application files
3. Run "npm run server" in terminal
4. Open a second terminal window, since we are using nodemon, and run "npm run client" in the new terminal window

## How to Use Application
1. On page load, you will see the first question and ratings dropdown appear. Simply select the dropdown rating based on your experience from the day. You must select a dropdown rating in order to advance to the next page. 
2. Once you have selected all ratings, you have the option to leave a comment to submit with your feedback. 
3. After the Comments page, you will be able to review your answers. If you need to update any answers you can go back and do so. 
4. Once you have reviewed your feedback and clicked the "Submit" button, you will be brought to a confirmation page, thanking you for your feedback. You also have the option to submit feedback again.


