// Code goes here

var test= function()
{
  var price =[100,500,200,-100,300];
  this.sort(price);
}

var sort= function(price)
{
  var sortedArray= [];
  var priceCopy = price.slice();
  
 for (i = 0; i < price.length; i++)
  {
   var minNum=  Math.min.apply( Math, priceCopy );
    sortedArray.push(minNum);  
    priceCopy.splice(priceCopy.indexOf(minNum),1);
  }
  
  return sortedArray;
}
