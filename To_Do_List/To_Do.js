let input_box = document.getElementById("input_box");
let btn = document.getElementById("btn");
let list = document.getElementsByClassName("list");
let ul=document.querySelector("ul");
function addtext(){
    if (input_box.value===""){
       alert("You Can Right Somthing");
    
    }
    else{
        let item=document.createElement("li");
        item.innerHTML=input_box.value;
        ul.appendChild(item);

        let span=document.createElement("span");
        span.innerHTML="\u00d7"
       item.appendChild(span)
    }
input_box.value="";
}
ul.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("chacked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false)