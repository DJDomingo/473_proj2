
test = ( function () {

	function ListView(data) {
		console.log("data: " + data);
		this.root = document.getElementById('person_list_id');
		this.content = data;
		this.createChildNodeDOMApi();
	}

	ListView.prototype.createChildNodeDOMApi = function() {
		// empty child nodes
		while (this.root.firstChild) {
			this.root.removeChild(this.root.firstChild);
		}
		var pplList = this.content;
		// Take ppl list and display them
		for (i=0; i<this.content.length; i++) {
			var temp = this.content;
			var li_node = document.createElement('li');
			li_node.id = 'li_Student_id_' + i;

			var li_content = document.createTextNode(this.content[i].getString());
			li_node.appendChild(li_content);
			this.root.appendChild(li_node); // same as document.getElementById("person_list_id").appendChild(li_node);
			//set onclick for li item (Function called is from Control)
			document.getElementById("li_Student_id_" + i).onclick = function() {studInfo(pplList, this.id)};
		}
	} //end ListView

	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.view == undefined) {
		window.testApp.view = {};
	}

	window.testApp.view.ListView = ListView;

	return window.testApp;
})();
