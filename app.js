
var content="X"
var overall=document.querySelectorAll(".cell");
var count=0;
var winner={
    value:"draw"
}

function change(){

    overall.forEach(element => {
        if(element.innerHTML==""){
            if(content=="X")
                element.setAttribute('data',"X");
            else
                element.setAttribute('data',"O");
        }
    }); 
}

function goto(ele){
    var tag=document.querySelector("#"+ele);
    if(tag.innerHTML==""){
        count++;
        tag.innerHTML=content;
        if(content=="X"){
            var audio=new Audio('xsound.mp3');
            audio.play();
        }
        else{
            var audio=new Audio('osound.mp3');
            audio.play();

        }
        tag.classList.add("bright");
        tag.setAttribute('data',"");  
        tag.getAttribute('data')
        swap();
        change();
        if(count>3){
            checkwinner();
        }
    }
    
}

function swap(){
    if(content==""||content=="O"){
        content="X";
    }
    else{
        content="O";
    }
}

function declare(){
    var ele=document.querySelector(".message");
    if(winner.value=="X")
    document.querySelector("#unique").innerHTML="X Wins !";
    else if(winner.value=="O")
    document.querySelector("#unique").innerHTML="O Wins !";
    else
    document.querySelector("#unique").innerHTML="Draw !";
    ele.classList.add("show");
}


function checkwinner(){
    if(horizontal()){
        declare();
    }
    else if(vertical()){
        declare();
    }
    else if(diagonal()){
        declare();
    }
    if(count>=9)
    declare();
}

function horizontal(){
    var check=document.querySelectorAll(".cell");
    if(check[0].innerHTML==check[1].innerHTML && check[1].innerHTML==check[2].innerHTML&&check[0].innerHTML!=""){
        winner.value=check[0].innerHTML;
        return true;
    }
    if(check[3].innerHTML==check[4].innerHTML && check[4].innerHTML==check[5].innerHTML&&check[5].innerHTML!=""){
        winner.value=check[3].innerHTML;
        return true;
    }
    if(check[6].innerHTML==check[7].innerHTML && check[7].innerHTML==check[8].innerHTML&&check[8].innerHTML!=""){
        winner.value=check[6].innerHTML;
        return true;
    }
    return false;
}
function vertical(){
    var check=document.querySelectorAll(".cell");
    if(check[0].innerHTML==check[3].innerHTML && check[3].innerHTML==check[6].innerHTML&&check[6].innerHTML!=""){
        winner.value=check[0].innerHTML;
        return true;
    }
    if(check[1].innerHTML==check[4].innerHTML && check[4].innerHTML==check[7].innerHTML&&check[7].innerHTML!=""){
        winner.value=check[1].innerHTML;
        return true;
    }
    if(check[2].innerHTML==check[5].innerHTML && check[5].innerHTML==check[8].innerHTML&&check[8].innerHTML!=""){
        winner.value=check[2].innerHTML;
        return true;
    }
    return false;
}
function diagonal(){
    var check=document.querySelectorAll(".cell");
    if(check[0].innerHTML==check[4].innerHTML && check[4].innerHTML==check[8].innerHTML&&check[8].innerHTML!=""){
        winner.value=check[0].innerHTML;
        return true;
    }
    if(check[2].innerHTML==check[4].innerHTML && check[4].innerHTML==check[6].innerHTML &&check[6].innerHTML!=""){
        winner.value=check[2].innerHTML;
        return true;
    }
    return false;
}

function remo(){
    document.querySelector(".message").classList.remove("show");
    window.location.reload(true);

}
