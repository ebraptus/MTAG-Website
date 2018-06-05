var GameList = [];

function C_Game(szName, szDesc, szSubDir){
    this.m_szName = szName;
    this.m_szDesc = szDesc;
    this.m_szCodeLink = "games/" + szSubDir + "/index.txt";
    this.m_szGameLink = "games/" + szSubDir + "/index.html";
}

function AddGame(szName, szDesc, szSubDir){
    var newGame = new C_Game(szName, szDesc, szSubDir);
    GameList.push(newGame);
}

function AddGame2(szSubDir){
    var directory = "games/" + szSubDir;

    jQuery.get(directory + "/title.txt", function(data) {
        var szName = data;
        jQuery.get(directory + "/onlinetext.html", function(data2) {
            var szDesc = data2;
            AddGame(szName, szDesc, szSubDir);
            updateGameList();
        });
    });
}

function GameTemplate(iIndex, szName, szDesc){
    return '<div class="s4">' +
    '<div class="card">' +
    '    <div class="title">' + szName + '</div>' +
    '    <div class="content">' + szDesc + '</div>' +
    '    <button class="btn btn-primary" onclick="viewGame(' + iIndex + ')">View Game</button>' +
    '    <button class="btn btn-primary" onclick="viewCode(' + iIndex + ')">View Code</button>' +
    ' </div>' +
    '</div>';
}

function updateGameList(){
    var output = "";

    for(var i = 0; i < GameList.length; i++){
        var game = GameList[i];
        output += GameTemplate(i, game.m_szName, game.m_szDesc);            
    }
    document.getElementById("games").innerHTML = output;
}

function viewCode(iIndex){
    var newWindow = window.open(GameList[iIndex].m_szCodeLink);
}

function viewGame(iIndex){
    var newWindow = window.open(GameList[iIndex].m_szGameLink);
}


// Start of adding games

AddGame2("RYCH_DarkSouls");
AddGame2("RYCH_Principle");
AddGame2("RYCH_RatCity");
AddGame2("RYCH_TomAndJerry");

AddGame2("AdrianShareef");
AddGame2("AndreHood");
AddGame2("AnthonySexton");
AddGame2("AriannaByars");
AddGame2("BrookeUtsey");
AddGame2("BryanCox");
AddGame2("CalebCheatwood");
AddGame2("CameronFord");
AddGame2("ChandlerShettleroe");
AddGame2("GeorgeSydenstricker");
AddGame2("HunterHoehn");
AddGame2("JackShroat");
AddGame2("JaidonAndrews");
AddGame2("JaneKosakowski");
AddGame2("JaysonMills");
AddGame2("JazmineCoxton");
AddGame2("JustinHood");
AddGame2("LorenWilliams");
AddGame2("MichaelJackson");
AddGame2("MorganSchalk");
AddGame2("RachelBlackburn");
AddGame2("RyanKuehne");
AddGame2("SantinoHorne");
AddGame2("SarahHalladay");
AddGame2("ThomasBarnes");

updateGameList();
