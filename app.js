
// let friends =[]
// function addFriends(){
// let userInput = document.getElementById("user-Input").value
// for(let i =0 ; i,friends.length;i++){
//     let friend =friends[i]
// console.log(userInput[0]);

    
// }

// console.log(userInput);

// friends.push(userInput)
// console.log(friends);

// }   
// let students =document.getElementById("user-Input")
// let ulForcourses = document.createElement("ul");
// for (let j = 0; j < students.courses.length; j++) {
//     // console.log(j);
//     let courseList = document.createElement("li");
//     //  console.log(courseList);
//     courseList.innerHTML = "courses :" + " " + students.courses[j];
//     //  console.log(courseList);
//     mainDiv.appendChild(courseList);}

// function addFriends(){
// let userInput =document.getElementById("user-Input").value
// // console.log(userInput);
// let arr=[userInput [i]]
// }



function addFriends(){
let userInput=document.getElementById("user-Input");
// console.log(userInput);
let votingFriends= document.getElementById("Voting-place");
// console.log(votingFriends);
let count = 0;
let sNo =1;

if(userInput.value.trim()!==""){
    let creatLi =document.createElement("li");
//creatLi.style.textDecoration="none"
    creatLi.textContent= sNo++  + " " +userInput.value + " "  +  ("0");

    creatLi.count =count;
    console.log(creatLi);
    // console.log(creatLi);
// Incremant
creatLi.addEventListener("click",function(){
    let add= +(this.count);
    add++;
this.count =add ;
creatLi.innerHTML = add;

});
// console.log(creatLi);
votingFriends.appendChild(creatLi)
userInput.value=""
}



}