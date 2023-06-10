// document.querySelector("button").addEventListener("click",touch);

// function touch(){
//     // alert(" i am clicked!");
//     var audiodrum1=new Audio("sounds/crash.mp3") ;
//     audiodrum1.play();
//     this.style.color="purple";
// }

// document.getElementsByTagName("button")[1].addEventListener("click",AfterClick);
// document.getElementsByTagName("button")[2].addEventListener("click",AfterClick);
// document.getElementsByTagName("button")[3].addEventListener("click",AfterClick);
// document.getElementsByTagName("button")[4].addEventListener("click",AfterClick);
// document.getElementsByTagName("button")[5].addEventListener("click",AfterClick);//also possible by loop method
// document.getElementsByTagName("button")[6].addEventListener("click",AfterClick);

// function AfterClick(){

//     alert("i am clicked");
// }



//listen click on buttons
var DrumsLength=document.querySelectorAll(".drum").length;
for(var i=0;i<DrumsLength;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",touch);

function touch(){
    
    var ButtonInnerHtml=this.innerHTML;
    this.style.color="blue";
    KeySound(ButtonInnerHtml)
    ButtonAnimation(ButtonInnerHtml)
    
    }
}

//listen keyboard keys

document.addEventListener("keydown",function(event){

KeySound(event.key)
ButtonAnimation(event.key)
});

function KeySound(key){

    switch(key){
                                                                     
        case"w":
        var audiodrum1=new Audio("sounds/crash.mp3") ;
        audiodrum1.play();
        // this.style.color="purple";
        break;

        case"a":
        var audiodrum2=new Audio("sounds/kick-bass.mp3") ;
        audiodrum2.play();
        // this.style.color="yellow";
        break;

        case"s":
        var audiodrum3=new Audio("sounds/snare.mp3") ;
        audiodrum3.play();
        // this.style.color="blue";
        break;

        case"d":
        var audiodrum4=new Audio("sounds/tom-1.mp3") ;
        audiodrum4.play();
        // this.style.color="green";
        break;

        case"j":
        var audiodrum5=new Audio("sounds/tom-2.mp3") ;
        audiodrum5.play();
        // this.style.color="pink";
        break;

        case"k":
        var audiodrum6=new Audio("sounds/tom-3.mp3") ;
        audiodrum6.play();
        // this.style.color="orange";
        break;

        case"l":
        var audiodrum7=new Audio("sounds/tom-4.mp3") ;
        audiodrum7.play();
        // this.style.color="red";
        break;

        default:var audiodrum1=new Audio("sounds/sorry-what.mp3") ;
        audiodrum1.play();
}
}


function ButtonAnimation(ClickKey){
   var DotKey= document.querySelector("."+ClickKey)
   DotKey.classList.add("pressed");



    setTimeout(function(){
        DotKey.classList.remove("pressed");
    },100)
}