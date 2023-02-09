var guests = ["Adam", "Brian", "Damien", "Ellie"];
var ages = [28, 34, 29, 37];
var likesDnD = [true, false, true, true];
//booleans arrays don't quite make sense to me yet. 
// I've reviewed documentation and sent pm's to get some help. 
// while I wait on that I'm going to submit all that I currently understand
// with the intent of resubbing this. 

guests.reverse();
console.log(guests);
//Reverses order of the array. Pretty cool!

ages.shift(0,1);
console.log(ages);
//removes indexed elements from the array. So whatever position is being referenced,
//that value disappears. 

guests.push ("Frank");
console.log(guests);
//Adds listed object to the end of the array and returns new list. 

//Index positions refer to the placement of the item within the array. Positions begin with 
//0, so the first item, whether that be a number, string, etc is marked as 0. 
//counting the items and then subtracting 1 should give you the corrext reference position. 
