// Problem No 1 : feetToMile

function feetToMile(feet) {
    if (feet < 0)
        return "Feet cannot be negative";
    else {
        var mile;
        mile = feet / 5280;
        return mile;
    }
}
var outcome = feetToMile(10);
console.log(10, " feet = ", outcome.toFixed(5), " mile");


// Problem No 2 : woodCalculator

function woodCalculator(chair,table,bed)
{
   var chair_wood = chair*1;
   var table_wood = table*3;
   var bed_wood = bed*5;
   var total_wood = chair_wood + table_wood + bed_wood;
   return total_wood;
}
var outcome = woodCalculator(2,3,4);
console.log("For making",2,"Chair",3,"Table and",4,"bed, you will need total ",outcome," cubic feet wood");


// Problem No 3 : brickCalculator


function brickCalculator(floor) {
    var brick;
    if (floor >= 1 && floor <= 10) {
        brick = floor * 15000;
        return brick;
    }
    else if (floor >= 11 && floor <= 20) {
        floor = floor - 10;
        brick = 150000 + (floor * 12000);

        return brick;
    }
    else {


        floor = floor - 20;
        brick = 270000 + (floor * 10000);

        return brick;
    }

}
var outcome = brickCalculator(30);
console.log("My building needs ", outcome, " bricks");



// Problem No 4 : tinyFriend

function tinyFriend(name) {
    var min = name[0];
    for (var i = 1; i < name.length; i++) {
        var store = name[i];
        if (min.length > store.length) {
            min = store;
        }
    }
    return min;
}
var friendsName = ["Ashfiq", "Minhaj", "Opu", "Topu"];
var outcome = tinyFriend(friendsName);
console.log("My tiny friend is ", outcome);