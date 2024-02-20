// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(42 - someValue)
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  const dist = distanceTravelledInFeet(start, end)
  console.log("dist: " + dist)
  if (dist <= 400) {
    return 0;
  } else if (dist <= 2000) {
    return (dist-400) * 0.02
  } else if (dist <= 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
