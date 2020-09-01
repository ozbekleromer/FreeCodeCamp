/*
#100 doors
There are 100 doors in a row that are all initially closed. 
You make 100 passes by the doors. 
The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. 
The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass. 
Return the final result in an array, with only the door number included in the array if it is open.
*/

function getFinalOpenedDoors(numDoors) {
  //init variables
  let doors = [];
  numDoors = [];
  for(let i=0; i<100; i++) {
     doors.push(false); 
  }
  //toggle doors at every tour
  for(let i=0; i<100; i++) {
    for(let j=i; j<100; j+=(i+1)) {
      doors[j] = !doors[j];
    }
  }
  //get the indexes of open doors
  let index = doors.findIndex(element => element);
  while(index != -1) {
    //add numDoors.length to index because every time, that doors splice, index's shifts
    numDoors.push(index + 1 + numDoors.length);
    doors.splice(index, 1);
    index = doors.findIndex(element => element);
  }
  return numDoors;
}
