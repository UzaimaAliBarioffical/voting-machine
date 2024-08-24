let userInput =document.getElementById("user-Input");
let friendList =document.getElementById("list-item");
// console.log(userInput,friendList);
let sNo =1
function addfriendvote(){
if (userInput.value===""){
    alert("Enter your Name")

}else{
    let createli =document.createElement("li");
    console.log(createli);
    createli.innerHTML= sNo++  + " " + userInput.value;
    friendList.appendChild(createli);
 //increment
 let add = 0;
 let createspan = document.createElement("span");
createspan.innerHTML = "(0)";
 createli.appendChild(createspan);
 createli.addEventListener("click", function () {
     add++;
     createspan.innerHTML = `( ${add} )`;
 });

}
userInput.value=""
}

