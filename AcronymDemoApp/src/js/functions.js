 document.getElementById("searchButton").addEventListener("click", buttonHandler);

 // button handler
 function buttonHandler() {
    	var acronym = document.getElementById("acronymInput").value;
	lookupAcronym(acronym);
}

 // function to look up for acronym's def
function lookupAcronym(acronym) {
	if (acronym)  {
	    	var xmlhttp = new XMLHttpRequest();
	    	var url = "src/fakedAcronyms.JSON";
        	xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var arr = JSON.parse(xmlhttp.responseText);
        	    		document.getElementById("result").innerHTML = arr[acronym];
        	    		console.log(acronym + " is " + def);
			}
   		};
	    	xmlhttp.open("GET", url, true);
	    	xmlhttp.send();
	}
}
