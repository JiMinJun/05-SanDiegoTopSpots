$.getJSON(topspots.json, function(topSpotsData) {
	var list = [];
	$.each(topSpotsData, function(key, var) {
		var row = [];
		$.each(var, function(objKey, objVal) {
			if(objKey === "location") {
				var map = "<a href='https://www.google.com/maps?q=" 
					+ val.location[0] + "," + val.location[1] + 
					"' class='btn btn-primary'>Open in Google Maps</a>";
				row.push("<td>" + map + "</td>");	
			}
			else {
				row.push("<td>" + objVal + "</td>");
			}
			var completeRow = row.join("");
			items.push("<tr>" + completeRow + "</tr>");
		})
	})
	$("/tbody"){
		html: items.join("")
	}.appendTo("table");
})