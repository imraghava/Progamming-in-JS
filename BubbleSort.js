// Code goes here

var bubbleSort= function()
{
  var a = [
    {name: "Rick", age: 30, place: 2},
    {name: "Alan", age: 25, place: 1},
    {name: "Joe", age: 40, place: 4},
    {name: "Dave", age: 35, place: 3}
];

  debugger;
  var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i]["age"] > a[i + 1]["age"]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    for (i = 0; i < a.length; i++) {
    console.log(a[i]);
}
}
