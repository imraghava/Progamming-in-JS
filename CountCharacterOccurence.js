// Code goes here

var count = function()
{
  var str = "Swati";
  var array = [];
  for  (i = 0; i < str.length; i++)
  {
    var char = str.charAt(i);
    var re = new RegExp(char,"g");
    var count = str.match(re).length;
    var charCount = {};
    if (array.indexOf(char)<=0)
    {
    charCount[char]=count;
    }
    array.push(charCount);
  }
  
 return array;  
}
