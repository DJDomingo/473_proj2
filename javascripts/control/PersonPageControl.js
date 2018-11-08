//Data (normally would be in server elsewhere)
var studList =[];
studList.push({ln:"Chang", fn:"Jimmy" , crs:["CPSC-323", "CPSC-473"], gpa:[3.2, 3.5], tag:0});
studList.push({ln:"Doe" , fn:"John"   , crs:["MATH-270B", "CPSC-315"], gpa:[2.5, 3.1], tag:1});
studList.push({ln:"Joe" , fn:"Billy"  , crs:["MATH-270B", "CPSC-473", "CPSC-315"], gpa:[3.6, 4.1, 3.7], tag:2});
studList.push({ln:"Doe" , fn:"Charlie", crs:["CPSC-315", "CPSC-323"], gpa:[3.1, 3.9], tag:3});
studList.push({ln:"John", fn:"Jimmy"  , crs:["CPSC-323", "CPSC-473"], gpa:[2.9, 2.8], tag:4});
studList.push({ln:"Doe" , fn:"Page"   , crs:["CPSC-476", "CPSC-440"], gpa:[3.3, 3.3], tag:5});
studList.push({ln:"Chang", fn:"Ina"   , crs:["CPSC-476", "CPSC-440", "CPSC-473"], gpa:[3.3, 3.9, 3.2], tag:6});
//end Data

// Empties tables to allow new entries
function removeElems(){
	document.getElementById("p_studGrade_id").innerHTML = "Grades for Student:";
	var table_node = document.getElementById("table_1");
	var tr_node = document.getElementById("grades_id");
	while(table_node.childElementCount > 1)
	{
		table_node.removeChild(table_node.lastChild);
	}
}

// Displays appropriate info in table
function studInfo(ppl, tag) {
	// Empty table first
	removeElems();
	// Take id tag and slice off front to get index for ppl list
	tag = tag.slice(14);
	// create and display table row with course and gpa for each course taken
	for (i=0; i<ppl[tag].numCourses(); i++)
	{
		document.getElementById("p_studGrade_id").innerHTML = ("Grades for " + ppl[tag].getString() + ":");
		var row_node = document.createElement('tr');
		row_node.id = 'grades_id';
		var crse_node = document.createElement('td');
		var crse_content = document.createTextNode(ppl[tag].getCourse(i));
		var gpa_node = document.createElement('td');
		var gpa_content = document.createTextNode(ppl[tag].getGPA(i));
		crse_node.appendChild(crse_content);
		gpa_node.appendChild(gpa_content);
		document.getElementById('table_1').appendChild(row_node);
		row_node.appendChild(crse_node);
		row_node.appendChild(gpa_node);
	}
}

var createPerson = (function() {

// Use addEventListener to register event handler
	function PersonPageControl() {
		var add_elm = document.getElementById('search_person_id');

		// define the event handler for Add button
		add_elm.addEventListener('click', function(event) {
			// remove current Names and clear table
			test.model.Person.resetPersons();
			removeElems();
			//Search for typed in name
			var ln = document.getElementById('ln_id').value;
			for (var i =0; i<studList.length; i++ )
			{
				if (ln == studList[i].ln)
				{
					var p_obj = new test.model.Person(studList[i].fn, ln, studList[i].crs, studList[i].gpa);
					p_obj.add(p_obj);
				}
			}

			// Create the view
  			var list_view = new test.view.ListView(p_obj.getAllPerson());
		});

	}

	// make sure the page is fully loaded before registering event handler
	window.addEventListener('load', function(event) {
		PersonPageControl();
	});

	return createPerson;

})()
