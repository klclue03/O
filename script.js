var userScore = 0;
var computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreboard_div = document.querySelector(".scores")
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const gun_div = document.getElementById("gun");
const lightning_div = document.getElementById("lightning");
const devil_div = document.getElementById("devil");
const dragon_div = document.getElementById("dragon");
const water_div = document.getElementById("water");
const air_div = document.getElementById("air");
const paper_div = document.getElementById("paper");
const sponge_div = document.getElementById("sponge");
const wolf_div = document.getElementById("wolf");
const tree_div = document.getElementById("tree");
const human_div = document.getElementById("human");
const snake_div = document.getElementById("snake");
const scissors_div = document.getElementById("scissors");
const fire_div = document.getElementById("fire");


function getComputerChoice() {
    const choices = ["r", "g", "l", "de", "dr", "w", "a", "p", "sp", "wo", "t", "h", "sn", "s", "f"];
    const getRandom = Math.floor(Math.random() * 15)
    return choices[getRandom];
}

function win(userChoice, computerChoice) {
    rand = Math.floor((Math.random() * 10000));
    if (rand != 0) {
        userScore++;

        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;

        result_div.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
    } else {
        computerScore++;

        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
    
        result_div.innerHTML = userChoice + " beats " + computerChoice + ", but the computer made itself win. You lose!";
    } 

}

function lose(userChoice, computerChoice) {
    computerScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = computerChoice + " beats " + userChoice + ". You lose!";
}

function tie(userChoice, computerChoice) {
    result_div.innerHTML = userChoice + " ties with " + computerChoice + ".";
}

function winSponge(computerChoice) {
    userScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = "On a rare circumstance, sponge beats everything, so sponge beats " + 
                            computerChoice + ". You win!"
}

function gunLose() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = "The gun does not have any ammo, so nobody wins."
}

function immuneToFire() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = "The tree that the computer chose is fire-resistant, so nobody wins."
}

function isRaining() {
    userScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = "It is currently raining, so water beats air. You win!";
}

function evolved() {
    result_div.innerHTML = "The snake evolved, so snake ties with dragon.";
}

function isThundering(computerChoice) {
    userScore += 2;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = "It is currently thundering, so thunder beats " + computerChoice + 
    ". You win, and earn two points!" ;
}

function isNotThundering(computerChoice) {
    userScore--;
    computerScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = "It is currently not thundering, so " + computerChoice + " beats thunder."
    "You lose, and earn lose one point!!" ;
}

function specialWin() {
    userScore += 1000;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = "Wolf beats devil, and on a rare chance you won and gained 1000 points!";
}

function specialLose() {
    userScore -= 1000;
    computerScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = "Devil beats wolf, and on a rare chance you lost and were deducted 1000 points!";
}

function technologyLevel(tl) {
    result_div.innerHTML = "The technology level for the human is " + tl + " which allows for a tie!";
}

var rand;

// the most inefficient switch statement you have ever seen
function game(userChoice) {
    const computerChoice = getComputerChoice();

    rand = Math.floor(Math.random() * 1000000);
    if (rand == 0) {
        userScore += 1000;

        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;

        result_div.innerHTML = "You won the lottery! You have collected 1000 points.";
        return;
    }
    
    switch (userChoice + computerChoice) {
        case "rg":
            lose("rock", "Gun");
            break;
        case "rl":
            lose("rock", "Lightning");
            break;
        case "rde":
            lose("rock", "Devil");
            break;
        case "rdr":
            lose("rock", "Dragon");
            break;
        case "rw":
            lose("rock", "Water");
            break;
        case "ra":
            lose("rock", "Air");
            break;
        case "rp": 
            lose("rock", "Paper");
            break;
        case "rsp":
            win("Rock", "sponge");
            break;
        case "rwo":
            win("Rock", "wolf");
            break;
        case "rt":
            win("Rock", "tree");
            break;
        case "rh":
            win("Rock", "human");
            break;
        case "rsn":
            win("Rock", "snake");
            break;
        case "rs": 
            win("Rock", "scissors");
            break;
        case "rf":
            win("Rock", "fire");
            break;    
        case "gr": 
            rand = Math.floor((Math.random() * 50));
            if (rand != 0) {
                win("Gun", "rock");
            } else {
                gunLose();
            } 
            break;
        case "gl":
            lose("gun", "Lightning");
            break;
        case "gde":
            lose("gun", "Devil");
            break;
        case "gdr":
            lose("gun", "Dragon");
            break;
        case "gw":
            lose("gun", "Water");
            break;
        case "ga":
            lose("gun", "Air");
            break;
        case "gp":
            lose("gun", "Paper");
            break;
        case "gsp":
            lose("gun", "Sponge");
            break;
        case "gwo":
            rand = Math.floor((Math.random() * 50));
            if (rand != 0) {
                win("Gun", "wolf");
            } else {
                gunLose();
            } 
            break;
        case "gt":
            rand = Math.floor((Math.random() * 50));
            if (rand != 0) {
                win("Gun", "tree");
            } else {
                gunLose();
            } 
            break;
        case "gh":
            rand = Math.floor((Math.random() * 50));
            if (rand != 0) {
                win("Gun", "rock");
            } else {
                gunLose();
            } 
            break;
        case "gsn":
            rand = Math.floor((Math.random() * 50));
            if (rand != 0) {
                win("Gun", "snake");
            } else {
                gunLose();
            } 
            break;
        case "gs":
            rand = Math.floor((Math.random() * 50));
            if (rand != 0) {
                win("Gun", "scissors");
            } else {
                gunLose();
            } 
            break;
        case "gf":
            rand = Math.floor((Math.random() * 50));
            if (rand != 0) {
                win("Gun", "fire");
            } else {
                gunLose();
            } 
            break;
        case "lr":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("rock");
            } else {
                isNotThundering("rock");
            } 
            break;
        case "lg":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("gun");
            } else {
                isNotThundering("gun");
            } 
            break;
        case "lde":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("devil");
            } else {
                isNotThundering("devil");
            } 
            break;
        case "ldr":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("dragon");
            } else {
                isNotThundering("dragon");
            } 
            break;
        case "lw":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("water");
            } else {
                isNotThundering("water");
            } 
            break;
        case "la":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("air");
            } else {
                isNotThundering("air");
            } 
            break;
        case "lp":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("paper");
            } else {
                isNotThundering("paper");
            } 
            break;
        case "lsp":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("sponge");
            } else {
                isNotThundering("sponge");
            } 
            break;
        case "lwo":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("wolf");
            } else {
                isNotThundering("wolf");
            } 
            break;
        case "lt":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("tree");
            } else {
                isNotThundering("tree");
            } 
            break;
        case "lh":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("human");
            } else {
                isNotThundering("human");
            } 
            break;
        case "lsn":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("snake");
            } else {
                isNotThundering("snake");
            } 
            break;
        case "ls":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("scissors");
            } else {
                isNotThundering("scissors");
            } 
            break;
        case "lf":
            rand = Math.floor((Math.random() * 2));
            if (rand != 0) {
                isThundering("fire");
            } else {
                isNotThundering("fire");
            } 
            break;
        case "der":
            win("Devil", "rock");
            break;
        case "deg":
            win("Devil", "gun");
            break;
        case "del":
            win("Devil", "lightning");
            break;
        case "dedr":
            lose("devil", "Dragon");
            break;
        case "dew":
            lose("devil", "Water");
            break;
        case "dea":
            lose("devil", "Air");
            break;
        case "dep":
            lose("devil", "Paper");
            break;
        case "desp":
            lose("devil", "Sponge");
            break;
        case "dewo":
            rand = Math.floor((Math.random() * 1000));
            if (rand != 0) {
                lose("devil", "Wolf");
            } else {
                specialLose();
            } 
            break;
        case "det":
            lose("devil", "Tree");
            break;
        case "deh":
            lose("devil", "Human");
            break;
        case "desn":
            lose("devil", "Snake");
            break;
        case "des":
            lose("devil", "Scissors");
            break;
        case "def":
            lose("devil", "Fire");
            break;
        case "drr":
            win("Dragon", "rock");
            break;
        case "drg":
            win("Dragon", "gun");
            break;
        case "drl":
            win("Dragon", "lightning");
            break;
        case "drde":
            win("Dragon", "devil");
            break;
        case "drw":
            lose("dragon", "Water");
            break;
        case "dra":
            lose("dragon", "Air");
            break;
        case "drp":
            lose("dragon", "Paper");
            break;
        case "drsp":
            lose("dragon", "Sponge");
            break;
        case "drwo":
            lose("dragon", "Wolf");
            break;
        case "drt":
            lose("dragon", "Tree");
            break;
        case "drh":
            lose("dragon", "Human");
            break;
        case "drsn":
            win("Dragon", "snake");
            break;
        case "drs":
            win("Dragon", "scissors");
            break;
        case "drf":
            win("Dragon", "fire");
            break;
        case "wr":
            win("Water", "rock");
            break;
        case "wg":
            win("Water", "gun");
            break;
        case "wl":
            win("Water", "lightning");
            break;
        case "wde":
            win("Water", "devil");
            break;
        case "wdr":
            win("Water", "dragon");
            break;
        case "wa":
            rand = Math.floor((Math.random() * 25));
            if (rand != 0) {
                lose("water", "Air");
            } else {
                isRaining();
            } 
        case "wp":
            lose("water", "Paper");
            break;
        case "wsp":
            lose("water", "Sponge");
            break;
        case "wwo":
            lose("water", "Wolf");
            break;
        case "wt":
            lose("water", "Tree");
            break;
        case "wh":
            lose("water", "Human");
            break;
        case "wsn":
            lose("water", "Snake");
            break;
        case "ws":
            win("Water", "scissors");
            break;
        case "wf":
            win("Water", "fire");
            break;
        case "ar":
            win("Air", "rock");
            break;
        case "ag":
            win("Air", "gun");
            break;
        case "al":
            win("Air", "lightning");
            break;
        case "ade":
            win("Air", "devil");
            break;
        case "adr":
            win("Air", "dragon");
            break;
        case "aw":
            win("Air", "water");
            break;
        case "ap":
            lose("air", "Paper");
            break;
        case "asp":
            lose("air", "Sponge");
            break;
        case "awo":
            lose("air", "Wolf");
            break;
        case "at":
            lose("air", "Tree");
            break;
        case "ah":
            lose("air", "Human");
            break;
        case "asn":
            lose("air", "Snake");
            break;
        case "as":
            lose("air", "Scissors");
            break;
        case "af":
            win("Air", "fire");
            break;
        case "pr": 
            win("Paper", "rock");
            break;
        case "pg":
            win("Paper", "gun");
            break;
        case "pl":
            win("Paper", "lightning");
            break;
        case "pde":
            win("Paper", "devil");
            break;
        case "pdr":
            win("Paper", "dragon");
            break;
        case "pw":
            win("Paper", "water");
            break;
        case "pa":
            win("Paper", "air");
            break;
        case "psp":
            lose("paper", "Sponge");
            break;
        case "pwo":
            lose("paper", "Wolf");
            break;
        case "pt":
            lose("paper", "Tree");
            break;
        case "ph":
            lose("paper", "Human");
        case "psn":
            lose("paper", "Snake");
            break;
        case "ps": 
            lose("paper", "Scissors");
            break;    
        case "pf":
            lose("paper", "Fire");
            break;
        case "spr":
            rand = Math.floor((Math.random() * 100));
            if (rand != 0) {
                lose("sponge", "Rock");
            } else {
                winSponge("paper");
            }  
            break;
        case "spg":
            win("Sponge", "gun");
            break;
        case "spl":
            win("Sponge", "lightning");
            break;
        case "spde":
            win("Sponge", "devil");
            break;
        case "spdr":
            win("Sponge", "dragon");
            break;
        case "spw":
            win("Sponge", "water");
            break;
        case "spa":
            win("Sponge", "air");
            break;
        case "spp":
            win("Sponge", "paper");
            break;
        case "spwo":
            rand = Math.floor((Math.random() * 100));
            if (rand != 0) {
                lose("sponge", "Wolf");
            } else {
                winSponge("wolf");
            }  
            break;
        case "spt":
            rand = Math.floor((Math.random() * 100));
            if (rand != 0) {
                lose("sponge", "Tree");
            } else {
                winSponge("tree");
            } 
            break;
        case "sph":
            rand = Math.floor((Math.random() * 100));
            if (rand != 0) {
                lose("sponge", "Human");
            } else {
                winSponge("human");
            } 
            break;
        case "spsn":
            rand = Math.floor((Math.random() * 100));
            if (rand != 0) {
                lose("sponge", "Snake");
            } else {
                winSponge("snake");
            } 
            break;
        case "sps":
            rand = Math.floor((Math.random() * 100));
            if (rand != 0) {
                lose("sponge", "Scissors");
            } else {
                winSponge("scissors");
            } 
            break;
        case "spf":
            rand = Math.floor((Math.random() * 100));
            if (rand != 0) {
                lose("sponge", "Fire");
            } else {
                winSponge("fire");
            } 
            break;
        case "wor":
            lose("wolf", "Rock");
            break;
        case "wog":
            lose("wolf", "Gun");
            break;
        case "wol":
            win("Wolf", "lightning");
            break;
        case "wode":
            rand = Math.floor((Math.random() * 1000));
            if (rand != 0) {
                win("Wolf", "devil");
            } else {
                specialWin();
            } 
            break;
        case "wodr":
            win("Wolf", "dragon");
            break;
        case "wow":
            win("Wolf", "water");
            break;
        case "woa":
            win("Wolf", "air");
            break;
        case "wop":
            win("Wolf", "paper");
            break;
        case "wosp":
            win("Wolf", "wolf");
            break;
        case "wot":
            lose("wolf", "Tree");
            break;
        case "woh":
            lose("wolf", "Human");
            break;
        case "wosn":
            lose("wolf", "Snake");
            break;
        case "wos":
            lose("wolf", "Scissors");
            break;
        case "wof":
            lose("wolf", "Fire");
            break;
        case "tr":
            lose("tree", "Rock");
            break;
        case "tg":
            lose("tree", "Gun");
            break;
        case "tl":
            lose("tree", "Lightning");
            break;
        case "tde":
            win("Tree", "devil");
            break;
        case "tdr":
            win("Tree", "dragon");
            break;
        case "tw":
            win("Tree", "water");
            break;
        case "ta":
            win("Tree", "air");
            break;
        case "tp":
            win("Tree", "paper");
            break;
        case "tsp":
            win("Tree", "sponge");
            break;
        case "two":
            win("Tree", "wolf");
            break;
        case "th":
            win("Tree", "Human");
            break;
        case "tsn":
            win("Tree", "Snake");
            break;
        case "ts":
            win("Tree", "Scissors");
            break;
        case "tf":
            win("Tree", "Fire");
            break;
        case "hr":
            rand = Math.floor((Math.random() * 27) + 1);
            if (rand >= 25) {
                technologyLevel(rand);
            } else {
                lose("human", "Rock");
            } 
            break;
        case "hg":
            rand = Math.floor((Math.random() * 27) + 1);
            if (rand >= 25) {
                technologyLevel(rand);
            } else {
                lose("human", "Gun");
            } 
            break;
        case "hl":
            rand = Math.floor((Math.random() * 27) + 1);
            if (rand >= 25) {
                technologyLevel(rand);
            } else {
                lose("human", "Lightning");
            } 
            break;
        case "hde":
            rand = Math.floor((Math.random() * 27) + 1);
            if (rand >= 25) {
                technologyLevel(rand);
            } else {
                lose("human", "Devil");
            } 
            break;
        case "hdr":
            win("Human", "dragon");
            break;
        case "hw":
            win("Human", "water");
            break;
        case "ha":
            win("Human", "air");
            break;
        case "hp":
            win("Human", "paper");
            break;
        case "hsp":
            win("Human", "sponge");
            break;
        case "hwo":
            win("Human", "wolf");
            break;
        case "ht":
            win("Human", "tree");
            break;
        case "hsn":
            rand = Math.floor((Math.random() * 27) + 1);
            if (rand >= 25) {
                technologyLevel(rand);
            } else {
                lose("human", "Snake");
            } 
            break;
        case "hs":
            rand = Math.floor((Math.random() * 27) + 1);
            if (rand >= 25) {
                technologyLevel(rand);
            } else {
                lose("human", "Scissors");
            } 
            break;
        case "hf":
            rand = Math.floor((Math.random() * 27) + 1);
            if (rand >= 25) {
                technologyLevel(rand);
            } else {
                lose("human", "Fire");
            } 
            break;
        case "snr":
            lose("snake", "Rock");
            break;
        case "sng":
            lose("snake", "Gun");
            break;
        case "snl":
            lose("snake", "Lightning");
            break;
        case "snde":
            lose("snake", "Devil");
            break;
        case "sndr":
            rand = Math.floor((Math.random() * 25));
            if (rand != 0) {
                lose("snake", "Dragon");
            } else {
                evolved();
            } 
            break;
        case "snw":
            win("Snake", "water");
            break;
        case "sna":
            win("Snake", "air");
            break;
        case "snp":
            win("Snake", "paper");
            break;
        case "snsp":
            win("Snake", "sponge");
            break;
        case "snwo":
            win("Snake", "wolf");
            break;
        case "snt":
            win("Snake", "tree");
            break;
        case "snh":
            win("Snake", "human");
            break;
        case "sns":
            lose("snake", "Scissors");
            break;
        case "snf":
            lose("snake", "Fire");
            break;
        case "sr": 
            lose("scissors", "Rock");
            break;
        case "sg":
            lose("scissors", "Gun");
            break;
        case "sl":
            lose("scissors", "Lightning");
            break;
        case "sde":
            lose("scissors", "Devil");
            break;
        case "sdr":
            lose("scissors", "Dragon");
            break;
        case "sw":
            lose("scissors", "Water");
            break;
        case "sa":
            win("Scissors", "air");
            break;
        case "sp": 
            win("Scissors", "paper");
            break;
        case "ssp":
            win("Scissors", "sponge");
            break;
        case "swo":
            win("Scissors", "wolf");
            break;
        case "st":
            win("Scissors", "tree");
            break;
        case "sh":
            win("Scissors", "human");
            break;
        case "ssn":
            win("Scissors", "snake");
        case "sf":
            lose("scissors", "Fire");
            break;
        case "fr":
            lose("fire", "Rock");
            break;
        case "fg":
            lose("fire", "Gun");
            break;
        case "fl":
            lose("fire", "Lightning");
            break;
        case "fde":
            lose("fire", "Devil");
            break;
        case "fdr":
            lose("fire", "Dragon");
            break;
        case "fw":
            lose("fire", "Water");
            break;
        case "fa":
            lose("fire", "Air");
            break;
        case "fp":
            win("Fire", "paper");
            break;
        case "fsp":
            win("Fire", "sponge");
            break;
        case "fwo":
            win("Fire", "wolf");
            break;
        case "ft":
            rand = Math.floor((Math.random() * 25));
            if (rand != 0) {
                win("Fire", "tree");
            } else {
                immuneToFire();
            } 
            break;
        case "fh":
            win("Fire", "human");
            break;
        case "fsn":
            win("Fire", "snake");
            break;
        case "fs":
            win("Fire", "scissors");
            break;
        case "rr":
            tie("Rock", "rock");
            break;
        case "gg":
            tie("Gun", "gun");
            break;
        case "ll":
            tie("Lightning", "lightning");
            break;
        case "dede":
            tie("Devil", "devil");
            break;
        case "drdr":
            tie("Dragon", "dragon");
            break;
        case "ww":
            tie("Water", "water");
            break;
        case "aa":
            tie("Air", "air");
            break;
        case "pp":
            tie("Paper", "paper");
            break;
        case "spsp":
            tie("Sponge", "sponge");
            break;
        case "wowo":
            tie("Wolf", "wolf");
            break;
        case "tt":
            tie("Tree", "tree");
            break;
        case "hh":
            tie("Human", "human");
            break;
        case "snsn":
            tie("Snake", "snake");
            break;
        case "ss":
            tie("Scissors", "scissors");
            break;
        case "ff":
            tie("Fire", "fire");
    }  
}

rock_div.addEventListener('click', function() {
    game("r");
});

gun_div.addEventListener('click', function() {
    game("g");
});

lightning_div.addEventListener('click', function() {
    game("l");
});

devil_div.addEventListener('click', function() {
    game("de");
});

dragon_div.addEventListener('click', function() {
    game("dr");
});

water_div.addEventListener('click', function() {
    game("w");
});

air_div.addEventListener('click', function() {
    game("a");
});

paper_div.addEventListener('click', function() {
    game("p");
});

sponge_div.addEventListener('click', function() {
    game("sp");
});

wolf_div.addEventListener('click', function() {
    game("w");
});

tree_div.addEventListener('click', function() {
    game("t");
});

human_div.addEventListener('click', function() {
    game("h");
});

snake_div.addEventListener('click', function() {
    game("sn");
});

scissors_div.addEventListener('click', function() {
    game("s");
});

fire_div.addEventListener('click', function() {
    game("f");
});