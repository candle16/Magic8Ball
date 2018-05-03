$(document).ready(function() {

	$('#answer').hide();
	$('#8ball').attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

var GetAnswer = function(question) {

var magic8Ball = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];

var randomDec = Math.random();
var randomSelec = randomDec * magic8Ball.length;
var findNum = Math.floor(randomSelec);

var answer = magic8Ball[findNum];


	console.log(question);
	console.log(answer);


	//click ask anything button//
	//pop-up, then to 'this is where answer goes'//
	var popEvent = function() {

		$('#8ball').effect("shake");
		prompt('Ask a question');

		var answerSpace = document.getElementById('answer');
	answerSpace.innerText = answer;

		$('#answer').fadeIn(7000);
		$('#answer').fadeOut(7000);

		var imageSwap = function() {	$('#8ball').attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png").fadeIn(4000);





	};

	setTimeout(imageSwap, 2000);




	///answer disappears soon with setTimeout)
	};



	$("#questionButton").on('click', popEvent);







};

GetAnswer('Will I win?');
});
