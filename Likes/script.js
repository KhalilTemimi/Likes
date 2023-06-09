// var count1 = 9;
// var countElement1=document.querySelector("#nbrLikes1");

// function increment1(){
//     count1++;
//     countElement1.innerText= count1+"Like(s)";
// }
// var count2 = 12;
// var countElement2=document.querySelector("#nbrLikes2");

// function increment2(){
//     count2++;
//     countElement2.innerText= count2+"Like(s)";
// }
// var count3 = 9;
// var countElement3=document.querySelector("#nbrLikes3");

// function increment3(){
//     count3++;
//     countElement3.innerText= count3+"Like(s)";
// }
var count=[9,12,9];
var countelement=[
    document.querySelector("#nbrLikes1"),
    document.querySelector("#nbrLikes2"),
    document.querySelector("#nbrLikes3"),
];
console.log(countelement);

function increment(id){
    count[id]++;
    countelement[id].innerText=count[id]+"Like(s)";
}