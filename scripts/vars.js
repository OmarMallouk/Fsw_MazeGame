var charselect = "wizzard";
var mapselect = "map1";

var player;

var score
var arrows;
var fireballs; // physics groups
var coins;

var closeddoorimg;

var hp = 10;
var coinscollected = 0;
var state = "idle";

var shootleftlocations1 = [
	[500, 235],
	[610, 300],
	[610, 145],
];
var shootrightlocations1 = [
	[213, 235],
	[40, 300],
];
var shootuplocations1 = [
	[190, 400],
	[303, 400],
	[415, 400],
	[527, 400],
];
var shootdownlocations1 = [
	[213, 50],
	[325, 50],
	[437, 50],
	[370, 150],
	[305, 7150],
];

var shootfireballleftlocations1 = [
	[500, 235],
	[610, 300],
	[610, 145],
];
var shootfireballrightlocations1 = [
	[213, 235],
	[40, 300],
];
var shootfireballuplocations1 = [
	[190, 400],
	[303, 400],
	[415, 400],
	[527, 400],
];
var shootfireballdownlocations1 = [
	[213, 50],
	[325, 50],
	[437, 50],
	[370, 150],
	[305, 7150],
];

var coinlocations1 = [
	[100, 200],
	[200, 200],
	[300, 200],
	[470, 100],
	[170, 100],
	[270, 100],
	[370, 100],
	[400, 200],
	[500, 200],
	[600, 200],
	[130, 350],
	[230, 350],
	[330, 350],
	[430, 350],
	[580, 350],
	[600, 350],
];

var coinlocations2 = [
	[42, 214],
	[289, 62],
	[150, 398],
	[54, 389],
	[391, 137],
	[270, 387],
	[521, 243],
	[425, 332],
	[303, 409],
	[602, 322],
	[521, 243],
	[485, 219],
	[141, 397],
	[100, 400],
	[235, 78],
	[487, 95],
	[522, 102],
	[395, 401],
	[553, 71],
	[203, 158],
	[465, 230],
];

var shootleftlocations2 = [[630, 350]];
var shootrightlocations2 = [[531, 118]];
var shootuplocations2 = [
	[190, 400],
	[340, 400],
	[285, 299],
];
var shootdownlocations2 = [
	[213, 50],
	[400, 50],
	[100, 50],
	[415, 140],
];

var shootleftlocations3 = [
	[610, 100],
	[610, 215],
	[610, 345],
];
var shootrightlocations3 = [];
var shootuplocations3 = [];
var shootdownlocations3 = [
	[145, 50],
	[325, 50],
	[505, 50],
];
var coinlocations3 = [
	[200, 200],
	[128, 330],
	[55, 410],
	[39, 172],
	[255, 396],
	[39, 172],
	[247, 58],
	[420, 70],
	[598, 67],
	[504, 340],
	[340, 160],
];

var shootleftlocations3 = [
	[635, 264],
	[40, 280],
];
var shootrightlocations3 = [
	[40, 280],
	[40, 87],
];

var shootuplocations3 = [
	[190, 400],
	[395, 410],
	[537, 410],
	[385, 93],
];
var shootdownlocations3 = [[213, 50]];
