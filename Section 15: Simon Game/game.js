$(document).ready(function() {
  const buttonColors = ["red", "green", "blue", "yellow"];
  const gamePattern = [];
  const userClickedPattern = [];
  
  const playSound = (name) => {
    const audio = new Audio(`sounds/${name}.mp3`)
    audio.play();
  }
  
  const nextSequence = () => {
    const randomNum = Math.floor(Math.random() * 4);
     
    const randomChosenColor = buttonColors[randomNum];
    
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);
  }
  
  $(".btn").click(function() {
    const userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor)
  })

  nextSequence();
})