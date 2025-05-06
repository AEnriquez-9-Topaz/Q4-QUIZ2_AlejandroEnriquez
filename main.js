function Checkgrade() {

	// If-else statement
	let factor1 = parseInt(document.getElementById('grade1').value);
	let factor2 = parseInt(document.getElementById('grade2').value);
	let factor3 = parseInt(document.getElementById('grade3').value);

	let finalaverage = Math.round((factor1 + factor2 + factor3)/3);


	if (finalaverage > 93.99)
		window.alert('Your grade is Excellent');
	else if (finalaverage >86.99)
		window.alert("Your grade is Above Satisfactory ");
	else if (finalaverage >79.99)
		window.alert("Your grade is Satisfactory");
	else if (finalaverage >74.99)
		window.alert("Your grade Needs Improvement");
	else 
		window.alert("You have Failed");
		
}

	
