/*$.getJSON("topSpots.json", function(topSpotsData) {
	var item = [];
	$.each(topSpotsData, function(key, val) {
		var row = [];
		$.each(val, function(objKey, objVal) {
			if(objKey === "location") {
				var map = "<a href='https://www.google.com/maps?q=" 
					+ val.location[0] + "," + val.location[1] + 
					"' class='btn btn-primary'>Open in Google Maps</a>"
				row.push("<td>" + map + "</td>");
			}
			else {
				row.push("<td>" + objVal + "</td>");
			}

		});
		var completeRow = row.join("");
		item.push("<tr>" + completeRow + "</tr>");
	});
	
	$( "<tbody/>", {
	    "class": "toDoList",
	    html: item.join( "" )
	  }).appendTo( "table" );

});*/

$.getJSON("topSpots.json", function(topSpotsData){
	$.each(topSpotsData, function(key, val) {
		var topSpotsName = val.name;
		var topSpotsDescription = val.description;
		var map = "<a href='https://www.google.com/maps?q=" 
				+ val.location[0] + "," + val.location[1] + 
				"' class='btn btn-primary'>Open in Google Maps</a>"
		$("#topSpotsTable").append("<tr><td>" + topSpotsName + "</td><td>" + topSpotsDescription + "</td><td>" + map + "</td></tr>");
				
	});

});
/*each topSpotsData
$('#here_table').append( '<tr><td>' + 'result' +  i + '</td></tr>' );
*/
