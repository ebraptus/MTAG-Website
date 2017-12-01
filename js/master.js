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
AddGame("Dark Souls", "A darksouls based game where you are on a quest to save the the fallen lords", "darksouls");
AddGame("Battle The Principle", "You get your phone taken from by the principle and you have to get it back", "principle");
AddGame("Tom the Cat", "Tom the cat loves his peacful life at his house. but Jerry Nibbles and Spike invaded his home, help Tom get rid of these foes who have entered his home, fight enemies buy items from Toms friend Garfield the cat, adventure awaits in.... Adventures of Tom the cat.", "tomandjerry");
AddGame("Rat City", "A very meme heavy MTAG, we recommend reading all the lore", "ratcity");

// End of adding games - Update game list
updateGameList();