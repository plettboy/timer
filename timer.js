const times = process.argv.slice(2).map(num => Number(num));
//log everything through node and use map to generate new array for each number input
const timer = times => {
times.forEach(num => {
  //edge case, NaN and if number is less than 0
  if (num > 0 && num ) {
    setTimeout(() => console.log("beep", "\x07"), num * 1000); 
    //*1000 to receive correct value
  }
});
};

//timer(times);
