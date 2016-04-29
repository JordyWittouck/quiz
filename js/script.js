(function(){
	var scores = {goalgetter: 0, hippie: 0, knuffel: 0, nietsnut: 0, perfectionist: 0, levensgenieter:0};
	var questionCounter = 0;
	var questions = [{
	    question: "Hoe beleef jij een vrije zaterdag?",
	    choices: 
	    	[
		    	a = {
		    		answer: "Ik zie wel wat er gebeurt.",
		    		points: {
			    		goalgetter: 1,
			    		hippie: 4,
			    		knuffel: 2,
			    		nietsnut: 5,
			    		perfectionist: 0,
			    		levensgenieter: 3
			    	}
		    	},
		    	b = {
		    		answer: "Ik heb mijn hele dag al volgepland.",
		    		points: {
			    		goalgetter: 4,
			    		hippie: 1,
			    		knuffel: 3,
			    		nietsnut: 0,
			    		perfectionist: 5,
			    		levensgenieter: 2,
			    	}
		    	}
	    	]
	},{
	    question: "Kies één van de volgende woorden om jezelf te omschrijven:",
	    choices: 
	    	[
		    	a = {
		    		answer: "Leidersfiguur",
		    		points: {
			    		goalgetter: 5,
			    		hippie: 1,
			    		knuffel: 3,
			    		nietsnut: 0,
			    		perfectionist: 4,
			    		levensgenieter: 2
			    	}
		    	},
		    	b = {
		    		answer: "Creatief",
		    		points: {
			    		goalgetter: 1,
			    		hippie: 5,
			    		knuffel: 2,
			    		nietsnut: 0,
			    		perfectionist: 3,
			    		levensgenieter: 4
			    	}
		    	},
		    	c = {
		    		answer: "Vredelievend",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 4,
			    		knuffel: 5,
			    		nietsnut: 2,
			    		perfectionist: 1,
			    		levensgenieter: 3
			    	}
		    	},
		    	d = {
		    		answer: "Chiller",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 4,
			    		knuffel: 2,
			    		nietsnut: 5,
			    		perfectionist: 1,
			    		levensgenieter: 3
			    	}
		    	},
		    	e = {
		    		answer: "Perfectionistisch",
		    		points: {
			    		goalgetter: 4,
			    		hippie: 1,
			    		knuffel: 2,
			    		nietsnut: 0,
			    		perfectionist: 5,
			    		levensgenieter: 3
			    	}
		    	},
		    	f = {
		    		answer: "Levensgenieter",
		    		points: {
			    		goalgetter: 1,
			    		hippie: 3,
			    		knuffel: 2,
			    		nietsnut: 4,
			    		perfectionist: 0,
			    		levensgenieter: 5
			    	}
		    	}
	    	]
	},
	{
	    question: "Hoe ziet jouw ideale werkweek eruit?",
	    choices: 
	    	[
		    	a = {
		    		answer: "Nine-to-fivejob en weekends vrij.",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 0,
			    		knuffel: 4,
			    		nietsnut: 5,
			    		perfectionist: 0,
			    		levensgenieter: 0
			    	}
		    	},
		    	b = {
		    		answer: "Flexibele freelance met glijdende uren.",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 4,
			    		knuffel: 0,
			    		nietsnut: 0,
			    		perfectionist: 0,
			    		levensgenieter: 5
			    	}
		    	},
		    	c = {
		    		answer: "24/7, carrière maken is mijn prioriteit.",
		    		points: {
			    		goalgetter: 5,
			    		hippie: 0,
			    		knuffel: 0,
			    		nietsnut: 0,
			    		perfectionist: 4,
			    		levensgenieter: 0
			    	}
		    	}
	    	]
	},
	{
	    question: "Wat is jouw perfect vakantie?",
	    choices: 
	    	[
		    	a = {
		    		answer: "Lowbudget backpacktrip door Latijns-Amerika.",
		    		points: {
			    		goalgetter: 1,
			    		hippie: 5,
			    		knuffel: 3,
			    		nietsnut: 2,
			    		perfectionist: 0,
			    		levensgenieter: 4
			    	}
		    	},
		    	b = {
		    		answer: "All-inclusive vijf sterren hotel op een tropisch eiland",
		    		points: {
			    		goalgetter: 5,
			    		hippie: 0,
			    		knuffel: 1,
			    		nietsnut: 3,
			    		perfectionist: 4,
			    		levensgenieter: 2
			    	}
		    	}
	    	]
	},
	{
	    question: "Met wie zou je het liefst een koffie gaan drinken?",
	    choices: 
	    	[
		    	a = {
		    		answer: "Bill Gates",
		    		points: {
			    		goalgetter: 5,
			    		hippie: 0,
			    		knuffel: 0,
			    		nietsnut: 0,
			    		perfectionist: 4,
			    		levensgenieter: 0
			    	}
		    	},
		    	b = {
		    		answer: "Ghandi",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 5,
			    		knuffel: 4,
			    		nietsnut: 0,
			    		perfectionist: 0,
			    		levensgenieter: 0
			    	}
		    	},
		    	c = {
		    		answer: "Geef mij maar een cara pils",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 0,
			    		knuffel: 0,
			    		nietsnut: 5,
			    		perfectionist: 0,
			    		levensgenieter: 0
			    	}
		    	},
		    	d = {
		    		answer: "Jani Kazaltzis",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 0,
			    		knuffel: 0,
			    		nietsnut: 0,
			    		perfectionist: 0,
			    		levensgenieter: 5
			    	}
		    	}
	    	]
	},
	{
	    question: "Je favoriete serie of film is?",
	    choices: 
	    	[
		    	a = {
		    		answer: "Suits",
		    		points: {
			    		goalgetter: 5,
			    		hippie: 0,
			    		knuffel: 0,
			    		nietsnut: 0,
			    		perfectionist: 3,
			    		levensgenieter: 0
			    	}
		    	},
		    	b = {
		    		answer: "Into The Wild",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 5,
			    		knuffel: 3,
			    		nietsnut: 0,
			    		perfectionist: 0,
			    		levensgenieter: 0
			    	}
		    	},
		    	c = {
		    		answer: "12 years a slave",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 3,
			    		knuffel: 5,
			    		nietsnut: 0,
			    		perfectionist: 0,
			    		levensgenieter: 0
			    	}
		    	},
		    	d = {
		    		answer: "Geordie Shore",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 0,
			    		knuffel: 0,
			    		nietsnut: 5,
			    		perfectionist: 0,
			    		levensgenieter: 3
			    	}
		    	},
		    	e = {
		    		answer: "Big Bang Theorie",
		    		points: {
			    		goalgetter: 3,
			    		hippie: 0,
			    		knuffel: 0,
			    		nietsnut: 0,
			    		perfectionist: 5,
			    		levensgenieter: 0
			    	}
		    	},
		    	f = {
		    		answer: "Friends",
		    		points: {
			    		goalgetter: 0,
			    		hippie: 0,
			    		knuffel: 0,
			    		nietsnut: 3,
			    		perfectionist: 0,
			    		levensgenieter: 5
			    	}
		    	}
	    	]
	}
	];

	var extraQuestion = {
		question: "Jij hebt een hekel aan:",
		answers: {
			goalgetter: { answer: "Ongemotiveerde mensen die geen initiatief durven nemen" },
			hippie: { answer: "Kapitalisten en materialisten" },
			knuffel: { answer: "Mensen die niks geven om ontwikkelingslanden of het milieu" },
			nietsnut: { answer: "Nerds en strevers: doe eens chill…" },
			perfectionist: { answer: "Slordige mensen die nooit gefocust kunnen werken" },
			levensgenieter: { answer: "Mensen die geen sociaal contact zoeken" }
		}
	}

	var extraQuestionIndexes = [];
	var winners = [];
	var winnersParagraph = document.createElement('p');
		winnersParagraph.classList.add('winner');

	function init(){

		var firstDiv = createQuestionElement(0);
		document.querySelector('.quiz').appendChild(firstDiv);
		var radios = document.getElementsByName('answer');
		var button = document.getElementById('button');

		document.querySelector('.button').addEventListener('click', checkAnswers);
	}

	function checkAnswers(){
		var answerInput = document.querySelector('input[type="radio"]:checked');

		if(questionCounter === questions.length){
			if(extraQuestionIndexes.length > 1){
				console.log(scores[answerInput.value]);
				scores[answerInput.value]++;
				calculateScore();
				nextQuestion();
				return;					
			}

			calculateScore();
			nextQuestion();

		}
		var question = questions[questionCounter].question;
		var answer = questions[questionCounter].choices[answerInput.value].points;

		for (var props in answer){
			scores[props] += answer[props];
		}

		nextQuestion();
	}

	function nextQuestion(){
		questionCounter++;

	    document.querySelector('#question').remove();
	    
	    if(questionCounter<questions.length){
	        var nextDiv = createQuestionElement(questionCounter);
	        //$('#quiz').append(nextDiv);
	        document.querySelector('.quiz').appendChild(nextDiv);
	    } else {
	    	calculateScore();
	    	//renderEndScreen(winners[0]);
	       // document.querySelector('.quiz').appendChild(displayScore());
	    }

	}

	function createQuestionElement(index) {
	    var qDiv = document.createElement('div');
	    qDiv.setAttribute('id','question');
	    var question = document.createElement('h1');
	    question.innerHTML = questions[index].question;
	    qDiv.appendChild(question);
	    qDiv.appendChild(createRadios(index));
	    return qDiv;
	}

	function createExtraQuestionElement(index) {
	    var qDiv = document.createElement('div');
	    qDiv.setAttribute('id','question');
	    var question = document.createElement('h1');
	    question.innerHTML = questions[index].question;
	    qDiv.appendChild(question);
	    qDiv.appendChild(createRadios(index));
	    return qDiv;
	}

	function createRadios(index) {
	    var radioList = document.createElement('ul');
	    var str;
	    for(var i=0; i < questions[index].choices.length ; i++){
	        var item = document.createElement('li');
	        var label = '<label for=' + i + '>' + questions[index].choices[i].answer + '</label>'
	        var input = '<input type="radio" name="answer" id=' + i +' value=' + i + ' />';
	        
	        item.innerHTML = input + label;
	        radioList.appendChild(item);
	    }
	    
	    return radioList;
	    
	}

	function calculateScore(){
		var max = -Infinity, winner, x;
		winners = [];
		for(var x in scores){
			if(scores[x] > max)
				max = scores[x];
				winner = x;
		}
		for(var x in scores){
			if(scores[x] === max){
				winners.push(x);
			}
		}

		if(extraQuestionIndexes.length > 0){

		}

		if(winners.length > 1){

			console.log(winners);
			extraQuestionIndexes = winners;
			renderExtraQuestion(winners);
			return;
		}
		
		if(winners.length === 1){
			renderEndScreen(winners[0]);			
		}



	}

	function renderExtraQuestion(options){
	    //document.querySelector('#question').remove();

		console.log('element created')
        var nextDiv = createExtraQuestionElement(options);
        document.querySelector('.quiz').appendChild(nextDiv);	
	}

	function renderEndScreen(winner){
		var quizFrame = document.querySelector('.quiz');

		winnersParagraph.innerText = winner;
		quizFrame.appendChild(winnersParagraph);
	}

	function createExtraQuestionElement(options){
	    var qDiv = document.createElement('div');
	    qDiv.setAttribute('id','question');
	    var question = document.createElement('h1');
	    question.innerHTML = extraQuestion.question;
	    qDiv.appendChild(question);
	    qDiv.appendChild(createExtraRadios(options));

	   return qDiv;
	}

	function createExtraRadios(options){
	    var radioList = document.createElement('ul');
	    var str;

	    for(var i=0; i < options.length ; i++){
	        var item = document.createElement('li');
	        var input = '<input type="radio" name="answer" id=' + i + ' value=' + i + ' />';
	        var label = '<label for=' + i + '>' + extraQuestion.answers[options[i]].answer + '</label>'

	        
	        item.innerHTML = input + label;
	        radioList.appendChild(item);

	    }
	    
	    return radioList;
	}

	function displayScore() {
		calculateScore();
			    
	}

	init();
})();