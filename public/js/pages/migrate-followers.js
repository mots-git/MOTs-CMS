var level=1;
var finished=false;
var questionText=document.getElementById("q1");
var level1Result = "";
var level2Result = "";

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
	if(level1Result.includes("Yes")){
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_no").style.display = "block";
		document.getElementById("level1-results-no").innerHTML = "Expected Source page URL:";
		document.getElementById("level2-results-no").innerHTML = "Expected Destination page URL:";
		document.getElementById("assets-copy-image-no").style.marginTop = "49px";
		level1Result = document.getElementById("level1-results-no").innerHTML;
		level2Result = document.getElementById("level2-results-no").innerHTML;
	}
	else if(level1Result.includes("No")){
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_yes").style.display = "block";
		document.getElementById("level1-results-yes").innerHTML = "Expected Source page URL:";
		document.getElementById("level2-results-yes").innerHTML = "Expected Destination page URL:";	
		document.getElementById("assets-copy-image-yes").style.marginTop = "49px";
		level1Result = document.getElementById("level1-results-yes").innerHTML;
		level2Result = document.getElementById("level2-results-yes").innerHTML;
	}
}
let saveFile = () => {
        // This variable stores all the data.
		
        let data = 
			'Request Type: Migrate Followers' + ' \r\n ' + 
            level1Result + ' \r\n ' + 
            level2Result;
        
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
		var resultsText = "Request Type: Migrate Followers " + level1Result + " " + level2Result;
		  
		   /* Copy the text inside the text field */
		  navigator.clipboard.writeText(resultsText);

		  /* Alert the copied text */
		  alert("Case Details Copied and Downloaded");		
}