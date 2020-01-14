var inputJsonArray = [ //first
  [ //second
    [ //third
      '14 - 01 - 2020',
      3,
      9
    ],
    [
      '15 - 01 - 2020',
      34,
      95
    ],
    [
      '16 - 01 - 2020',
      39,
      99
    ]
  ],
  [
    ['1 - 01 - 2020', 3, 9],
    ['5 - 01 - 2020', 34, 95],
    ['6 - 01 - 2020', 39, 99]
  ],
  [
    ['4 - 01 - 2020', 3, 9],
    ['5 - 01 - 2020', 34, 95],
    ['1 - 01 - 2020', 39, 99]
  ]
];

console.log("BEFORE CONVERSION  ARRAY IS ==>")
console.log(inputJsonArray)

for (let k = 0; k < inputJsonArray.length; k++) {
  var firstInnerArray = inputJsonArray[k];
  for (let j = 0; j < firstInnerArray.length; j++) {
    var secondInnerArray = firstInnerArray[j];
    for (let m = 0; m < secondInnerArray.length; m++) {
      if(m == 0){
      // console.log(secondInnerArray[0])
      // console.log("Date Coverted==>")
      //Convert DD-MM-YYYY to YYYY-MM-DD format using Javascript
      var date = secondInnerArray[0];
      var newdate = date.split("-").reverse().join("-");
      // console.log("==>" + newdate)
      //Again insert new Date at same position 
      inputJsonArray[k][j][0] = newdate
      }
    }
  }
}

console.log("FINAL ARRAY IS ==>")
console.log(inputJsonArray)
