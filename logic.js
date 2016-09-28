var config = {
    apiKey: "AIzaSyD2hCdtCtJh8y1O45nAk2HENy59HO_gtKM",
    authDomain: "train-cb239.firebaseapp.com",
    databaseURL: "https://train-cb239.firebaseio.com",
    storageBucket: "train-cb239.appspot.com",
    messagingSenderId: "337035393373"
};

firebase.initializeApp(config);



$("#submit").on('click', function(e){

	e.preventDefault();
	var name = $('#name').val().trim();
	var destination = $('#destination').val().trim();
	var firstTime = $('#firstTime').val().trim();
	var frequency = $('#frequency').val().trim();

	console.log(name);
	console.log(destination);
	console.log(firstTime);
	console.log(frequency);

	var newTrain = {
		train: name,
		destination: destination,
		first_time: firstTime,
		frequent: frequency
	}

	train.push(newTrain);

	// clear form
	$('#name').val();
	$('#destination').val();
	$('#firstTime').val();
	$('#frequency').val();

	// $('.table').append("<tr><td>"+ name +"</td><td>"+ destination +"</td><td>"+ firstTime +"</td><td>"+ frequency +"</td><td>##</td></tr>");
	

});	