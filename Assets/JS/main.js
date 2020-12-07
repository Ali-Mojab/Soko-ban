//grap elements
const board = document.querySelector(".board");
const buttonRestart = document.querySelector(".btn-restart");
const goalArray = [];
let PlayerX;
let PlayerY;
let first_time = true;

const Player = document.createElement("span");
const imgPlayer = document.createElement("img"); 

/ Enum of CSS Classes for the static elements /
var Tiles = {
Wall: "tile-wall",
Space: "tile-space",
Goal: "tile-goal",
};

/ Enum of CSS Classes for the moving elements /
var Entities = {
Character: "entity-player",
Block: "entity-block",
BlockDone: "entity-block-goal",
};

/* Legend
W = Wall
B = Movable block
P = Player starting position
G = Goal area for the blocks
*/

var tileMap01 = {
width: 19,
height: 16,
mapGrid: [
[
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
[" "],
[" "],
[" "],
[" "],
["W"],
["W"],
["W"],
["W"],
["W"],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
[" "],
[" "],
[" "],
[" "],
["W"],
[" "],
[" "],
[" "],
["W"],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
[" "],
[" "],
[" "],
[" "],
["W"],
["B"],
[" "],
[" "],
["W"],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
[" "],
[" "],
["W"],
["W"],
["W"],
[" "],
[" "],
["B"],
["W"],
["W"],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
[" "],
[" "],
["W"],
[" "],
[" "],
["B"],
[" "],
["B"],
[" "],
["W"],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
["W"],
["W"],
["W"],
[" "],
["W"],
[" "],
["W"],
["W"],
[" "],
["W"],
[" "],
[" "],
[" "],
["W"],
["W"],
["W"],
["W"],
["W"],
["W"],
],
[
["W"],
[" "],
[" "],
[" "],
["W"],
[" "],
["W"],
["W"],
[" "],
["W"],
["W"],
["W"],
["W"],
["W"],
[" "],
[" "],
["G"],
["G"],
["W"],
],
[
["W"],
[" "],
["B"],
[" "],
[" "],
["B"],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
["G"],
["G"],
["W"],
],
[
["W"],
["W"],
["W"],
["W"],
["W"],
[" "],
["W"],
["W"],
["W"],
[" "],
["W"],
["P"],
["W"],
["W"],
[" "],
[" "],
["G"],
["G"],
["W"],
],
[
[" "],
[" "],
[" "],
[" "],
["W"],
[" "],
[" "],
[" "],
[" "],
[" "],
["W"],
["W"],
["W"],
["W"],
["W"],
["W"],
["W"],
["W"],
["W"],
],
[
[" "],
[" "],
[" "],
[" "],
["W"],
["W"],
["W"],
["W"],
["W"],
["W"],
["W"],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
[
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
[" "],
],
],
};


const generateMap = (GameMap) => {

    GameMap.forEach((row,i)=>{

        const rowBox = document.createElement('div');
        rowBox.classList.add('box');

        row.forEach((col,j )=> {

           switch(col[0]){
               case " ":
                   const emptyHouse = document.createElement('span');
                    emptyHouse.classList.add(Tiles.Space);   
                    rowBox.appendChild(emptyHouse);
                    break;

                case "W":
                    const wall = document.createElement('span');
                    const imgWall = document.createElement("img"); 
                    imgWall.setAttribute("src", "/Assets/img/wall1.png");
                    wall.classList.add(Tiles.Wall);
                    rowBox.appendChild(wall);
                    wall.appendChild(imgWall);
                    break;

                case "B":
                    const Box = document.createElement('span');
                    const imgBox = document.createElement("img"); 
                    imgBox.setAttribute("src", "/Assets/img/box.png");
                    Box.classList.add(Entities.Block);
                    rowBox.appendChild(Box);
                    Box.appendChild(imgBox);
                    break;

                case "P":
                     const Player = document.createElement('span');
                    //  img.setAttribute('src', '/Assets/img/player.png');
                     imgPlayer.setAttribute("id" , "player");
                     imgPlayer.setAttribute("src", "/Assets/img/player.png");
                     Player.classList.add(Entities.Character);
                     rowBox.appendChild(Player);
                     Player.appendChild(imgPlayer);
                     PlayerX = j;
                     PlayerY = i;
                     break;  

                case "G":
                     const Goal = document.createElement('span');
                     const imgGoal = document.createElement("img"); 
                     imgGoal.setAttribute("src", "/Assets/img/goal4.png");
                     Goal.classList.add(Tiles.Goal);
                     rowBox.appendChild(Goal);
                     Goal.appendChild(imgGoal);
                     if( first_time ){
                       goalArray.push([i, j]);
                       console.log('test');
                     }

                     break;  
                    
           }
        });
        board.appendChild(rowBox);
    });
     first_time =  false;
};



const movementHandler = (e) =>{

    switch (e.keyCode){
        case 38:
            moveUp();
            break;
        
        case 40:
            moveDown();
            break;

        case 37:
            moveLeft();
            break;

        case 39:
            moveRight();
            break;
    }
    setTimeout(() => {
      checkWinner();
    }, 300);
};

const checkWinner = () => {
    let status = 0;
  
  goalArray.forEach((goal) => {
    if (tileMap01.mapGrid[goal[0]][goal[1]][0] === "B") {
        status = status + 1;    
      }
    });
    console.log(status);

  if (status === goalArray.length) {
    alert("🌈Hooray!✨  You win!😎");
  }
};

const moveUp = () =>{

    
    if  (tileMap01.mapGrid[PlayerY - 1][PlayerX][0] === "B" && tileMap01.mapGrid[PlayerY - 2][PlayerX][0] === " " ){
        tileMap01.mapGrid[PlayerY - 2][PlayerX][0] = "B";
        tileMap01.mapGrid[PlayerY - 1][PlayerX][0] = "P";
        tileMap01.mapGrid[PlayerY][PlayerX][0] = " ";
        board.textContent ="";
        generateMap(tileMap01.mapGrid);
       
    }

    if (tileMap01.mapGrid[PlayerY - 1][PlayerX][0] === " "){
      tileMap01.mapGrid[PlayerY][PlayerX][0] = " ";
      tileMap01.mapGrid[PlayerY - 1][PlayerX][0] = "P";
      board.textContent ="";
      generateMap(tileMap01.mapGrid);
      
  }
}

const moveDown = () =>{

   
    if  (tileMap01.mapGrid[PlayerY + 1][PlayerX][0] === "B" && tileMap01.mapGrid[PlayerY + 2][PlayerX][0] === " "){
        tileMap01.mapGrid[PlayerY + 2][PlayerX][0] = "B";
        tileMap01.mapGrid[PlayerY + 1][PlayerX][0] = "P";
        tileMap01.mapGrid[PlayerY][PlayerX][0] = " ";
        board.textContent ="";
        generateMap(tileMap01.mapGrid);
       
    }

    if (tileMap01.mapGrid[PlayerY + 1][PlayerX][0] === " "){
      tileMap01.mapGrid[PlayerY][PlayerX][0] = " ";
      tileMap01.mapGrid[PlayerY + 1][PlayerX][0] = "P";
      board.textContent ="";
      generateMap(tileMap01.mapGrid);
      
  }
}

const moveLeft = () =>{

    if (tileMap01.mapGrid[PlayerY][PlayerX - 1][0] === " "){
        tileMap01.mapGrid[PlayerY][PlayerX][0] = " ";
        tileMap01.mapGrid[PlayerY][PlayerX - 1][0] = "P"; 
    }
    if  (tileMap01.mapGrid[PlayerY][PlayerX - 1][0] === "B" && tileMap01.mapGrid[PlayerY][PlayerX - 2][0] === " "){
        tileMap01.mapGrid[PlayerY][PlayerX - 2][0] = "B";
        tileMap01.mapGrid[PlayerY][PlayerX - 1][0] = "P";
        tileMap01.mapGrid[PlayerY][PlayerX][0] = " ";
    }
    board.textContent ="";
    generateMap(tileMap01.mapGrid);
    if (imgPlayer.classList.contains("imgFlip")){
        imgPlayer.classList.remove("imgFlip"); 
    }
};

const moveRight = () =>{

  if (tileMap01.mapGrid[PlayerY][PlayerX + 1][0] === "B" && tileMap01.mapGrid[PlayerY][PlayerX + 2][0] === "G"){
    tileMap01.mapGrid[PlayerY][PlayerX + 2][0] = "B";
    tileMap01.mapGrid[PlayerY][PlayerX + 1][0] = "P";
    tileMap01.mapGrid[PlayerY][PlayerX][0] = " ";
    board.textContent ="";
    generateMap(tileMap01.mapGrid);

  }
    
   if (tileMap01.mapGrid[PlayerY][PlayerX + 1][0] === "B" && tileMap01.mapGrid[PlayerY][PlayerX + 2][0] === " "){
        tileMap01.mapGrid[PlayerY][PlayerX + 2][0] = "B";
        tileMap01.mapGrid[PlayerY][PlayerX + 1][0] = "P";
        tileMap01.mapGrid[PlayerY][PlayerX][0] = " ";
        board.textContent ="";
        generateMap(tileMap01.mapGrid);  
    }

    if (tileMap01.mapGrid[PlayerY][PlayerX + 1][0] === " "){
      tileMap01.mapGrid[PlayerY][PlayerX][0] = " ";
      tileMap01.mapGrid[PlayerY][PlayerX + 1][0] = "P";
      board.textContent ="";
      generateMap(tileMap01.mapGrid);
 
    }
  
    if (!(imgPlayer.classList.contains("imgFlip"))){
        imgPlayer.classList.add("imgFlip"); 
    }
      
}



document.addEventListener('keydown',movementHandler);

generateMap(tileMap01.mapGrid);