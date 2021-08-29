//problem-1 seerToMon---------------------

function seerToMon(seer) {
    if (seer <= 0) {
        return "Oh ! Wrong input.";
    }
    else {
        var mon = seer / 40;
        return mon;
    }
}
console.log(seerToMon(80));
//-----------------------------------------

//problem-2 totalSales---------------------

function totalSales(shirt, pant, juta) {
    var shirtPrice = 100;
    var pantPrice = 200;
    var jutaPrice = 500;

    if (shirt < 0 || pant < 0 || juta < 0) {
        return "sorry ! wrong input";
    }
    else {
        var totalSales = (shirt * shirtPrice) + (pant * pantPrice) + (juta * jutaPrice);
        return totalSales;
    }
}
console.log(totalSales(2, 2, 2));

//------------------------------------------------------

//problem-3 deliveryCost---------------------------------

function deliveryCost(product) {

    var totalCost = 0;

    if (product <= 0) {
        return " sorry Bro.Atfirst bye some product";
    }
    else {

        if (product <= 100) {
            totalCost = product * 100;
        }

        else if (product <= 200) {
            var first100Cost = 100 * 100;
            var remainProduct = product - 100;
            var remainCost = remainProduct * 80;
            totalCost = first100Cost + remainCost;
        }

        else {
            var first100Cost = 100 * 100;
            var second100Cost = 100 * 80;
            var remainProduct = product - 200;
            var nextCost = remainProduct * 50;
            totalCost = first100Cost + second100Cost + nextCost;
        }
    }

    return totalCost;
}
console.log(deliveryCost(300));

//----------------------------------------------------------

// problem-4,perfectFriend-----------------------------------

function perfectFriend(friends) {
    if (friends.length == 0) {
        return "Don't have any friends?";
    }
    else {
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].length == 5) {
                return friends[i];

            }
        }


    }

}
var friends = perfectFriend(['Eyasin', 'Asraful', 'Mushfiqur', 'Tamim', 'Shaklain']);
console.log(friends);

//------------------------------------------------------------

//-----------------Assalamu Alaikum---------------------------
