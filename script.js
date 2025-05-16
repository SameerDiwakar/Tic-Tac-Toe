let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msg =document.querySelector("#msg");
let turno = true; 


const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8],
[1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

const resetgame =()=>{
    turno= true;
    enableboxes();
    msg.classList.add("hide");
    newbtn.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked")
        if (turno) {
            box.classList.add("red");
            box.classList.remove("blue");
            box.innerText = "O";
            turno = false;
        }
        else {
            box.classList.add("blue");
            box.classList.remove("red");
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showwinner = (winner) =>{
    msg.innerText =`Winner is ${winner}`;
    msg.classList.remove("hide");
    newbtn.classList.remove("hide");
    disableboxes();
}
checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
            }
        }
    }
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

