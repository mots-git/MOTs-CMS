var x=0;
var resultsDiv=document.getElementById("results");
var resultsLevel1Div=document.getElementById("level1");
var resultsLevel2Div=document.getElementById("level2");
var resultsLevel3Div=document.getElementById("level3");
var level1Result = "";
var level2Result = "";
var level3Result = "";
var changeResult = false;

let saveFile = () => {

        // This variable stores all the data.
        level1Result = document.getElementById("level1-results-no").innerHTML;
		level2Result = document.getElementById("level2-results-no").innerHTML;

        let data = 
			'Request Type: De-Affiliations' + ' \r\n ' + 
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
		var resultsText = "Request Type: De-Affiliations " + level1Result + " " + level2Result;
		  
		   /* Copy the text inside the text field */
		  navigator.clipboard.writeText(resultsText);

		  /* Alert the copied text */
		  alert("Case Details Copied and Downloaded");		
}