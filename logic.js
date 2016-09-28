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
	var name = $('#name').val();
	var destination = $('#destination').val();
	var firstTime = $('#firstTime').val();
	var frequency = $('#frequency').val();

	console.log(name);
	console.log(destination);
	console.log(firstTime);
	console.log(frequency);


	$('.table').append("<tr><td>"+ name +"</td><td>"+ destination +"</td><td>"+ firstTime +"</td><td>"+ frequency +"</td><td>##</td></tr>");
	// return false;
});	