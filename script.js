 

//your code here
let form=document.getElementById("form");
let input=document.getElementById("input");
let submit=document.getElementById("submit")
 

 
function minimumCost(event){
    event.preventDefault();
	let sum=0,elmt;
let arr=input.value.split(",").map(Number);
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<2;j++){
			arr.sort((a,b)=>a-b);
			sum+=arr[0]+arr[1];
			elmt=arr[0]+arr[1];

			arr.splice(0,2,elmt);
		}
		
	}
    let div=document.getElementById("result")
    let result=document.createElement("p")
    div.appendChild(result);
    result.innerText=sum;
     
}
 input.addEventListener("keyup",()=>{
    arr=input.value.split(",").map(Number);
 })
form.addEventListener("submit",minimumCost);