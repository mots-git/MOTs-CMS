var x=0;
var resultsDiv=document.getElementById("results");
var resultsLevel1Div=document.getElementById("level1");
var resultsLevel2Div=document.getElementById("level2");
var level1Result = "";
var level2Result = "";
var level3Result = "";
var level4Result = "";
var changeResult = false;

function add_results_Level1(o) {
	level1Result = o.innerHTML;
	if(level1Result.includes("Claim")){
		document.getElementById("level1-results-yes").innerHTML = "Request Type: Claim";
		document.getElementById("level2-results-yes").innerHTML ="Page URL:";
		document.getElementById("level3-results-yes").innerHTML = "Member URL that wished to be admin:";
		document.getElementById("level4-results-yes").innerHTML="Page Claim request date (If applicable): ";		
		document.getElementById("lvl_results_no").style.display="none";
		document.getElementById("lvl_results_yes").style.display="block";
		document.getElementById("claim-description").style.display="block";
		document.getElementById("claim-description2").style.display="block";
		document.getElementById("answerline1").style.display="none";
		document.getElementById("answerline2").innerHTML = "If this doesn't help please copy the following and open a case";
		document.getElementById("lvl_2").style.display="none";
		document.getElementById("assets-copy-image-yes").style.marginTop="78px";
		level1Result = document.getElementById("level1-results-yes").innerHTML;
		level2Result = document.getElementById("level2-results-yes").innerHTML;
		level3Result = document.getElementById("level3-results-yes").innerHTML;
		level4Result = document.getElementById("level4-results-yes").innerHTML;
	}
}
function add_results_Level2(o) {
	level2Result = o.innerHTML;
	if(level1Result.includes("Deactivate")){
		if(level2Result.includes("More than 100")){
			document.getElementById("level1-results-no").innerHTML = "Request Type: Deactivate page request";
			document.getElementById("level2-results-no").innerHTML = "Employee count: Over 100";
			document.getElementById("lvl_results_yes").style.display="none";
			document.getElementById("lvl_results_no").style.display="block";
			document.getElementById("answerline1").innerHTML = "We cannot deactivate this page as there are more than 100 employees associated to it";
			document.getElementById("assets-copy-image-no").style.marginTop="18px";
			level1Result = document.getElementById("level1-results-no").innerHTML;
			level2Result = document.getElementById("level2-results-no").innerHTML;
			level3Result = document.getElementById("level3-results-no").innerHTML;
			level4Result = document.getElementById("level4-results-no").innerHTML;
		}
		else if(level2Result.includes("Less than 100")){
			document.getElementById("answerline1").innerHTML = "Based on your inputs you should be able to deactivate the page via self service";
			document.getElementById("answerline2").innerHTML = "Please feel free to copy the below into a case if you have further queries";
			document.getElementById("answerline3").style.display="block";
			document.getElementById("level1-results-yes").innerHTML = "Employees: " + level2Result;
			document.getElementById("level2-results-yes").innerHTML = "Solution: " + "Self Service";
			document.getElementById("level3-results-yes").style.display="none";
			document.getElementById("level4-results-yes").style.display="none";
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";
			document.getElementById("assets-copy-image-yes").style.marginTop="48px";
			level1Result = document.getElementById("level1-results-yes").innerHTML;
			level2Result = document.getElementById("level2-results-yes").innerHTML;
			level3Result = document.getElementById("level3-results-yes").innerHTML;
			level4Result = document.getElementById("level4-results-yes").innerHTML;
		}
	}
}

function redirectAddAdmin(){
	document.getElementById("claim-description").style.display="none";
	document.getElementById("claim-description2").style.display="none";
	document.getElementById("answerline1").style.display="block";
	document.getElementById("answerline1").innerHTML = "Based on your inputs we should be able to add the admin to the page for you, please copy the below into your case along with confirmation email from client requesting to be added as an admin";
	document.getElementById("answerline2").innerHTML = "Please feel free to copy the below into a case";
	document.getElementById("boxTitle").innerHTML = "Add Admin";
	document.getElementById("level1-results-yes").innerHTML = "Request Type: Add Admin to Page";
	document.getElementById("level2-results-yes").innerHTML ="Member URL:";
	document.getElementById("level3-results-yes").innerHTML ="Page URL:";
	document.getElementById("level4-results-yes").style.display="none";
	document.getElementById("assets-copy-image-yes").style.marginTop="48px";
	level1Result = document.getElementById("level1-results-yes").innerHTML;
	level2Result = document.getElementById("level2-results-yes").innerHTML;
	level3Result = document.getElementById("level3-results-yes").innerHTML;
	level4Result = document.getElementById("level4-results-yes").innerHTML;
}

function switch_fun(){
	switch(x){
		case 0:
    	// code block
    	document.getElementById("lvl_1").style.display="block";
    	document.getElementById("lvl_2").style.display="none";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
    	console.log(x);
    	break;
  		case 1:
    	// code block
    	document.getElementById("lvl_1").style.display="none";
    	document.getElementById("lvl_2").style.display="block";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
    	console.log(x);
    	break;
  		case 2:
    	// code block
    	document.getElementById("lvl_1").style.display="none";
    	document.getElementById("lvl_2").style.display="none";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
		
		console.log("check value "+changeResult)
		if(changeResult == false){
		document.getElementById("lvl_results_yes").style.display="none";
			document.getElementById("lvl_results_no").style.display="block";			
			console.log(changeResult)
		}
		if(changeResult == true){
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";			
			console.log(changeResult)
		}
		console.log(x);
		//console.log(level1Result + level2Result + level3Result);
	}
}

function logic_fun() {
	x+=1;
	switch_fun();
}

function reduce_x(){
	if (x>0){
		x-=1;
		switch_fun();}
}
let saveFile = () => {
        // This variable stores all the data.
		let data;
		var solution;

		data = 
				level1Result + ' \r\n ' + 
				level2Result + ' \r\n ' + 
				level3Result + ' \r\n ' + 
				level4Result;

        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'CaseData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();

		/* Get the text field */
		var resultsText = level1Result + " " + level2Result + " " + level3Result + " " + " " + level4Result;
		  
		   /* Copy the text inside the text field */
		  navigator.clipboard.writeText(resultsText);

		  /* Alert the copied text */
		  alert("Case Details Copied and Downloaded");		
}