var GameList = [];

function C_Game(szName, szDesc, szSubDir){
    this.m_szName = szName;
    this.m_szDesc = szDesc;
    this.m_szPicLoc = "games/" + szSubDir + "/Image.png";
    this.m_szCodeLink = "games/" + szSubDir + "/index.txt";
    this.m_szGameLink = "games/" + szSubDir + "/index.html";
}

function AddGame(szName, szDesc, szSubDir){
    var newGame = new C_Game(szName, szDesc, szSubDir);
    GameList.push(newGame);
}

function GameTemplate(iIndex, szName, szDesc, szPictureLink){
    return '<div class="s4">' +
    '<div class="card">' +
    '    <div class="title">' + szName + '</div>' +
    '    <div class="picture"><img src="' + szPictureLink + '" alt="" width="100%"></div>' +
    '    <div class="content">' + szDesc + '</div>' +
    '    <button class="btn btn-primary" onclick="viewGame(' + iIndex + ')">View Game</button>' +
    '    <button class="btn btn-primary" onclick="viewCode(' + iIndex + ')">View Code</button>' +
    ' </div>' +
    '</div>';
}

function updateGameList(){
    var output = '<div class="title">Text Adventure Games</div>' + '<div class="row">';

    for(var i = 0; i < GameList.length; i++){
        var game = GameList[i];
        output += GameTemplate(i, game.m_szName, game.m_szDesc, game.m_szPicLoc);
    }

    output += '</div>';
    document.getElementById("mainCont").innerHTML = output;
}

function viewCode(iIndex){
    var newWindow = window.open(GameList[iIndex].m_szCodeLink);
}

function viewGame(iIndex){
    var newWindow = window.open(GameList[iIndex].m_szGameLink);
}

// Directions for adding a new game
// Create a new directory inside the "games" directory
// Place the image for the game in directory called Image.png
// Place the html file inside the directory with the name index.html
// Then place a copy of the html file called index.txt in the directory
// Below add a new game by adding the code

// Then call the AddGame function with the correct parameters
// Example AddGame("Name", "Description", "SubDir")
// Make sure the SubDir is the exact directory of the game, Case sensative


// Start of adding games
AddGame("Game One", "Desc and shiz", "game1");

// End of adding games - Update game list
updateGameList();