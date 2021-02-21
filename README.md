# Game Library

### <a href="https://mygamelibrary.net">Live Demo!</a>

This is a webapp that allows you to record and keep track of your video game library. For each game it will allow you to input information including:

1. Title
2. Genre
3. Platform
4. Status of the game in relation to the user's progress of it
5. Hours played
6. Date started
7. Date completed

The games listed can be filtered based on the status of the game in the library. The search function allows further narrowing down of the list as well.

This webapp is built for both desktop and mobile browsers.


## Google Firebase

Currently, the webapp is using Google Firebase services for authentication and storing the user's library with the realtime database. The user will log in with their Google account and the corresponding game list with that account will be displayed. Appropriate security rules are implemented so only the user can read/write their data.


## Current Features

Currently, the app allows basic storing of games and displaying of information in relation to the progress of completion for each game. There are statistics at the bottom of the list that shows the current total hours for completed games and total number of games for each category and the user is also able to delete and edit games in the list. Lastly, the web app is able to keep lists separated by year so the user can keep yearly logs of their games and view yearly stats.


## Important New Takeaways

1. Usage of data attributes to keep track of elements during DOM manipulation.
2. Usage of objects
3. Usage of object prototype to create single functions for every instance of the object created
4. Usage of Firebase in code to hold user data and retrieve and store them when necessary
5. Basic knowledge of Firebase language and command line to read/write data on realtime database, configure authentication to implement google account sign in and out, update security rules.


## Planned Future Updates

1. Allow user to add notes to each game.
2. Add ability to type in custom genre/platform.
3. Make input fields taller.
4. Add friend feature allowing viewing of friends' lists.
5. Add cover art.
6. Milestone achievements?
7. Possibly more.
