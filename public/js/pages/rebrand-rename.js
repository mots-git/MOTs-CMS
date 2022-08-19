var x=0;
var resultsDiv=document.getElementById("results");
var resultsLevel1Div=document.getElementById("level1");
var resultsLevel2Div=document.getElementById("level2");
var resultsLevel3Div=document.getElementById("level3");
var level1Result = "";
var level2Result = "";
var level3Result = "";
var level4Result = "";
var changeResult = false;

function copyFunction() {
  /* Get the text field */
  var copyText = document.getElementById("results").innerHTML;
  
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  alert("Copied text: " + copyText);
}

function AcquisitionYes(){
	document.getElementById("lvl_3").style.display="none";
	document.getElementById("lvl_results_no").style.display="block";
	document.getElementById("lvl_results_yes").style.display="none";
	document.getElementById("answerline1").innerHTML = "Based on your inputs it is unlikely that we can process this Rebrand, however please continue to open a case and copy the following into it";
	document.getElementById("answerline2").innerHTML = "However please continue to open a case and copy the following into it";
	document.getElementById("level1-results-no").innerHTML = "Number of employees: More than 500";
	document.getElementById("level2-results-no").innerHTML = "Severity of change: Minor change";
	document.getElementById("level3-results-no").innerHTML = "Acquisition yes and Page URL the client wishes to rebrand:";
	level1Result = document.getElementById("level1-results-no").innerHTML;
	level2Result = document.getElementById("level2-results-no").innerHTML;
	level3Result = document.getElementById("level3-results-no").innerHTML;
	level4Result = document.getElementById("level4-results-no").innerHTML;
}

function AcquisitionNo(){
	document.getElementById("lvl_3").style.display="none";
	document.getElementById("lvl_results_no").style.display="none";
	document.getElementById("lvl_results_yes").style.display="block";
	document.getElementById("answerline1").innerHTML = "Based on your inputs we should be able to process this request";
	document.getElementById("answerline2").innerHTML = "Please continue to open a case and copy the following into it";
	document.getElementById("level1-results-yes").innerHTML = "Number of employees: More than 500";
	document.getElementById("level2-results-yes").innerHTML = "Severity of change: Minor change";
	document.getElementById("level3-results-yes").innerHTML = "Page URL the client wishes to rebrand:";
	document.getElementById("level4-results-yes").innerHTML = "Acquisition no and New Company name:";
	document.getElementById("assets-copy-image-yes").style.marginTop = "108px";
	level1Result = document.getElementById("level1-results-yes").innerHTML;
	level2Result = document.getElementById("level2-results-yes").innerHTML;
	level3Result = document.getElementById("level3-results-yes").innerHTML;
	level4Result = document.getElementById("level4-results-yes").innerHTML;
}

function add_results_Level1(o) {
	level1Result = o.innerHTML;
}
function add_results_Level2(o) {
	level2Result = o.innerHTML;
	level3Result = o.innerHTML;
	
	if(level1Result.includes("More than 500") &&
		level2Result.includes("Significant change")){
			document.getElementById("lvl_results_no").style.display="block";
			document.getElementById("lvl_results_yes").style.display="none";
			document.getElementById("answerline1").innerHTML = "Based on your inputs it is unlikely that we can process this Rebrand, however please continue to open a case and copy the following into it";
			document.getElementById("answerline2").innerHTML = "However please continue to open a case and copy the following into it";
			document.getElementById("level1-results-no").innerHTML = "Number of employees: More than 500";
			document.getElementById("level2-results-no").innerHTML = "Severity of change: Significant change";
			document.getElementById("level3-results-no").innerHTML = "Page URL the client wishes to rebrand:";
			level1Result = document.getElementById("level1-results-no").innerHTML;
			level2Result = document.getElementById("level2-results-no").innerHTML;
			level3Result = document.getElementById("level3-results-no").innerHTML;
			level4Result = document.getElementById("level4-results-no").innerHTML;
	}
	else if(level1Result.includes("More than 500") &&
		level2Result.includes("Minor change")){
			document.getElementById("lvl_3").style.display="block";
			
	}
	else if(level1Result.includes("Less than 500")){
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";
			document.getElementById("answerline1").innerHTML = "If the Client's page has less than 500 employees then they can self service a rebrand, more info here";
			document.getElementById("answerline2").innerHTML = "Please continue to open a case and copy the following into it";
			document.getElementById("level1-results-yes").innerHTML = "Number of employees: More than 500";
			document.getElementById("level2-results-yes").innerHTML = "Severity of change: Minor change";
			document.getElementById("level3-results-yes").innerHTML = "Page URL the client wishes to rebrand:";
			document.getElementById("level4-results-yes").innerHTML = "New Company name:";
			document.getElementById("assets-copy-image-yes").style.marginTop = "110px";
			level1Result = document.getElementById("level1-results-yes").innerHTML;
			level2Result = document.getElementById("level2-results-yes").innerHTML;
			level3Result = document.getElementById("level3-results-yes").innerHTML;
			level4Result = document.getElementById("level4-results-yes").innerHTML;
	}
}
function add_results_Level3(o) {
	
}

function LessThan500(){
	document.getElementById("lvl_1").style.display="none";
    document.getElementById("lvl_2").style.display="none";
	document.getElementById("lvl_results_no").style.display="none";
	document.getElementById("lvl_results_yes").style.display="block";
	document.getElementById("answerline1").innerHTML = "If the Client's page has less than 500 employees then they can self service a rebrand";
	document.getElementById("answerline2").innerHTML = "If you need more further help please open a case below";
	document.getElementById("level1-results-yes").innerHTML = "Number of employees: More than 500";
	document.getElementById("level2-results-yes").innerHTML = "Severity of change: Minor change";
	document.getElementById("level3-results-yes").innerHTML = "Page URL the client wishes to rebrand:";
	document.getElementById("level4-results-yes").innerHTML = "New Company name:";
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
    	//document.getElementById("lvl_3").style.display="none";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
    	console.log(x);
    	break;
  		case 1:
    	// code block
    	document.getElementById("lvl_1").style.display="none";
    	document.getElementById("lvl_2").style.display="block";
    	//document.getElementById("lvl_3").style.display="none";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
    	console.log(x);
    	break;
  		case 2:
    	// code block
		document.getElementById("lvl_1").style.display="none";
    	document.getElementById("lvl_2").style.display="none";
		console.log("check value "+changeResult)
		console.log(x);
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
        let data = 
			'Request Type: Rebrand' + ' \r\n ' + 
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
		var resultsText = 'Request Type: Rebrand ' + level1Result + " " + level2Result + " " + level3Result + " " + level4Result;
		  
		   /* Copy the text inside the text field */
		  navigator.clipboard.writeText(resultsText);

		  /* Alert the copied text */
		  alert("Case Details Copied and Downloaded");		
}