function bumpCounter() {
  const counter = 0;

  return function addBump(counter){
    return counter + 1;
  }
  return function getBumps(counter){
    return counter;
  }
}
