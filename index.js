$.getJSON( "topspots.json", function( topSpotsData ) {
  
	
	var items = [];

	console.log(topSpotsData);
	$.each( topSpotsData, function( key, val ) {

		var row = [];
		$.each(val, function( objKey, objVal) {	
			if(objKey === "location") {
				var map = "<a href='https://www.google.com/maps?q=" 
					+ val.location[0] + "," + val.location[1] + 
					"' class='btn btn-primary'>Open in Google Maps</a>";
				row.push("<td>" + map + "</td>")
			}
			else {
				row.push("<td>" + objVal + "</td>");
			}
		});
		var rowString = row.join("");

		items.push( "<tr id='toDo" + key + "'>" + rowString + "</tr>" );
	});

	$( "<tbody/>", {
	    "class": "toDoList",
	    html: items.join( "" )
	  }).appendTo( "table" );
	  
});
