function getFormvalue() {
    //Write your code here
	//using getElementById
	/*
	var first=document.getElementById("fname").value;
	var last= document.getElementById("lname").value;
	var fullName=first+" "+last;
	alert(fullName);
	*/

	//using queryselector which will return the node list
	const inputs=document.querySelectorAll("input");
	let first=inputs[0].value;
	let last=inputs[1].value;
	let fullname=first+" "+last;
	alert(fullname);
	

	
	

}
