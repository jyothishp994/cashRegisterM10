var btn=document.querySelector("#checkBtn");
var nxtbtn=document.querySelector("#nextBtn");
var errorMsgVar=document.querySelector(".errorMsg");
var billAmtvar=document.querySelector("#billAmt");
var changeReturnvar=document.querySelector(".changeReturn");


btn.addEventListener("click", newFunc );
nxtbtn.addEventListener("click",nextShow);
var cashGivenVar=document.querySelector(".cashGivenInput")

function showResult()
{
    console.log("clicked")
    changeReturnvar.style.display = "block";
}
function nextShow(){
    if(billAmtvar.value>0){
        cashGivenVar.style.display = "block";
    }
}

function valueReset(){
    var i=0;
    outputTxt= document.querySelectorAll('.noOfNotes');
    var errorMsgVar=document.querySelector(".errorMsg");
    //outputTxt.innerText=1;
    console.log(outputTxt);
    [].forEach.call(outputTxt, function(div) {
  // do whatever
  console.log(div);
  div.innerText=0;
  i=i+1;
});

 errorMsgVar.innerText='';
}
function newFunc(){

var outputTxt;
var billAmtVar=document.querySelector("#billAmt");
var cashGivenVar=document.querySelector("#cashGiven");

var bal=cashGivenVar.value- billAmtVar.value;
var errorMsg;
var notes=[2000,500,100,20,10,5,1];
var notes_num=[];
var temp,notes_bal,count=1,rem_bal;
valueReset();
if (bal<0)
{

 errorMsg='Insufficient money, please pay '+ -1*bal + 'Rs more';
 console.log(errorMsg);
 errorMsgVar.innerText=errorMsg;
}
else if(bal==0){
    console.log('Sufficient Amount');
    errorMsgVar.innerText='Sufficient Amount'
}
else{

console.log('Calculating balance amount'+bal);
rem_bal=bal;
notes_bal=0;
notes.forEach(element => 
{   
    notes_bal=Math.floor(rem_bal/element);
    notes_num.push(notes_bal);
    rem_bal=rem_bal-(notes_bal*element);  
}

);
var i=0;
    outputTxt= document.querySelectorAll('.noOfNotes');
    //outputTxt.innerText=1;
    console.log(outputTxt);
    [].forEach.call(outputTxt, function(div) {
  // do whatever
  console.log(div);
  div.innerText=notes_num[i];
  i=i+1;
});


console.log(notes);
console.log(notes_num);
showResult();
}

};
