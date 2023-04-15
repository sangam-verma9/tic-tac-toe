let gameover =new Audio("gameover.mp3")
let turn_music =new Audio("news-ting-6832.mp3")
let winmusic =new Audio("winningmusic.mp3")
let isgameover= false
let turn ="X"
let count=0
const changeturn=()=>{
    return turn === "X"?"O":"X"
}

const checkwin=()=>{
    let boxtext =document.getElementsByClassName('boxtext');
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText === boxtext[e[2]].innerText)&& (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText =boxtext[e[0]].innerText +" won"
            isgameover=true
            document.querySelector('.gameimg').getElementsByTagName('img')[0].style.display="block"
            winmusic.play()
        }
    })
}
const checkbore=()=>{
    if(count==9 && !isgameover){
        document.querySelector('.gameimg').getElementsByTagName('img')[1].style.display="block"
        document.getElementsByClassName("info")[0].innerText="Game over";
        gameover.play();
    }
}

let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText ===""){
            boxtext.innerText=turn;
            turn_music.play();
            count=count+1
            turn=changeturn();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
            checkbore();
        }
    })
})

const refreshPage=()=>{
    window.location.reload();
} 