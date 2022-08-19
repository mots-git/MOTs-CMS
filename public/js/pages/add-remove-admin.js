var level=1;
var finished=false;
var questionText=document.getElementById("q1");
var level1Result = "";
var level2Result = "";
var level3Result = "";

function copyFunction() {
  /* Get the text field */
  var copyText = document.getElementById("results").innerHTML;
  
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  alert("Copied text: " + copyText);
}

function add_results_Level1(o) {
	level1Result = o.innerHTML;
	questionText=document.getElementById("q1").textContent;
	console.log(level1Result);
	if(level1Result.includes("Removing") && level==1){
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_yes").style.display = "block";
		document.getElementById("resultsDisplay").style.display = "none";	
		document.getElementById("answerline1").innerHTML = "Please open a case and provide confirmation email provided by an admin of the Page, this should explicitly list who is requesting the removal and their relationship to the page";
		document.getElementById("resultReason-yes").style.display = "none";
		document.getElementById("level1-results-yes").innerHTML = "Confirmation email provided by an admin of the Page, this should explicitly list who is requesting the removal and their relationship to the Page";
		document.getElementById("level2-results-yes").innerHTML = "Please feel free to raise a ticket below";
		document.getElementById("assets-copy-image-yes").style.marginTop = "88px";
		level1Result = document.getElementById("level1-results-yes").innerHTML;
		level2Result = document.getElementById("level2-results-yes").innerHTML;
		level3Result = document.getElementById("level3-results-yes").innerHTML;
	}
	else if(level1Result.includes("Adding") && level==1){
		level=2;
		document.getElementById("level3").style.display="inline";
		document.getElementById("level1").innerHTML = "Yes";
		document.getElementById("level2").innerHTML = "No";
		document.getElementById("level3").innerHTML = "N/A";
		document.getElementById("q1").innerHTML = "Has the member submitted a page admin request and waited 7 days?";
	}
	else if(level1Result.includes("Yes") && level==2){
		level=3;
		document.getElementById("level3").style.display="none";
		document.getElementById("q1").innerHTML = "Is the member in fact an employee at the company? (Verified email/corroboration on external website etc)";
	}
	else if(level1Result.includes("No") && level==2){
		level=3;
		document.getElementById("level3").style.display="none";
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_yes").style.display = "block";
		document.getElementById("answerline1").style.display = "none";
		document.getElementById("answerline1-yes-no").style.display = "block";
		document.getElementById("resultsDisplay").style.display = "none";	
		document.getElementById("resultReason-yes").style.display = "none";
		document.getElementById("assets-copy-image-yes").style.marginTop = "68px";
	}
	else if(level1Result.includes("N/A") && level==2){
		level=3;
		document.getElementById("level3").style.display="none";
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_yes").style.display = "block";
		document.getElementById("answerline1").innerHTML = "We need more information to process this request";
		document.getElementById("resultReason-yes").innerHTML = "Please copy the below along with any correspondence from the client requesting access to the Page into a case";
		document.getElementById("level1-results-yes").innerHTML = "Request Type: Add Admin to Page";
		document.getElementById("level2-results-yes").innerHTML = "Member URL:";
		document.getElementById("level3-results-yes").innerHTML = "Page URL:";
		document.getElementById("assets-copy-image-yes").style.marginTop = "48px";
		level1Result = document.getElementById("level1-results-yes").innerHTML;
		level2Result = document.getElementById("level2-results-yes").innerHTML;
		level3Result = document.getElementById("level3-results-yes").innerHTML;
	}
	else if(level1Result.includes("Yes") && level==3){
		level=4;//
		document.getElementById("level3").style.display="none";
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_yes").style.display = "block";
		document.getElementById("answerline1").innerHTML = "Based on your inputs we should be able to add the admin to the page for you, please copy the below into your case along with confirmation email from client requesting to be added as an admin";
		document.getElementById("level1-results-yes").innerHTML = "Request Type: Add Admin to Page";
		document.getElementById("level2-results-yes").innerHTML = "Member URL:";
		document.getElementById("level3-results-yes").innerHTML = "Page URL:";
		document.getElementById("assets-copy-image-yes").style.marginTop = "48px";
		level1Result = document.getElementById("level1-results-yes").innerHTML;
		level2Result = document.getElementById("level2-results-yes").innerHTML;
		level3Result = document.getElementById("level3-results-yes").innerHTML;
	}
	else if(level1Result.includes("No") && level==3){
		level=4;		
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_no").style.display = "block";
		document.getElementById("level1-results-no").innerHTML = "We cannot ad this member as an admin";
		document.getElementById("level2-results-no").innerHTML = "Please feel free to raise a ticket below";
		document.getElementById("assets-copy-image-no").style.marginTop = "49px";
		level1Result = document.getElementById("level1-results-no").innerHTML;
		level2Result = document.getElementById("level2-results-no").innerHTML;
		level3Result = document.getElementById("level3-results-no").innerHTML;
	}
}
let saveFile = () => {
        // This variable stores all the data.
        let data = 
			level1Result + ' \r\n ' + 
            level2Result + ' \r\n ' + 
            level3Result;
        
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
		var resultsText = level1Result + " " + level2Result + " " + level3Result;
		  
		   /* Copy the text inside the text field */
		  navigator.clipboard.writeText(resultsText);

		  /* Alert the copied text */
		  alert("Case Details Copied and Downloaded");		
}