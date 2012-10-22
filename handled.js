var source = $("#the-template").html();
var template = Handlebars.compile(source);
var data = [ users: [
	[username: "alan", firstName: "Alan", lastName: "Smith", email: "alansmith@gmail.com"],
	[username: "john", firstName: "John", lastName: "Smith", email: "johnsmith@gmail.com"],
	[username: "timmy", firstName: "Timmy", lastName: "Smith", email: "timmysmith@gmail.com"]
]];
$("#content-placeholder").html(template(data));
