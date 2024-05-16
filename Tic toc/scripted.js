let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    playMusic();
   
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
       
      }
    }
  }
};


newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);


//change mode
let about=document.querySelector("#ab");
let contact=document.querySelector("#con");
let signup=document.querySelector("#si");
let header=document.querySelector(".header");
let shift=document.querySelector("#dark");
console.log(shift);
let h1=document.querySelector("#h1");
let body=document.querySelector("body");
let currentmode="light";
shift.addEventListener("click",()=>{

    if(currentmode=="light"){
        currentmode="dark";
       
       
        h1.style.color="white";
        body.style.backgroundColor="#383B3C";
        header.style.backgroundColor="RGB(69  69  69)";
        header.style.color="white";
        about.style.color="white";
        contact.style.color="white";
        signup.style.color="white";
        resetBtn.style.backgroundColor="#383B3C";
        newGameBtn.style.backgroundColor="#383B3C";
        
      
    }else{
        currentmode="light";
    
        body.style.backgroundColor="#8AAAE5";
        header.style.backgroundColor="white";
        header.style.color="rgb(112, 29, 206)";
        h1.style.color="#00246B";
        resetBtn.style.backgroundColor="#002C54";
        about.style.color="blue";
        contact.style.color="blue";
        signup.style.color="blue";
        newGameBtn.style.backgroundColor="#002C54";
    }
    });
   
    //play sound for boxes
     function playMusic(){
      let audio=new Audio("tap.mp3");
      audio.play();
     }
     playMusic();
     


    
