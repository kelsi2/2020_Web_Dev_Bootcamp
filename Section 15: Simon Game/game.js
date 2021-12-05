$(document).ready(function() {
  const buttonColors = ["red", "green", "blue", "yellow"];
  const gamePattern = [];
  let userClickedPattern = [];
  const started = false;
  let level = 0;
  
  const playSound = (name) => {
    const audio = new Audio(`sounds/${name}.mp3`)
    audio.play();
  }

  const animatePress = (currentColor) => {
    $("#" + currentColor).addClass("pressed");

    setTimeout(() => {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  };

  const checkAnswer = (currentLevel) => {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success")

      if (gamePattern.length === userClickedPattern.length) {
        setTimeout(() => {
          nextSequence()
        }, 1000);
      }
    } else {
      console.log("wrong")
    }
  };
  
  const nextSequence = () => {
    const randomNum = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNum];

    userClickedPattern = [];
    gamePattern = [];
    
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);

    level++;
    $("#level-title").text("Level " + level);
  }

  $(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level" + level);
      nextSequence();
      started = true;
    }
  })
  
  $(".btn").click(function() {
    const userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
  })
})