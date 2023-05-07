//your code here
let arr=[4, 2, 7, 6, 9];

function sortArr(arr){
	arr.sort((a,b)=>a-b);
	return arr;
}
fucntion minimumCost(){
	let sum=0,elmt;

	for(let i=0;i<arr.length;i++){
		for(let j=0;j<2;j++){
			sortArr(arr);
			sum+=arr[0]+arr[1];
			elmt=arr[0]+arr[1];

			arr.splice(0,2,elmt);
		}
		
	}
}
let cost=minimumCost(arr);
console.log(cost)