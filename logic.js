var config = {
    apiKey: "AIzaSyD2hCdtCtJh8y1O45nAk2HENy59HO_gtKM",
    authDomain: "train-cb239.firebaseapp.com",
    databaseURL: "https://train-cb239.firebaseio.com",
    storageBucket: "train-cb239.appspot.com",
    messagingSenderId: "337035393373"
};
firebase.initializeApp(config);
var train = firebase.database().ref();


$("#submit").on('click', function(e){

	e.preventDefault();
	var name = $('#name').val().trim();
	var destination = $('#destination').val().trim();
	var firstTime = $('#firstTime').val().trim();
	var frequency = $('#frequency').val().trim();

	var newTrain = {
		name: name,
		destination: destination,
		firstTime: firstTime,
		frequency: frequency
	}

	train.push(newTrain);

	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.firstTime);
	console.log(newTrain.frequency);

	// clear form
	$('#name').val("");
	$('#destination').val("");
	$('#firstTime').val("");
	$('#frequency').val("");

	// $('.table').append("<tr><td>"+ name +"</td><td>"+ destination +"</td><td>"+ firstTime +"</td><td>"+ frequency +"</td><td>##</td></tr>");
	

});	