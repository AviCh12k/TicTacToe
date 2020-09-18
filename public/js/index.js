let turn = 0;
let count = 0;
let winner;
let prev;
var clientHeight = document.getElementById('one').clientHeight;
console.log(clientHeight);
function check_win(){


    // console.log(document.querySelector("#one").innerHTML.split('"')[1]);
    // console.log(document.querySelector("#two").innerHTML);
    // console.log(document.querySelector("#three").innerHTML);
    // console.log(document.querySelector("#four").innerHTML);
    // console.log(document.querySelector("#five").innerHTML);
    // console.log(document.querySelector("#six").innerHTML);
    // console.log(document.querySelector("#seven").innerHTML);
    // console.log(document.querySelector("#eight").innerHTML);
    // console.log(document.querySelector("#nine").innerHTML);


    if(document.querySelector("#one").innerHTML.split('"')[1] == document.querySelector("#two").innerHTML.split('"')[1] && document.querySelector("#three").innerHTML.split('"')[1] == document.querySelector("#two").innerHTML.split('"')[1])
    {
        console.log("123");
        return 1;
    }
    else if(document.querySelector("#one").innerHTML.split('"')[1] == document.querySelector("#four").innerHTML.split('"')[1] && document.querySelector("#seven").innerHTML.split('"')[1] == document.querySelector("#four").innerHTML.split('"')[1])
    {
        return 1;
    }
    else if(document.querySelector("#four").innerHTML.split('"')[1] == document.querySelector("#five").innerHTML.split('"')[1] && document.querySelector("#five").innerHTML.split('"')[1] == document.querySelector("#six").innerHTML.split('"')[1])
    {
        return 1;
    }
    else if(document.querySelector("#seven").innerHTML.split('"')[1] == document.querySelector("#eight").innerHTML.split('"')[1] && document.querySelector("#eight").innerHTML.split('"')[1] == document.querySelector("#nine").innerHTML.split('"')[1])
    {
        return 1;
    }
    else if(document.querySelector("#five").innerHTML.split('"')[1] == document.querySelector("#two").innerHTML.split('"')[1] && document.querySelector("#five").innerHTML.split('"')[1] == document.querySelector("#eight").innerHTML.split('"')[1])
    {
        return 1;
    }
    else if(document.querySelector("#three").innerHTML.split('"')[1] == document.querySelector("#six").innerHTML.split('"')[1] && document.querySelector("#six").innerHTML.split('"')[1] == document.querySelector("#nine").innerHTML.split('"')[1])
    {
        return 1;
    }
    else if(document.querySelector("#one").innerHTML.split('"')[1] == document.querySelector("#five").innerHTML.split('"')[1] && document.querySelector("#five").innerHTML.split('"')[1] == document.querySelector("#nine").innerHTML.split('"')[1])
    {
        return 1;
    }
    else if(document.querySelector("#seven").innerHTML.split('"')[1] == document.querySelector("#three").innerHTML.split('"')[1] && document.querySelector("#five").innerHTML.split('"')[1] == document.querySelector("#three").innerHTML.split('"')[1])
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
    document.getElementById("undo").disabled = false;
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
    {
        console.log("winner");
        if(turn == 1)
        {
            console.log(document.querySelector("#PlayerA").innerHTML.split("<")[0]);
            var name = document.querySelector("#PlayerA").innerHTML.split("<")[0];
            document.querySelector("#PlayerA").innerHTML = name + " is Winner";
        }
        else
        {
            console.log(document.querySelector("#PlayerB").innerHTML.split("<")[0]);
            var name = document.querySelector("#PlayerB").innerHTML.split("<")[0];
            document.querySelector("#PlayerA").innerHTML = name + " is Winner";
        }
        
        document.querySelector("#PlayerB").innerHTML = "";
        document.querySelector("#PlayerA").classList.remove("active");
        document.querySelector("#PlayerA").classList.remove("players");
        document.querySelector("#PlayerA").classList.add("winner");
    }
    else if(winner == -1)
    {
        console.log("Draw");
        document.querySelector("#PlayerA").innerHTML = "Match Draw  ";
        document.querySelector("#PlayerB").innerHTML = "";
        document.querySelector("#PlayerA").classList.remove("active");
        document.querySelector("#PlayerA").classList.remove("players");
        document.querySelector("#PlayerA").classList.add("winner");

    }
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
        document.getElementById("undo").disabled = true;
    }
})
