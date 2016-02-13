//

function mergeSort(items){

    // case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }
    // divide array in two halfs
    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    while(left.length || right.length) {
      if(left.length && right.length) {
        if(left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result;
  }
