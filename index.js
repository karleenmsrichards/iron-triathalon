//1. The distance (parameter) identifies which sector of the race the athletes are at.
//2. Sectors of the triathlon are (starting, swimming, running, nearly there)
//3. What is the distance to be covered after each sector (ending point) of the triathlon?
//4. What is the starting point of each sector?
//5. What is the total distance of the triathlon?
//6. Include a condition where the distance remaining is less than 10 miles.
//7. We need the distance to be formatted to 2 decimal places

function iTri(s) {
  //its gonna be a long day!
  if (s === 0) {
    return "Starting Line... Good Luck!";
  }
  if (s <= 2.4) {
    let toFixedNumber = (140.6 - s).toFixed(2);
    return { Swim: `${toFixedNumber} to go!` };
  }
  if (s > 2.4 && s <= 114.4) {
    let toFixedNumber = (140.6 - s).toFixed(2);
    return { Bike: `${toFixedNumber} to go!` };
  }
  if (s > 114.4 && s <= 130.6) {
    let toFixedNumber = (140.6 - s).toFixed(2);
    return { Run: `${toFixedNumber} to go!` };
  }
  if (s > 130.6 && s < 140.6) {
    return { Run: `Nearly there!` };
  }
  if (s > 140.6) {
    return "You're done! Stop running!";
  }
}
