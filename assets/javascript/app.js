var card = $("#questions");

var questions = [{
  question: "How tall is the tallest person?",
  answers: ["10 ft", "6.5 ft", "8.25 ft", "9.1 ft"],
  correctAnswer: "8.25ft"
}, {
  question: "How long is the longest breath held under water?",
  answers: ["4.5 min", "15 min", "31 min", "24.3 min"],
  correctAnswer: "24.3min"
}, {
  question: "Who is the fastest person in the world?",
  answers: ["Jackie Joyner Kersee", "Usain Bolt", "Yojan Blake", "Michael Johnson"],
  correctAnswer: "Usain Bolt"
}, {
  question: "How short is the shortest person in the world?",
  answers: ["25 inch.", "36 inch.", "28 inch.", "18 inch."],
  correctAnswer: "25 inch."
}, {
  question: "Who has won the most Olympic gold medals?",
  answers: ["Larisa Latynina", "Mark Spitz", "Michael Phelps", "Serena Williams"],
  correctAnswer: "Michael Phelps"
}];

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },



done: function() {

$.each($("input[name='question-0']:checked"), function() {
  if ($(this).val() === questions[0].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});

$.each($("input[name='question-1']:checked"), function() {
  if ($(this).val() === questions[1].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});

$.each($("input[name='question-2']:checked"), function() {
  if ($(this).val() === questions[2].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});

$.each($("input[name='question-3']:checked"), function() {
  if ($(this).val() === questions[3].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});

$.each($("input[name='question-4']:checked"), function() {
  if ($(this).val() === questions[4].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});

$.each($("input[name='question-5']:checked"), function() {
  if ($(this).val() === questions[5].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});


this.result();
},

result: function() {

clearInterval(timer);

$("#sub-wrapper h2").remove();

card.html("<h2>How'd you do?!</h2>");
card.append("<h3>Correct Answers: " + this.correct + "</h3>");
card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
}
};



$(document).on("click", "#start", function() {
game.start();
});


$(document).on("click", "#done", function() {
game.done();
});
