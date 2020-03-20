let turn = 0;
let count = 0;
let winner;
let prev;

function check_win(){
    if(document.querySelector("#one").innerHTML == document.querySelector("#two").innerHTML && document.querySelector("#three").innerHTML == document.querySelector("#two").innerHTML)
    {
        console.log("123");
        return 1;
    }
    else if(document.querySelector("#one").innerHTML == document.querySelector("#four").innerHTML && document.querySelector("#seven").innerHTML == document.querySelector("#four").innerHTML)
    {
        return 1;
    }
    else if(document.querySelector("#four").innerHTML == document.querySelector("#five").innerHTML && document.querySelector("#five").innerHTML == document.querySelector("#six").innerHTML)
    {
        return 1;
    }
    else if(document.querySelector("#seven").innerHTML == document.querySelector("#eight").innerHTML && document.querySelector("#eight").innerHTML == document.querySelector("#nine").innerHTML)
    {
        return 1;
    }
    else if(document.querySelector("#five").innerHTML == document.querySelector("#two").innerHTML && document.querySelector("#five").innerHTML == document.querySelector("#eight").innerHTML)
    {
        return 1;
    }
    else if(document.querySelector("#three").innerHTML == document.querySelector("#six").innerHTML && document.querySelector("#six").innerHTML == document.querySelector("#nine").innerHTML)
    {
        return 1;
    }
    else if(document.querySelector("#one").innerHTML == document.querySelector("#five").innerHTML && document.querySelector("#five").innerHTML == document.querySelector("#nine").innerHTML)
    {
        return 1;
    }
    else if(document.querySelector("#seven").innerHTML == document.querySelector("#two").innerHTML && document.querySelector("#five").innerHTML == document.querySelector("#two").innerHTML)
    {
        return 1;
    }
    else{
        if(count < 9)
            return 0;
        else
            return -1;
    }
}

document.querySelector(".game-block").addEventListener("click",e=>{
    count++;
    var input = e.target;
    prev = input.id;
    console.log(input.id);
    if(turn == 0)
    {       
        document.querySelector("#" + input.id).innerHTML = '<i class="fas fa-circle">';
        turn = 1;
        document.querySelector("#PlayerA").classList.remove("active");
        document.querySelector("#PlayerB").classList.add("active");
    }
    else 
    {
        document.querySelector("#" + input.id).innerHTML = '<i class="fas fa-times">';
        turn = 0;
        document.querySelector("#PlayerB").classList.remove("active");
        document.querySelector("#PlayerA").classList.add("active");
    }
    winner = check_win();
    if(winner == 1)
    console.log("winner");
    else if(winner == -1)
    console.log("Draw");
    else if(winner == 0)
    console.log("Wait");
})

document.querySelector("#undo").addEventListener("click",()=>{
    if(prev == 0)
        alert("u cant");
    else
    { 
        count--;
        if (turn == 0)
        {    
            turn = 1;
            document.querySelector("#PlayerA").classList.remove("active");
            document.querySelector("#PlayerB").classList.add("active");
        }
        else
        {    
            turn = 0;
            document.querySelector("#PlayerB").classList.remove("active");
            document.querySelector("#PlayerA").classList.add("active");            
        }
        document.querySelector("#" + prev).innerHTML = "";
        prev = 0;
    }
})
