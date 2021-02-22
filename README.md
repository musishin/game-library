# Game Library

### <a href="https://mygamelibrary.net">Live Demo!</a>

This is a webapp that allows you to record and keep track of your video game library. For each game it will allow you to input and display information about the game and the user's progress of completion. There are several other features such as adding notes to each game and filtering via several different categories.

This webapp is built for both desktop and mobile browsers.


## Google Firebase

Currently, the webapp is using Google Firebase services for authentication and storing the user's library with the realtime database. The user will log in with their Google account and the corresponding game list with that account will be displayed. Appropriate security rules are implemented so only the user can read/write their data.


## Current Features

1. Basic storing of games and displaying of information of the game and progress of completion for each game.
2. Statistics at the bottom of the list that shows the current total hours for completed games and total number of games for each category.
3. Able to keep lists separated by year so the user can keep yearly logs of their games and view yearly stats.
4. Notes are able to be added for every game.
5. Search bar filters by game titles.


## Important New Takeaways

1. Usage of data attributes to keep track of elements during DOM manipulation.
2. Usage of objects
3. Usage of object prototype to create single functions for every instance of the object created
4. Usage of Firebase in code to hold user data and retrieve and store them when necessary
5. Basic knowledge of Firebase language and command line to read/write data on realtime database, configure authentication to implement google account sign in and out, update security rules.


## Planned Future Updates

1. Add ability to type in custom genre/platform.
2. Make input fields taller.
3. Add friend feature allowing viewing of friends' lists.
4. Add cover art.
5. Milestone achievements?
6. Possibly more.
