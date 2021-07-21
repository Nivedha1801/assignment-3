// //section 1
// alert("Hello World");
// alert("Hey there!");
// //section 2
// var daysInYear = 365.25;
// var daysInWeek = 7;
// var yearsInLifetime = 80;
// alert("No of weeks: " + Math.floor((daysInYear * yearsInLifetime) / daysInWeek) + " weeks");
// //section 3
// var greeting = "Hello";
// var name1 = "World"
// var comb=greeting + " " + name1
// alert(comb);
// var str = comb.replaceAll('o', '0').replaceAll('l', '1');
// var reverse_string="A coding device!"
// alert([ ...reverse_string ].reverse().join(''))
//section 4
var a = parseInt("100") + "<br>";
var b = parseInt("2021@kternai") + "<br>";
var c = parseInt("kternai@2021") + "<br>";
var d = parseInt("3.14") + "<br>";
var e = parseInt("21 7 2018") + "<br>";
var f = parseInt("100",2) + "<br>";
var g = parseInt("8",8) + "<br>";
var h = parseInt("15",8)+ "<br>";
var i = parseInt("16",16)+ "<br>";
var j = parseInt("0x16")+ "<br>";
var n = a + b + c + d + e + f + g + "<br>" + h + i + j;
document.getElementById("section4").innerHTML = n;
//section 5
var hour = new Date().getHours();
var day = "";
if (hour < 12)
    day = "Morning";
else if (hour < 18 && hour >= 12)
    day = "Afternoon";
else if (hour >=18 && hour < 21)
    day = "Evening";
else
    day = "Night";
alert("Good " + day);
//section 6
function sandwich_calculator (slicesOfBread,slicesOfCheese) {
    var bread = Math.floor(slicesOfBread / 2);
    var sandwich = Math.min(bread, slicesOfCheese)
    alert(sandwich)
}