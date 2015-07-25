//  In worst case, a binary search on an array of 100,000 items performs a maximum of 16 comparisons
//  while a linear search within the same array performs a maximum of 100,000 comparisons.
//  finds an element in an array and returns its index if the element is found
Array.prototype.binaryIndexOf = Array.prototype.binaryIndexOf || function binaryIndexOf(value) {
  var firstIndex = 0,
      lastIndex = this.length-1,
      middleIndex = Math.floor((firstIndex+lastIndex)/2);
  while (value !== this[middleIndex] && firstIndex < lastIndex) {
    //  reset the firstIndex or lastIndex
    if (value < this[middleIndex]) {
      lastIndex = middleIndex-1;
    } else {
      firstIndex = middleIndex+1;
    }
    //  reset the middleIndex
    middleIndex = Math.floor((firstIndex + lastIndex)/2);
  }
  //  end of searching the array
  return (this[middleIndex] !== value) ? -1 : middleIndex;
};
//  sample execution of binaryIndexOf
var animals = [
    {type: "dog", age: 2},
    {type: "dog", age: 32},
    {type: "dog", age: 12},
    {type: "dog", age: 21},
    {type: "dog", age: 3},
    {type: "dog", age: 20},
    {type: "dog", age: 22}
];

animals.sort(function(a, b) {
  return (a.age - b.age);
});

console.log(animals.map(function(animal) {
  return animal.age;
}).binaryIndexOf(20));