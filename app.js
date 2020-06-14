var side_alt = ["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];

function throwdice(){

var num1 =  document.getElementById("num").selectedIndex;;
var rand1 = Math.round(Math.random()*5) + 1;
var rand2 = Math.round(Math.random()*5) + 1;


document.getElementById("hisdice1").src = "d" + rand1 + ".png";
document.getElementById("hisdice2").src = "e" + rand2 + ".png";


document.getElementById("hisdice1").alt = side_alt[rand1];
document.getElementById("hisdice2").alt = side_alt[rand2];


who_won(num1,rand1,rand2);
}

function who_won(num1,rand1,rand2){
  let player_points =num1 + 2;
  let my_points = rand1 + rand2 + 2;
  let giffy = winner(player_points,my_points);
  document.getElementById("message").src = " " + giffy;
  document.getElementById("message").alt = giffy;
}

function winner(player_points, my_points) {
  if (player_points == (my_points-1)) {
    return "youwin.gif";
  }
  else if(player_points < my_points){
        return "youlose.gif";
  }
  else if(player_points > my_points){
    return "youlose.gif";
  }
  else{
    return "youlose.gif";
  }

}
