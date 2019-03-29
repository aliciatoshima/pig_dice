// Business Logic for PigDice ---------
function Player() {
  this.total = total;
  this.current_total = current_total;
}

Player.prototype.add = function() {
  this.total =  this.total + this.current_total;
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

var current_total = 0
var total = 0

$(document).ready(function(){

var Player1 = new Player(total, current_total);
var Player2 = new Player(total, current_total);
var img = new Image();

  // when roll is clicked, show the roll of the dice
  //console.log(Player1.current_total)

  $("#p1-roll").click(function() {

    roll1 = randInt(1,7);
    $(".p1-roll").text(roll1)
    img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_" + roll1 + "-512.png";
    img.alt = "dice2";
    img.style.width = "300px";

    $(".img").empty().append(img);
    $(".img").show()

    if (roll1 === 1) {

      Player1.current_total = 0
      //$(".p1-roll").empty()

      //alert("Player 2's turn!")
      $(".player").text("2")
      $(".message").show()

      document.getElementById("p1-roll").disabled = true
      document.getElementById("p1-hold").disabled = true
      //$(".img").empty()
    } else {
      // img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_" +roll1 + "-512.png";
      // img.alt = "dice2";
      // img.style.width = "300px";
      //
      // $(".img").empty().append(img);
      // $(".img").show()

     Player1.current_total = Player1.current_total + roll1
    }

    $(".p1-current").text(Player1.current_total)
    });


    $("#p2-roll").click(function() {
      //debugger;
      roll2 = randInt(1,7);
      $(".p2-roll").text(roll2)

      if (roll2 === 1) {
        Player2.current_total = 0
        $(".p2-roll").empty()
        alert("Player 1's turn!")
        $(".img").empty()
        document.getElementById("p1-roll").disabled = false
        document.getElementById("p1-hold").disabled = false
      } else {

        img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_" +roll2 + "-512.png";
        img.alt = "dice2";
        img.style.width = "300px";

        $(".img").empty().append(img);
        $(".img").show()


        Player2.current_total = Player2.current_total + roll2;
      }

      $(".p2-current").text(Player2.current_total)
      });

  $("#p1-hold").click(function() {

    Player1.add()

    $(".p1-total").text(Player1.total)
    //p2-roll").empty()
    Player1.current_total = 0

    if (Player1.total >= 100) {
      //alert("Player 1 has won!")
      document.getElementById("p1-roll").disabled = true
      document.getElementById("p1-hold").disabled = true
      $(".who-won").text("1")
      $(".winner").show()
      $(".reset").show()
    } else {
      //alert("Player 2's turn!")
      $(".player").text("2")
      $(".message").show()

      document.getElementById("p1-roll").disabled = true
      document.getElementById("p1-hold").disabled = true
      $(".img").empty()
    }
  });



  $("#p2-hold").click(function() {

    Player2.add()

    $(".p2-total").text(Player2.total)
    //p2-roll").empty()
    Player2.current_total = 0

    if (Player2.total >= 100) {
      //alert("Player 1 has won!")
      $(".who-won").text("2")
      $(".winner").show()
      $(".reset").show()
    } else {
      //alert("Player 1's turn!")
      $(".img").empty()
      document.getElementById("p1-roll").disabled = false
      document.getElementById("p1-hold").disabled = false
    }

  });

  $("#reset").click(function() {
    location.reload();
  });


});
