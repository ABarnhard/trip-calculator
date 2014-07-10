// import prompt function from node module
var prompt = require('sync-prompt').prompt;

// prompt user input
var distance = parseInt(prompt('How many miles will you drive? '));
var costOfGalGas = parseFloat(prompt('How much does gas cost per gallon? $')).toFixed(2);
var tankSize = parseInt(prompt('How many gallons can your gas tank hold? '));
var mpg  = parseInt(prompt('How many miles per gallon (MPG) do you get? '));
var speed = parseInt(prompt('How fast (MPH) will you drive? '));
var vehicle = prompt('What vehicle will you drive (car/truck)? ').toLowerCase();

// initialize other variables
var mphOver55 = speed - 55;
// console.log('mphOver55:', mphOver55);
var mpgOffset;
var effMpg;

// calculate effective MPG for speeds above 55mph
if(mphOver55 > 0){
  if(vehicle === 'car'){
     effMpg = mpg - mphOver55;
  }else if(vehicle === 'truck'){
     effMpg = mpg - (mphOver55 * 3);
  }else{
    console.log('Invalid vehicle, I assume you drive a truck');
    vehicle = 'truck';
    effMpg = mpg - (mphOver55 * 3);
  }
}else{
  effMpg = mpg;
}

// 10mpg is the minimum allowed
effMpg = (effMpg >= 10) ? effMpg : 10;
//console.log('effMpg:', effMpg);

var gallonsOfGas = distance / effMpg;
var totalCostOfGas = costOfGalGas * gallonsOfGas;
var numberOfTanks = gallonsOfGas / tankSize;
var numberOfStops = Math.ceil(numberOfTanks);

// console.log('numberofStops', numberOfStops);
console.log('To go ' + distance + ' miles in your ' + vehicle + ' will cost $' +  totalCostOfGas.toFixed(2) + ', stop ' + numberOfStops + ' times,  and take ' + numberOfTanks.toFixed(2) + ' tanks of gas.');


