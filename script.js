function Game(title, genre, platform, status, equalsSearch, hoursPlayed, startDate, endDate) {

    this.title = title;
    this.genre = genre;
    this.platform = platform;
    this.status = status;
    this.equalsSearch = equalsSearch;
    this.startDate = startDate;
    this.endDate = endDate;
    this.hoursPlayed = hoursPlayed;
}

Game.prototype.writeInfoFirst = function() {

    return "Genre: " + this.genre + "\n" + 
           "Platform: " + this.platform + "\n" + 
           "Status: " + this.status;
}

Game.prototype.writeInfoSecond = function() {

    if(!this.endDate) {
        if(!this.hoursPlayed) {
            if(!this.startDate) {
                return "Start Date: " + "Not Started" + "\n" + 
                       "End Date: " + "\n" + 
                       "Hours: " + 0;
            } else {
                return "Start Date: " + this.startDate + "\n" + 
                       "End Date: " + "\n" + 
                       "Hours: " + 0;
            }
        } else {
            if(!this.startDate) {
                return "Start Date: " + "Not Started" + "\n" + 
                       "End Date: " + "\n" + 
                       "Hours: " + this.hoursPlayed;
            } else {
                return "Start Date: " + this.startDate + "\n" + 
                       "End Date: " + "\n" + 
                       "Hours: " + this.hoursPlayed;
            }
        }
    } else {
        if(!this.hoursPlayed) {
            if(!this.startDate) {
                return "Start Date: " + "Not Started" + "\n" + 
                       "End Date: " + this.endDate + "\n" + 
                       "Hours: " + 0;
            } else {
                return "Start Date: " + this.startDate + "\n" + 
                       "End Date: " + this.endDate + "\n" + 
                       "Hours: " + 0;
            }
        } else {
            if(!this.startDate) {
                return "Start Date: " + "Not Started" + "\n" + 
                       "End Date: " + this.endDate + "\n" + 
                       "Hours: " + this.hoursPlayed;
            } else {
                return "Start Date: " + this.startDate + "\n" + 
                       "End Date: " + this.endDate + "\n" + 
                       "Hours: " + this.hoursPlayed;
            }
        }
    }
}

// Creates cards for each game in the myLibrary array along with all of its child elements and
// displays them in array order on the page.
function displayGames() {

    for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {

        let gameSquare = document.createElement('div');
        let gameInfoContainer = document.createElement('div');
        let firstInfoContainer = document.createElement('div');
        let secondInfoContainer = document.createElement('div');
        let gameTitleContainer = document.createElement('div');
        let gameDeleteMenuContainer = document.createElement('div');
        let titleDeleteContainer = document.createElement('div');
        let editImg = document.createElement('img');

        editImg.src = "./images/edit-property.png";
        editImg.classList.add('edit-button');
        editImg.setAttribute('data-arrayIndex', arrayIndex);

        gameSquare.classList.add('game-square');
        gameInfoContainer.classList.add('game-info-container');
        firstInfoContainer.classList.add('first-info-container');
        gameTitleContainer.classList.add('game-title-container');
        gameDeleteMenuContainer.classList.add('game-delete-menu-container');
        titleDeleteContainer.classList.add('title-delete-container');

        gameTitleContainer.textContent = myLibrary[arrayIndex].title;

        titleDeleteContainer.appendChild(gameTitleContainer);
        titleDeleteContainer.appendChild(gameDeleteMenuContainer);
        gameDeleteMenuContainer.appendChild(editImg);
        gameSquare.appendChild(titleDeleteContainer);
        gameSquare.appendChild(gameInfoContainer);
        gameInfoContainer.appendChild(firstInfoContainer);
        gameInfoContainer.appendChild(secondInfoContainer);
        firstInfoContainer.textContent = myLibrary[arrayIndex].writeInfoFirst();
        secondInfoContainer.textContent = myLibrary[arrayIndex].writeInfoSecond();


// Color codes the game cards depending on platform (crimson for switch, cobalt for ps4, etc.).

//        if(gameInfoContainer.textContent.includes('Platform: Switch')) {
//            gameSquare.style.cssText = 'background-color: #E70009';
//        }
//        else if(gameInfoContainer.textContent.includes('Platform: PS4')) {
//            gameSquare.style.cssText = 'background-color: #003087';
//        }
//        else if(gameInfoContainer.textContent.includes('Platform: Xbox')) {
//            gameSquare.style.cssText = 'background-color: #107C10';
//        }
//        else if(gameInfoContainer.textContent.includes('Platform: iOS')) {
//            gameSquare.style.cssText = 'background-color: #5ac8fa';
//        }


        // Only display the card if it satisfies the search conditions.
        if(myLibrary[arrayIndex].equalsSearch === true) {
            gamesContainer.appendChild(gameSquare);
        }

        // Edit button will open up a form to allow editing of the game information.
        editImg.addEventListener('click', (e) => {
            currentEvent = e;
            currentEdit = myLibrary[e.target.getAttribute('data-arrayIndex')].title;
            editTitleSpan.textContent = 'Edit for ' + myLibrary[e.target.getAttribute('data-arrayIndex')].title;
            goToTop();

            // Fills in value of edit input fields with the existing information for the game.
            editGenreField.value = myLibrary[e.target.getAttribute('data-arrayIndex')].genre;
            editPlatformField.value = myLibrary[e.target.getAttribute('data-arrayIndex')].platform;
            editStatusField.value = myLibrary[e.target.getAttribute('data-arrayIndex')].status;
            editStartField.value = myLibrary[e.target.getAttribute('data-arrayIndex')].startDate;
            editEndField.value = myLibrary[e.target.getAttribute('data-arrayIndex')].endDate;
            if(myLibrary[e.target.getAttribute('data-arrayIndex')].hoursPlayed === undefined) {
                // skip
            } else {
                editHoursField.value = myLibrary[e.target.getAttribute('data-arrayIndex')].hoursPlayed;
            }

            if(editFormContainer.classList.contains('form-toggle-flex')) {
                return;
            } else {
                formContainer.classList.remove('form-toggle-flex');
                formContainer.classList.add('form-toggle-none');
                formTitle.classList.remove('form-toggle-flex');
                formTitle.classList.add('form-toggle-none');

                editFormTitle.classList.toggle('form-toggle-none');
                editFormTitle.classList.toggle('form-toggle-flex');
                editFormContainer.classList.toggle('form-toggle-none');
                editFormContainer.classList.toggle('form-toggle-flex');

                addBtn.classList.add('form-toggle-flex');
                addBtn.classList.remove('form-toggle-none');
            }
        });
    }
}

function addGame(title, genre, platform, status, hours, startDate, endDate) {

    let showCard;
    if(allBtn.classList.contains('tab-toggle-text') || nowBtn.classList.contains('tab-toggle-text')) {
        showCard = true
    }
    else {
        showCard = false;
    }
    let newGame = new Game(title, genre, platform, status, showCard, hours, startDate, endDate);
    myLibrary.push(newGame);
    addGameToDb(title, genre, platform, showCard, status, hours, startDate, endDate);
}

function submitGame() {

    if(titleField.value === "" || listYearField.value === "") {
        return;
    }
    else {
        let title = titleField.value;
        let genre = genreField.value;
        let platform = platformField.value;
        let status = statusField.value;
        let hours = hoursField.value;
        let startDate = startDateField.value;
        let endDate = endDateField.value;
        addGame(title, genre, platform, status, hours, startDate, endDate);

        resetGameList();
        // resets the form fields after submitting.
        titleField.value = "";
        genreField.value = "";
        platformField.value = "";
        statusField.value = "";
        hoursField.value = "";
        startDateField.value = "";
        endDateField.value = "";
    }
}

function editGame() {

    if(editStatusField.value === "" && editGenreField.value === "" && editPlatformField.value === "" && editHoursField.value === "" && editStartField.value === "" && editEndField.value === "") {
        return;
    }
    else if(currentUser) {
        let status = editStatusField.value;
        let genre = editGenreField.value;
        let platform = editPlatformField.value;
        let hours = editHoursField.value;
        let startDate = editStartField.value;
        let endDate = editEndField.value;
        
        currentUserRef.child(yearSelect.value).child(currentEdit).update({
            genre: genre
        });
        currentUserRef.child(yearSelect.value).child(currentEdit).update({
            status: status
        });
        currentUserRef.child(yearSelect.value).child(currentEdit).update({
            platform: platform
        });
        currentUserRef.child(yearSelect.value).child(currentEdit).update({
            hours: hours
        });
        currentUserRef.child(yearSelect.value).child(currentEdit).update({
            startDate: startDate
        });
        currentUserRef.child(yearSelect.value).child(currentEdit).update({
            endDate: endDate
        });

        currentUserRef.child(yearSelect.value).once('value', (snap) => {
            myLibrary = [];
            dbLibrary = Object.values(snap.val());
            createLibrary(dbLibrary);
            resetGameList();
        });
    }
    editStatusField.value = "";
    editGenreField.value = "";
    editPlatformField.value = "";
    editHoursField.value = "";
    editStartField.value = "";
    editEndField.value = "";

    editFormTitle.classList.toggle('form-toggle-none');
    editFormTitle.classList.toggle('form-toggle-flex');
    editFormContainer.classList.toggle('form-toggle-none');
    editFormContainer.classList.toggle('form-toggle-flex');
}

function resetGameList() {

    totalHours = 0;
    numOfGames = 0;

    while(gamesContainer.hasChildNodes()) {
        gamesContainer.removeChild(gamesContainer.lastChild);
    }
    if(allBtn.classList.contains('tab-toggle-text')) {
        for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
            myLibrary[arrayIndex].equalsSearch = true;
            if(myLibrary[arrayIndex].hoursPlayed === undefined) {
                // skip
            } else {
                totalHours += Number(myLibrary[arrayIndex].hoursPlayed);
            }
            numOfGames++;
        }
        totalHoursDiv.textContent = totalHours;
        totalGamesDiv.textContent = numOfGames;
        document.querySelector('#played-for').classList.remove('form-toggle-none');
        document.querySelector('#hours-for').classList.remove('form-toggle-none');
    }
    else if(nowBtn.classList.contains('tab-toggle-text')) {
        for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
            if(myLibrary[arrayIndex].status === "Now Playing") {
                myLibrary[arrayIndex].equalsSearch = true;
                if(myLibrary[arrayIndex].hoursPlayed === undefined) {
                    // skip
                } else {
                    totalHours += Number(myLibrary[arrayIndex].hoursPlayed);
                }
                numOfGames++;
            }
            else {
                myLibrary[arrayIndex].equalsSearch = false;
            }
        }
        totalHoursDiv.textContent = "";
        totalGamesDiv.textContent = numOfGames;
        document.querySelector('#played-for').classList.add('form-toggle-none');
        document.querySelector('#hours-for').classList.add('form-toggle-none');
    }
    else if(completedBtn.classList.contains('tab-toggle-text')) {
        for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
            if(myLibrary[arrayIndex].status === "Completed") {
                myLibrary[arrayIndex].equalsSearch = true;
                if(myLibrary[arrayIndex].hoursPlayed === undefined) {
                    // skip
                } else {
                    totalHours += Number(myLibrary[arrayIndex].hoursPlayed);
                }
                numOfGames++;
            }
            else {
                myLibrary[arrayIndex].equalsSearch = false;
            }
        }
        totalHoursDiv.textContent = totalHours;
        totalGamesDiv.textContent = numOfGames;
        document.querySelector('#played-for').classList.remove('form-toggle-none');
        document.querySelector('#hours-for').classList.remove('form-toggle-none');
    }
    else if(waitBtn.classList.contains('tab-toggle-text')) {
        for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
            if(myLibrary[arrayIndex].status === "Waitlist") {
                myLibrary[arrayIndex].equalsSearch = true;
                if(myLibrary[arrayIndex].hoursPlayed === undefined) {
                    // skip
                } else {
                    totalHours += Number(myLibrary[arrayIndex].hoursPlayed);
                }
                numOfGames++;
            }
            else {
                myLibrary[arrayIndex].equalsSearch = false;
            }
        }
        totalHoursDiv.textContent = "";
        totalGamesDiv.textContent = numOfGames;
        document.querySelector('#played-for').classList.add('form-toggle-none');
        document.querySelector('#hours-for').classList.add('form-toggle-none');
    }
    else if(droppedBtn.classList.contains('tab-toggle-text')) {
        for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
            if(myLibrary[arrayIndex].status === "Dropped") {
                myLibrary[arrayIndex].equalsSearch = true;
                if(myLibrary[arrayIndex].hoursPlayed === undefined) {
                    // skip
                } else {
                    totalHours += Number(myLibrary[arrayIndex].hoursPlayed);
                }
                numOfGames++;
            }
            else {
                myLibrary[arrayIndex].equalsSearch = false;
            }
        }
        totalHoursDiv.textContent = "";
        totalGamesDiv.textContent = numOfGames;
        document.querySelector('#played-for').classList.add('form-toggle-none');
        document.querySelector('#hours-for').classList.add('form-toggle-none');
    }

    if(category !== "") {
        let sortedArray = sortArrayByCategory(category);
        myLibrary = sortedArray;
    }

    displayGames();
}

function addGameToDb(title, genre, platform, showCard, status, hours, startDate, endDate) {

    if(currentUser) {
        currentUserRef.child(listYearField.value).child(title).set({
            title: title,
            genre: genre,
            platform: platform,
            equalsSearch: showCard,
            status: status,
            hours: hours,
            startDate: startDate,
            endDate: endDate
        });
    } else {
        console.log("No user!");
    }

    listYearField.value = "";
}

// Takes value snapshot of user library on database and converts it into objects to fill myLibrary[].
function createLibrary(dbLibrary) {

    for(let arrayIndex = 0; arrayIndex < dbLibrary.length; arrayIndex++) {
        let newGame = new Game(dbLibrary[arrayIndex].title, dbLibrary[arrayIndex].genre, dbLibrary[arrayIndex].platform, dbLibrary[arrayIndex].status, dbLibrary[arrayIndex].equalsSearch, dbLibrary[arrayIndex].hours, dbLibrary[arrayIndex].startDate, dbLibrary[arrayIndex].endDate);
        myLibrary.push(newGame);
    }
}

function goToTop() {

    document.body.scrollTop = 0; // for Safari.
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE, Opera.
}

function sortArrayByCategory(category) {

    let sortedArray = [];

    if(category === "hoursasc") {
        for(let ogIndex = 0; ogIndex < myLibrary.length; ogIndex++) {
            if(sortedArray.length === 0) {
                sortedArray.splice(0, 0, myLibrary[ogIndex]);
            } else {
                for(let newIndex = 0; newIndex <= sortedArray.length; newIndex++) {
                    if(newIndex === sortedArray.length) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                    else if(Number(myLibrary[ogIndex].hoursPlayed) < Number(sortedArray[newIndex].hoursPlayed)) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                }
            }
        }
    }
    else if(category === "hoursdesc") {
        for(let ogIndex = 0; ogIndex < myLibrary.length; ogIndex++) {
            if(sortedArray.length === 0) {
                sortedArray.splice(0, 0, myLibrary[ogIndex]);
            } else {
                for(let newIndex = 0; newIndex <= sortedArray.length; newIndex++) {
                    if(newIndex === sortedArray.length) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                    else if(Number(myLibrary[ogIndex].hoursPlayed) > Number(sortedArray[newIndex].hoursPlayed)) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                }
            }
        }
    }
    else if(category === "genre") {
        for(let ogIndex = 0; ogIndex < myLibrary.length; ogIndex++) {
            if(sortedArray.length === 0) {
                sortedArray.splice(0, 0, myLibrary[ogIndex]);
            } else {
                for(let newIndex = 0; newIndex <= sortedArray.length; newIndex++) {
                    if(newIndex === sortedArray.length) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                    else if(myLibrary[ogIndex].genre === sortedArray[newIndex].genre) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                }
            }
        }
    }
    else if(category === "platform") {
        for(let ogIndex = 0; ogIndex < myLibrary.length; ogIndex++) {
            if(sortedArray.length === 0) {
                sortedArray.splice(0, 0, myLibrary[ogIndex]);
            } else {
                for(let newIndex = 0; newIndex <= sortedArray.length; newIndex++) {
                    if(newIndex === sortedArray.length) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                    else if(myLibrary[ogIndex].platform === sortedArray[newIndex].platform) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                }
            }
        }
    }
    else if(category === "startdateasc") {
        for(let ogIndex = 0; ogIndex < myLibrary.length; ogIndex++) {
            if(sortedArray.length === 0) {
                sortedArray.splice(0, 0, myLibrary[ogIndex]);
            }
            else if(myLibrary[ogIndex].startDate === undefined || myLibrary[ogIndex].startDate === "" || myLibrary[ogIndex].startDate === null) {
                sortedArray.splice(sortedArray.length, 0, myLibrary[ogIndex]);
            }
            else {
                for(let newIndex = 0; newIndex <= sortedArray.length; newIndex++) {
                    if(newIndex === sortedArray.length) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                    else {
                        let checkingDate = new Date(myLibrary[ogIndex].startDate);
                        let comparingDate = new Date(sortedArray[newIndex].startDate);
                        if(comparingDate.toDateString() === "Invalid Date" || checkingDate < comparingDate) {
                            sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                            break;
                        }
                    }
                }
            }
        }
    }
    else if(category === "startdatedesc") {
        for(let ogIndex = 0; ogIndex < myLibrary.length; ogIndex++) {
            if(sortedArray.length === 0) {
                sortedArray.splice(0, 0, myLibrary[ogIndex]);
            }
            else if(myLibrary[ogIndex].startDate === undefined || myLibrary[ogIndex].startDate === "" || myLibrary[ogIndex].startDate === null) {
                sortedArray.splice(sortedArray.length, 0, myLibrary[ogIndex]);
            }
            else {
                for(let newIndex = 0; newIndex <= sortedArray.length; newIndex++) {
                    if(newIndex === sortedArray.length) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                    else {
                        let checkingDate = new Date(myLibrary[ogIndex].startDate);
                        let comparingDate = new Date(sortedArray[newIndex].startDate);
                        if(comparingDate.toDateString() === "Invalid Date" || checkingDate > comparingDate) {
                            sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                            break;
                        }
                    }
                }
            }
        }
    }
    else if(category === "enddateasc") {
        for(let ogIndex = 0; ogIndex < myLibrary.length; ogIndex++) {
            if(sortedArray.length === 0) {
                sortedArray.splice(0, 0, myLibrary[ogIndex]);
            }
            else if(myLibrary[ogIndex].endDate === undefined || myLibrary[ogIndex].endDate === "" || myLibrary[ogIndex].endDate === null) {
                sortedArray.splice(sortedArray.length, 0, myLibrary[ogIndex]);
            }
            else {
                for(let newIndex = 0; newIndex <= sortedArray.length; newIndex++) {
                    if(newIndex === sortedArray.length) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                    else {
                        let checkingDate = new Date(myLibrary[ogIndex].endDate);
                        let comparingDate = new Date(sortedArray[newIndex].endDate);
                        if(comparingDate.toDateString() === "Invalid Date" || checkingDate < comparingDate) {
                            sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                            break;
                        }
                    }
                }
            }
        }
    }
    else if(category === "enddatedesc") {
        for(let ogIndex = 0; ogIndex < myLibrary.length; ogIndex++) {
            if(sortedArray.length === 0) {
                sortedArray.splice(0, 0, myLibrary[ogIndex]);
            }
            else if(myLibrary[ogIndex].endDate === undefined || myLibrary[ogIndex].endDate === "" || myLibrary[ogIndex].endDate === null) {
                sortedArray.splice(sortedArray.length, 0, myLibrary[ogIndex]);
            }
            else {
                for(let newIndex = 0; newIndex <= sortedArray.length; newIndex++) {
                    if(newIndex === sortedArray.length) {
                        sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                        break;
                    }
                    else {
                        let checkingDate = new Date(myLibrary[ogIndex].endDate);
                        let comparingDate = new Date(sortedArray[newIndex].endDate);
                        if(comparingDate.toDateString() === "Invalid Date" || checkingDate > comparingDate) {
                            sortedArray.splice(newIndex, 0, myLibrary[ogIndex]);
                            break;
                        }
                    }
                }
            }
        }
    }
    else {
        sortedArray = myLibrary;
    }

    return sortedArray;
}



const gamesContainer = document.querySelector('#games-container');
const submitBtn = document.querySelector('#submit');
const editSubmitBtn = document.querySelector('#edit-submit');
const editDeleteBtn = document.querySelector('.delete-btn');
const totalHoursDiv = document.querySelector('#total-hours-div');
const totalGamesDiv = document.querySelector('#total-games-div');

const titleField = document.querySelector('#title');
const genreField = document.querySelector('#genre');
const platformField = document.querySelector('#platform');
const statusField = document.querySelector('#status');
const hoursField = document.querySelector('#hours');
const startDateField = document.querySelector('#start-date');
const endDateField = document.querySelector('#end-date');
const listYearField = document.querySelector('#year-list');

const editStatusField = document.querySelector('#edit-status');
const editGenreField = document.querySelector('#edit-genre');
const editPlatformField = document.querySelector('#edit-platform');
const editHoursField = document.querySelector('#edit-hours');
const editStartField = document.querySelector('#edit-start-date');
const editEndField = document.querySelector('#edit-end-date');

const searchBar = document.querySelector('#search');
const addBtn = document.querySelector('#add-button');
const catSortSelect = document.querySelector('#cat-sort');
const yearSelect = document.querySelector('#year-select');

const formContainer = document.querySelector('#form-container');
const formTitle = document.querySelector('#form-title');
const addFormCloseBtn = document.querySelector('#form-close-btn');
const editFormTitle = document.querySelector('#edit-form-title');
const editTitleSpan = document.querySelector('#edit-title-span');
const editFormContainer = document.querySelector('#edit-form-container');

const allBtn = document.querySelector('#all-button');
const nowBtn = document.querySelector('#now-button');
const completedBtn = document.querySelector('#completed-button');
const waitBtn = document.querySelector('#wait-button');
const droppedBtn = document.querySelector('#dropped-button');

const editFormCloseBtn = document.querySelector('#edit-close-btn');
const signBtn = document.querySelector('#sign-button');
const userImage = document.querySelector('#user-img');
const body = document.querySelector('body');

const deleteConfBackground = document.querySelector('#delete-conf-background');
const deleteConfBtn = document.querySelector('#delete-conf-btn');
const deleteConfCloseBtn = document.querySelector('#delete-conf-close');

const signoutBackground = document.querySelector('#signout-background');
const signoutBtn = document.querySelector('#signout-btn');
const signoutCloseBtn = document.querySelector('#signout-close');

let totalHours = 0;
let numOfGames = 0;
let currentEdit;
let currentUser;
let currentUserID;
let currentUserRef;
let myLibrary = [];
let currentEvent;
let category = "";


// Google Authentication

googleSignIn = () => {

    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
        firebase.auth().signInWithRedirect(provider);
    });
}

googleSignOut = () => {

    firebase.auth().signOut().then(() => {
        console.log("Sign-out successful.");
        signBtn.classList.toggle('display-none');
        signOutBtn.classList.toggle('display-none');
        userImage.style.cssText = 'display: none';
        myLibrary = [];
        resetGameList();
    }).catch((error) => {
    console.log(error);
    });
}



// Eventlisteners

submitBtn.addEventListener('click', submitGame);

editSubmitBtn.addEventListener('click', editGame);

editFormCloseBtn.addEventListener('click', () => {

    editFormTitle.classList.toggle('form-toggle-none');
    editFormTitle.classList.toggle('form-toggle-flex');
    editFormContainer.classList.toggle('form-toggle-none');
    editFormContainer.classList.toggle('form-toggle-flex');
});

addFormCloseBtn.addEventListener('click', () => {

    formTitle.classList.toggle('form-toggle-none');
    formTitle.classList.toggle('form-toggle-flex');
    formContainer.classList.toggle('form-toggle-none');
    formContainer.classList.toggle('form-toggle-flex');
    addBtn.classList.add('form-toggle-flex');
    addBtn.classList.remove('form-toggle-none');
});

catSortSelect.addEventListener('change', (e) => {

    category = e.target.value;

    if(category !== "") {
        let sortedArray = sortArrayByCategory(category);
        myLibrary = sortedArray;
        while(gamesContainer.hasChildNodes()) {
            gamesContainer.removeChild(gamesContainer.lastChild);
        }
        displayGames();
    }
});

yearSelect.addEventListener('change', () => {

    currentUserRef.child(yearSelect.value).once('value', (snap) => {
        if(snap.exists()) {
            myLibrary = [];
            let dbLibrary = Object.values(snap.val());
            createLibrary(dbLibrary);
            resetGameList();
        } else {
            myLibrary = [];
            resetGameList();
        }
    });
});

// Eventlistener for delete button on cards.
editDeleteBtn.addEventListener('click', (e) => {

    deleteConfBackground.classList.toggle('form-toggle-none');
    deleteConfBackground.classList.toggle('form-toggle-flex');
});

searchBar.addEventListener('keydown', (e) => {

    if(e.key.length > 1 && e.key !== "Backspace") {
        return;
    }
    else if(e.key === "Backspace") {
        for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
            if(searchBar.value.substring(0, searchBar.value.length - 1) === "") {
                if(completedBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Completed") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(nowBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Now Playing") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(waitBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Waitlist") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(droppedBtn.classList.contains('tab-toggle-text')){
                    if(myLibrary[arrayIndex].status === "Dropped") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else {
                    myLibrary[arrayIndex].equalsSearch = true;
                }
            }
            else if(!myLibrary[arrayIndex].title.toLowerCase().includes(searchBar.value.substring(0, searchBar.value.length - 1).toLowerCase())) {
                if(completedBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Completed") {
                        myLibrary[arrayIndex].equalsSearch = false;
                    }
                }
                else if(nowBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Now Playing") {
                        myLibrary[arrayIndex].equalsSearch = false;
                    }
                }
                else if(waitBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Waitlist") {
                        myLibrary[arrayIndex].equalsSearch = false;
                    }
                }
                else if(droppedBtn.classList.contains('tab-toggle-text')){
                    if(myLibrary[arrayIndex].status === "Dropped") {
                        myLibrary[arrayIndex].equalsSearch = false;
                    }
                }
                else {
                    myLibrary[arrayIndex].equalsSearch = false;
                }
            }
            else {
                if(completedBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Completed") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(nowBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Now Playing") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(waitBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Waitlist") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(droppedBtn.classList.contains('tab-toggle-text')){
                    if(myLibrary[arrayIndex].status === "Dropped") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else {
                    myLibrary[arrayIndex].equalsSearch = true;
                }
            }
        }
    }
    else {
        for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
            if(searchBar.value + e.key === "") {
                if(completedBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Completed") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(nowBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Now Playing") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(waitBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Waitlist") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(droppedBtn.classList.contains('tab-toggle-text')){
                    if(myLibrary[arrayIndex].status === "Dropped") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else {
                    myLibrary[arrayIndex].equalsSearch = true;
                }
            }
            else if(!myLibrary[arrayIndex].title.toLowerCase().includes(searchBar.value.toLowerCase() + e.key.toLowerCase())) {
                if(completedBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Completed") {
                        myLibrary[arrayIndex].equalsSearch = false;
                    }
                }
                else if(nowBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Now Playing") {
                        myLibrary[arrayIndex].equalsSearch = false;
                    }
                }
                else if(waitBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Waitlist") {
                        myLibrary[arrayIndex].equalsSearch = false;
                    }
                }
                else if(droppedBtn.classList.contains('tab-toggle-text')){
                    if(myLibrary[arrayIndex].status === "Dropped") {
                        myLibrary[arrayIndex].equalsSearch = false;
                    }
                }
                else {
                    myLibrary[arrayIndex].equalsSearch = false;
                }
            }
            else {
                if(completedBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Completed") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(nowBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Now Playing") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(waitBtn.classList.contains('tab-toggle-text')) {
                    if(myLibrary[arrayIndex].status === "Waitlist") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else if(droppedBtn.classList.contains('tab-toggle-text')){
                    if(myLibrary[arrayIndex].status === "Dropped") {
                        myLibrary[arrayIndex].equalsSearch = true;
                    }
                }
                else {
                    myLibrary[arrayIndex].equalsSearch = true;
                }
            }
        }
    }
    while(gamesContainer.hasChildNodes()) {
        gamesContainer.removeChild(gamesContainer.lastChild);
    }
    displayGames();
});

// Allows user to press the Enter key instead of clicking the submit button to submit a new game.
titleField.addEventListener('keydown', (e) => {

    if(e.key === "Enter") {
        submitGame();
    }
});

genreField.addEventListener('keydown', (e) => {

    if(e.key === "Enter") {
        submitGame();
    }
});

platformField.addEventListener('keydown', (e) => {

    if(e.key === "Enter") {
        submitGame();
    }
});

addBtn.addEventListener('click', () => {

    editFormTitle.classList.remove('form-toggle-flex');
    editFormTitle.classList.add('form-toggle-none');
    editFormContainer.classList.remove('form-toggle-flex');
    editFormContainer.classList.add('form-toggle-none');

    formContainer.classList.toggle('form-toggle-none');
    formContainer.classList.toggle('form-toggle-flex');
    formTitle.classList.toggle('form-toggle-none');
    formTitle.classList.toggle('form-toggle-flex');

    addBtn.classList.remove('form-toggle-flex');
    addBtn.classList.add('form-toggle-none');
});

// Eventlisteners for game status tabs.
allBtn.addEventListener('click', () => {

    for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
        myLibrary[arrayIndex].equalsSearch = true;
    }

    allBtn.classList.remove('tab-toggle-none');
    allBtn.classList.add('tab-toggle-text');
    nowBtn.classList.remove('tab-toggle-text');
    nowBtn.classList.add('tab-toggle-none');
    completedBtn.classList.remove('tab-toggle-text');
    completedBtn.classList.add('tab-toggle-none');
    waitBtn.classList.remove('tab-toggle-text');
    waitBtn.classList.add('tab-toggle-none');
    droppedBtn.classList.remove('tab-toggle-text');
    droppedBtn.classList.add('tab-toggle-none');
    resetGameList();
});

nowBtn.addEventListener('click', () => {

    for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
        if(myLibrary[arrayIndex].status === "Now Playing") {
            myLibrary[arrayIndex].equalsSearch = true;
        } else {
            myLibrary[arrayIndex].equalsSearch = false;
        }
    }

    allBtn.classList.add('tab-toggle-none');
    allBtn.classList.remove('tab-toggle-text');
    nowBtn.classList.add('tab-toggle-text');
    nowBtn.classList.remove('tab-toggle-none');
    completedBtn.classList.remove('tab-toggle-text');
    completedBtn.classList.add('tab-toggle-none');
    waitBtn.classList.remove('tab-toggle-text');
    waitBtn.classList.add('tab-toggle-none');
    droppedBtn.classList.remove('tab-toggle-text');
    droppedBtn.classList.add('tab-toggle-none');
    resetGameList();
});

completedBtn.addEventListener('click', () => {

    for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
        if(myLibrary[arrayIndex].status === "Completed") {
            myLibrary[arrayIndex].equalsSearch = true;
        } else {
            myLibrary[arrayIndex].equalsSearch = false;
        }
    }

    allBtn.classList.add('tab-toggle-none');
    allBtn.classList.remove('tab-toggle-text');
    nowBtn.classList.remove('tab-toggle-text');
    nowBtn.classList.add('tab-toggle-none');
    completedBtn.classList.add('tab-toggle-text');
    completedBtn.classList.remove('tab-toggle-none');
    waitBtn.classList.remove('tab-toggle-text');
    waitBtn.classList.add('tab-toggle-none');
    droppedBtn.classList.remove('tab-toggle-text');
    droppedBtn.classList.add('tab-toggle-none');
    resetGameList();
});

waitBtn.addEventListener('click', () => {

    for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
        if(myLibrary[arrayIndex].status === "Waitlist") {
            myLibrary[arrayIndex].equalsSearch = true;
        } else {
            myLibrary[arrayIndex].equalsSearch = false;
        }
    }

    allBtn.classList.add('tab-toggle-none');
    allBtn.classList.remove('tab-toggle-text');
    nowBtn.classList.remove('tab-toggle-text');
    nowBtn.classList.add('tab-toggle-none');
    completedBtn.classList.remove('tab-toggle-text');
    completedBtn.classList.add('tab-toggle-none');
    waitBtn.classList.add('tab-toggle-text');
    waitBtn.classList.remove('tab-toggle-none');
    droppedBtn.classList.remove('tab-toggle-text');
    droppedBtn.classList.add('tab-toggle-none');
    resetGameList();
});

droppedBtn.addEventListener('click', () => {

    for(let arrayIndex = 0; arrayIndex < myLibrary.length; arrayIndex++) {
        if(myLibrary[arrayIndex].status === "Dropped") {
            myLibrary[arrayIndex].equalsSearch = true;
        } else {
            myLibrary[arrayIndex].equalsSearch = false;
        }
    }

    allBtn.classList.add('tab-toggle-none');
    allBtn.classList.remove('tab-toggle-text');
    nowBtn.classList.remove('tab-toggle-text');
    nowBtn.classList.add('tab-toggle-none');
    completedBtn.classList.remove('tab-toggle-text');
    completedBtn.classList.add('tab-toggle-none');
    waitBtn.classList.remove('tab-toggle-text');
    waitBtn.classList.add('tab-toggle-none');
    droppedBtn.classList.add('tab-toggle-text');
    droppedBtn.classList.remove('tab-toggle-none');
    resetGameList();
});

deleteConfBtn.addEventListener('click', () => {

    currentUserRef.child(yearSelect.value).child(myLibrary[currentEvent.target.getAttribute('data-arrayIndex')].title).remove();
    myLibrary.splice(currentEvent.target.getAttribute('data-arrayIndex'), 1);
    deleteConfBackground.classList.toggle('form-toggle-flex');
    deleteConfBackground.classList.toggle('form-toggle-none');

    editFormTitle.classList.toggle('form-toggle-none');
    editFormTitle.classList.toggle('form-toggle-flex');
    editFormContainer.classList.toggle('form-toggle-none');
    editFormContainer.classList.toggle('form-toggle-flex');
    
    searchBar.value = "";
    resetGameList();
});

deleteConfCloseBtn.addEventListener('click', () => {

    deleteConfBackground.classList.toggle('form-toggle-flex');
    deleteConfBackground.classList.toggle('form-toggle-none');
});

signoutBtn.addEventListener('click', () => {

    googleSignOut();
    signoutBackground.classList.toggle('form-toggle-flex');
    signoutBackground.classList.toggle('form-toggle-none');
});

signoutCloseBtn.addEventListener('click', () => {

    signoutBackground.classList.toggle('form-toggle-flex');
    signoutBackground.classList.toggle('form-toggle-none');
});

userImage.addEventListener('click', () => {

    signoutBackground.classList.toggle('form-toggle-flex');
    signoutBackground.classList.toggle('form-toggle-none');
});

/*window.addEventListener('scroll', () => {

    if(window.scrollY <= 50 && !formContainer.classList.contains('form-toggle-flex')) {
        addBtn.classList.remove('form-toggle-none');
        addBtn.classList.add('form-toggle-flex');
    } else {
        addBtn.classList.remove('form-toggle-flex');
        addBtn.classList.add('form-toggle-none');
    }
});*/



// ***** ON PAGE LOAD ***** //

// Fills year list select menus
let latestYear = new Date().getFullYear() + 1;
let earliestYear = 2019;
while (latestYear >= earliestYear) {
    let dateOption = document.createElement('option');
    dateOption.text = latestYear;
    dateOption.value = latestYear;
    let dateOptionForm = document.createElement('option');
    dateOptionForm.text = latestYear;
    dateOptionForm.value = latestYear;
    listYearField.add(dateOptionForm);
    yearSelect.add(dateOption);
    latestYear -= 1;
}
let today = new Date().getFullYear();
yearSelect.value = today;
listYearField.value = today;


// Firebase Realtime Database Application
firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
        currentUser = user;
        currentUserID = user.uid;
        currentUserRef = database.ref().child(currentUserID);
        let imgUrl = user.photoURL;
        signBtn.classList.toggle('display-none');
        userImage.style.cssText = 'background-image: url(' + imgUrl + ')';

        currentUserRef.child(yearSelect.value).once('value', (snap) => {
            myLibrary = [];
            let dbLibrary = Object.values(snap.val());
            createLibrary(dbLibrary);
            resetGameList();
        });
    } else {
        userImage.classList.toggle('display-none');
        currentUser = user;
    }
});