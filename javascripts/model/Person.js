test = (function() {
	var person_set = new Array();

	function Person(fn, ln, crs, grades, id) {
		this.first_name = fn;
		this.last_name = ln;
		this.courses = crs;
		this.gpa = grades;
		this.tag = id;
	}

	// return full name of Person
	Person.prototype.getString = function() {
		return this.first_name + " " + this.last_name;
	}

	// return the list of Person objects created
	Person.prototype.getAllPerson = function() {
		return person_set;
	}

	// return 1 Persons info based on their index
	Person.prototype.Person = function(index) {
		return person_set[index];
	}

	// add the newly created Person object to the list
	Person.prototype.add = function(p_obj) {
		person_set.push(p_obj);
		console.log("Adding Person: " + person_set);
	}

	// Empties/Reset the entire person list
	Person.resetPersons = function() {
		person_set = [];
	}

	//get total number of courses
	Person.prototype.numCourses = function() {
		return this.courses.length;
	}

	//return course asked for
	Person.prototype.getCourse = function(index) {
		return this.courses[index];
	}

	//return gpa asked for
	Person.prototype.getGPA = function(index) {
		return this.gpa[index];
	}

	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.model == undefined) {
		window.testApp.model = {};
	}

	window.testApp.model.Person = Person;

	return window.testApp;
})();
