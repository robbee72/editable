/* eslint-disable default-case */
var par = 3;
var score = 7;

var toPar = score - par;
switch (toPar) {
  case -3:
    console.log('Double Eagle, Someone just won the the lottery');
    break;
  case -2:
    console.log('Eagle, ');
    break;
  case -1:
    console.log('Birdie');
    break;
  case 0:
    console.log('Par Nice!');
    break;
  case 1:
    console.log('Bogey, Keep the day job!');
    break;
  case 2:
    console.log('Double Bogey, Ouch!');
    break;
  case 3:
    console.log("Triple, This isn't Baseball");
    break;
  case 4:
    console.log("Quad, Skip the next hole and you'll be back to even par ");
    break;
  case 5:
    console.log(
      'Other, Call your PGA Professional a series of lesson maybe in order!'
    );
    break;
}
