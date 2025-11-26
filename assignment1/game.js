let mapGrid = document.getElementById("map");
let playerLocation = 0;
let mapItems;
let mapItemsData = [24];
let townAdjectives = [
    "Meadows",
    "Pleasant",
    "Gold",
    "Silver",
    "Bronze",
    "Green",
    "Grass"
];
let townNoun = [
    "hold",
    "shire",
    "ton",
    "fort",
    "town",
    "ton",
    "port"
]
let dungeonAdjectives = [
    "Iron",
    "Blood",
    "Steel",
    "Skull",
    "Dirt",
    "Bone",
    "Ghost",
    "Fire"
]
let dungeonNoun = [
    "keep",
    "skull",
    "grave",
    "shatter",
    "break",
    "splitter",
    "weep"
]

//Class declaration for all types of location
class Location {
    constructor(name){
        this.name = name;
    }

    interaction(){
        console.log("Interacted with me");
    }

    moveTo(){
        console.log("Moved to me");
    }

    locationType(){
        return "";
    }
}

class Town extends Location{
    interaction(){
        console.log("Stay a while, and buy something!");
    }

    locationType(){
        return "town";
    }
}

class Forest extends Location{
    moveTo(){
        console.log("Be careful! Monsters lurk in the woods here!");
    }

    locationType(){
        return "forest";
    }
}

class Dungeon extends Location{
    interaction(){
        console.log("Challenging the final boss!");
    }

    moveTo(){
        console.log("Entering the final dungeon");
    }
    
    locationType(){
        return "dungeon";
    }
}

console.log("running");

// Test Function
function hiThere(event){
    alert(event.currentTarget.innerHTML);
}

//Name generator
function nameGeneration(locationType){
    let name;
    switch (locationType){
        case "forest":
            name = "Forest";
            break;
        case "town":
            name = townAdjectives[Math.floor(Math.random() * townAdjectives.length)] + townNoun[Math.floor(Math.random() * townNoun.length)];
            break;
        case "dungeon":
            name = dungeonAdjectives[Math.floor(Math.random() * dungeonAdjectives.length)] + dungeonNoun[Math.floor(Math.random() * dungeonNoun.length)] + " Dungeon";
            break;
        default:
            name = "Location";
    }
    return name;
}

//Interact with the cell at i
function mapInteract(i){
    alert("Interacted with cell: " + i);
    mapItemsData[i].interaction();
}

//Move to the cell at i
function mapMove(i){
    mapItems[playerLocation].classList.remove("playertile");
    playerLocation = i;
    mapItems[playerLocation].classList.add("playertile");
    mapItemsData[i].moveTo();
}

// Generic Shuffle function
function shuffleArray(array){
    let index = array.length;
    while (index != 0){
        let newIndex = Math.floor(Math.random() * index);
        index--;

        [array[index], array[newIndex]] = [array[newIndex], array[index]];
    }
}

// Create the randomized map
function generateMap(numberOfTowns, numberOfDungeons){
    for(let i = 0; i < numberOfTowns; i++){
        mapItemsData[i] = new Town(nameGeneration("town"));
    }
    for(let i = 0; i < numberOfDungeons; i++){
        mapItemsData[i + numberOfTowns] = new Dungeon(nameGeneration("dungeon"));
    }
    for(let i = numberOfDungeons+numberOfTowns; i < 25; i++){
        mapItemsData[i] = new Forest(nameGeneration("forest"));
    }
    shuffleArray(mapItemsData);
}

generateMap(5, 5);

console.log(mapItemsData);

//Set up the HTML for all available map grids 
for(let i = 0; i <= 24; i++){
    mapGrid.innerHTML = mapGrid.innerHTML + ('<div class="mapitem ' + mapItemsData[i].locationType() + '">' + mapItemsData[i].name + '</div>');
}

//Get a list of all the newly created map cells
mapItems = document.getElementsByClassName("mapitem");

//Make our playertile the cell at index of location
mapItems[playerLocation].classList.add("playertile");

console.log(mapItems);

//Set up the functions for movement/interaction for all cells
for(let i = 0; i < mapItems.length; i++){
    mapItems[i].addEventListener('click', function(){
        // If the player is on the cell, interact with it
        if(playerLocation == i){
            mapInteract(i)
        }
        // If the player is horizontally or vertically adjacent to the cell, move to it. If not, let the player know they cannot move there
        else if(playerLocation == (i - 1) || playerLocation == (i + 1) || playerLocation == (i - 5) || playerLocation == (i + 5)){
            mapMove(i)
        }
        else{
            alert("You cannot move there!")
        }
    })
}